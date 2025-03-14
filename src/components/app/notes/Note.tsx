import { useParams } from "react-router-dom";

const Note = () => {
  const { noteId } = useParams();

  console.log(noteId);

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

  return <div>Note {noteId}</div>;
};

export default Note;
