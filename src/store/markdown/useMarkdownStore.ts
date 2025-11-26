import { create } from "zustand";

type Store = {
  markdownContent: string;
  setMarkdownContent: (value: string) => void;
};

const useMarkdownStore = create<Store>()((set) => ({
  markdownContent: "## Write your note here...",
  setMarkdownContent: (value) => {
    set(() => ({ markdownContent: value }));
  },
}));

export default useMarkdownStore;
