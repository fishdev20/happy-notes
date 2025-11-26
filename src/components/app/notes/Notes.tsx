import mockNotes from "@/mockData";
import AddNoteCard from "./AddNoteCard";
import NotePreview from "./NotePreview";
import CategoryFilter from "./filter/Filter";

const Notes = () => {
  return (
    <div>
      <CategoryFilter />
      <div className="grid grid-cols-1 gap-8 p-4 md:grid-cols-2 lg:grid-cols-3">
        <AddNoteCard />
        {mockNotes.map((note) => (
          <NotePreview note={note} key={note.id} />
        ))}
      </div>
    </div>
  );
};

export default Notes;
