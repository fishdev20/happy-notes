import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";
import { Link } from "react-router-dom";
import Note from "shared/model/Note";

interface NotePreviewProps {
  note: Note;
}
export default function NotePreview(props: NotePreviewProps) {
  const note = props.note;
  return (
    <Card className="p-4 shadow-md rounded-lg hover:bg-gray-100">
      <Link to={`/notes/${note.id}`} key={note.id} state={{ title: note.title }}>
        <div className="flex justify-between items-center">
          <p className="text-left text-gray-400">{new Date(note.createdAt).toLocaleDateString()}</p>
          <div>
            <Star className=" cursor-pointer h-5 w-5 text-gray-500 hover:text-yellow-500" />
          </div>
        </div>
        <h3 className="text-lg font-semibold text-left">{note.title}</h3>
        <div className="mt-2 text-sm text-gray-500">
          <div className="flex gap-2 mt-2">
            {note.tag.map((tag, index) => (
              <Badge key={index}>{tag}</Badge>
            ))}
          </div>
        </div>
      </Link>
    </Card>
  );
}
