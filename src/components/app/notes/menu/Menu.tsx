import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";
import useLayoutStore from "@/store/layout/useLayoutStore";
import { NoteLayout } from "@/types/models/Layout";

export default function Menu() {
  const { isScrolled, activeNoteLayout, setActiveNoteLayout } = useLayoutStore();
  return (
    <Menubar
      className={`transition-all duration-300 ${
        isScrolled ? "bg-gray-100/50 backdrop-blur-lg" : "bg-white"
      } gap-2 sticky top-2 right-2 z-10 self-end`}
    >
      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent
          className={`transition-all duration-300 ${
            isScrolled ? "bg-gray-100/50 backdrop-blur-3xl" : "bg-gray-200"
          }`}
          align="start"
        >
          <MenubarItem>
            New Tab <MenubarShortcut>⌘T</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            New Window <MenubarShortcut>⌘N</MenubarShortcut>
          </MenubarItem>
          <MenubarItem disabled>New Incognito Window</MenubarItem>
          <MenubarSeparator />
          <MenubarSub>
            <MenubarSubTrigger>Share</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>Email link</MenubarItem>
              <MenubarItem>Messages</MenubarItem>
              <MenubarItem>Notes</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSeparator />
          <MenubarItem>
            Print... <MenubarShortcut>⌘P</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>View</MenubarTrigger>
        <MenubarContent
          className={`transition-all duration-300 ${
            isScrolled ? "bg-gray-100/50 backdrop-blur-lg" : "bg-gray-200"
          }`}
        >
          {Object.values(NoteLayout).map((layout) => (
            <MenubarCheckboxItem
              key={layout}
              checked={activeNoteLayout === layout}
              onCheckedChange={() => setActiveNoteLayout(layout)}
            >
              {layout}
            </MenubarCheckboxItem>
          ))}
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}
