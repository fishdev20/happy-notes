import { NoteLayout } from "@/types/models/Layout";
import { create } from "zustand";

type Store = {
  isScrolled: boolean;
  activeNoteLayout: NoteLayout;
  setIsScrolled: (value: boolean) => void;
  setActiveNoteLayout: (value: NoteLayout) => void;
};

const useLayoutStore = create<Store>()((set) => ({
  isScrolled: false,
  activeNoteLayout: NoteLayout.SOURCE,
  setIsScrolled: (value) => {
    set(() => ({ isScrolled: value }));
  },
  setActiveNoteLayout: (value: NoteLayout) => {
    set(() => ({ activeNoteLayout: value }));
  },
}));

export default useLayoutStore;
