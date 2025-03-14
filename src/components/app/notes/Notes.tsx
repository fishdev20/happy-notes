import { Link } from "react-router-dom";

const Notes = () => {
  const testNotes = [
    {
      title: "test note 1",
      id: 1,
    },
    {
      title: "test note 2",
      id: 2,
    },
    {
      title: "test note 3",
      id: 3,
    },
  ];
  return (
    <div>
      {testNotes.map((note) => (
        <Link to={`/notes/${note.id}`} key={note.id}>
          {note.title}
        </Link>
      ))}
    </div>
  );
};

export default Notes;
