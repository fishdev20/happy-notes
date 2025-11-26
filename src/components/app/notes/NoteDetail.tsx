import mockNotes from "@/mockData";
import { useParams } from "react-router-dom";

const NoteDetail = () => {
  const { noteId } = useParams();

  const note = mockNotes.find((mock) => mock.id === noteId);

  return <div>{note.title}</div>;
};

export default NoteDetail;
