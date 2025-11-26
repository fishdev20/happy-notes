import { markdown, markdownLanguage } from "@codemirror/lang-markdown";
import { languages } from "@codemirror/language-data";
import { vscodeDark } from "@uiw/codemirror-theme-vscode";
import CodeMirror from "@uiw/react-codemirror";

const CodeEditor = ({ value, onChange }: { value: string; onChange: (value: string) => void }) => {
  return (
    <CodeMirror
      className="h-full font-mono editor rounded-sm relative overflow-auto"
      value={value}
      onChange={onChange}
      placeholder="Write your markdown here..."
      extensions={[markdown({ base: markdownLanguage, codeLanguages: languages })]}
      basicSetup={{
        foldGutter: false,
        highlightActiveLine: false,
        highlightActiveLineGutter: false,
      }}
      theme={vscodeDark}
    />
  );
};

export default CodeEditor;
