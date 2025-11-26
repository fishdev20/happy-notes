import Note from "shared/model/Note";
import { create } from "zustand";

type Store = {
  notes: Note[];
  getNotes: () => void;
  addNote: (newNote: Note) => void;
  updateNote: (newNote: Note) => void;
  deleteNote: (noteId: string) => void;
};

const useNoteStore = create<Store>()((set) => ({
  notes: [],
  getNotes: () => {
    set(() => ({ notes: [] }));
  },
  addNote: (newNote: Note) => {
    set(() => ({ notes: [] }));
  },
  updateNote: (newNote: Note) => {
    set(() => ({ notes: [] }));
  },
  deleteNote: (noteId: string) => {
    set(() => ({ notes: [] }));
  },
}));

export default useNoteStore;
