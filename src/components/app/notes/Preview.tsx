import { vscodeDark } from "@uiw/codemirror-theme-vscode";
import CodeMirror from "@uiw/react-codemirror";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkBreaks from "remark-breaks";
import remarkGfm from "remark-gfm";

const Preview = ({ markdownContent }: { markdownContent: string }) => {
  const handleLinkClick = (href: string) => {
    if (href.startsWith("#")) {
      document.getElementById(href.substring(1))?.scrollIntoView();
    } else {
      window.ipcRenderer.invoke("open-external-link", href);
    }
  };

  return (
    <div className="prose prose-2xl h-full w-full p-2">
      <Markdown
        remarkPlugins={[remarkGfm, remarkBreaks]}
        rehypePlugins={[rehypeRaw]}
        components={{
          a: ({ node, ...props }) => {
            return (
              <a
                {...props}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(props.href as string);
                }}
                className="text-blue-500 underline hover:text-blue-700"
              />
            );
          },
          code: ({ className, children, ...rest }) => {
            const language = className?.replace("language-", "") || "plaintext";

            if (!className) {
              // Inline Code
              return (
                <span {...rest} className="bg-gray-300 px-1 py-0.5 rounded text-sm text-black">
                  {children}
                </span>
              );
            }

            // Block Code (Rendered with CodeMirror)
            return (
              <CodeMirror
                value={String(children).trim()}
                className="border-none outline-none rounded-lg"
                //   extensions={[
                //     // markdown({
                //     //   base: markdownLanguage,
                //     //   codeLanguages: languages["javascript"],
                //     // }),
                //     langs[language === "js" ? "javascript" : language](),
                //   ]}
                theme={vscodeDark}
                editable={false}
                basicSetup={{
                  lineNumbers: false,
                  foldGutter: false,
                  highlightActiveLine: false,
                }}
              />
            );
          },
        }}
      >
        {markdownContent}
      </Markdown>
    </div>
  );
};

export default Preview;
