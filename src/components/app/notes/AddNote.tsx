import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import useLayoutStore from "@/store/layout/useLayoutStore";
import useMarkdownStore from "@/store/markdown/useMarkdownStore";
import { NoteLayout } from "@/types/models/Layout";
import { useEffect } from "react";
import CodeEditor from "./CodeEditor";
import Preview from "./Preview";
import Menu from "./menu/Menu";

export default function AddNote() {
  const { markdownContent, setMarkdownContent } = useMarkdownStore();
  const { isScrolled, activeNoteLayout, setActiveNoteLayout } = useLayoutStore();

  useEffect(() => {
    setActiveNoteLayout(NoteLayout.SOURCE);
  }, []);

  const handleChange = (value: string) => {
    setMarkdownContent(value);
  };

  return (
    <div className="flex flex-col gap-4 h-full min-h-[calc(100svh-4rem-4rem)] relative">
      <Menu />
      {activeNoteLayout === NoteLayout.SOURCE && (
        <CodeEditor value={markdownContent} onChange={handleChange} />
      )}
      {activeNoteLayout === NoteLayout.DIFF && (
        <ResizablePanelGroup direction="horizontal">
          <ResizablePanel defaultSize={50} className="h-full" maxSize={80}>
            <CodeEditor value={markdownContent} onChange={handleChange} />
          </ResizablePanel>
          <ResizableHandle
            withHandle
            className="bg-gray-400 relative flex items-center justify-center"
          />
          <ResizablePanel defaultSize={50} className="h-full" maxSize={80}>
            <Preview markdownContent={markdownContent} />
          </ResizablePanel>
        </ResizablePanelGroup>
      )}
      {activeNoteLayout === NoteLayout.PREVIEW && <Preview markdownContent={markdownContent} />}
      {/* <Tabs defaultValue="source" className="w-full flex flex-col">
        <div className="flex gap-2 sticky top-2 right-2 z-10 justify-end">

          <TabsList
            className={`grid grid-cols-3 transition-all duration-300 ${
              isScrolled ? "bg-gray-100/50 backdrop-blur-lg" : "bg-gray-200"
            }`}
          >
            <TabsTrigger value="source">Source</TabsTrigger>
            <TabsTrigger value="diff">Diff</TabsTrigger>
            <TabsTrigger value="preview">Preview</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="source">
          <CodeEditor value={markdownContent} onChange={handleChange} />
        </TabsContent>
        <TabsContent value="diff">

        </TabsContent>
        <TabsContent value="preview">
          <Preview markdownContent={markdownContent} />
        </TabsContent>
      </Tabs> */}
    </div>
  );
}
