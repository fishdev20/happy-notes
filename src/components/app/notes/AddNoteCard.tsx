import { Card } from "@/components/ui/card";
import { useSidebar } from "@/components/ui/sidebar";
import { Plus } from "lucide-react";
import { Link } from "react-router-dom";

export default function AddNoteCard() {
  const { setOpen } = useSidebar();
  return (
    <Card className="p-4 shadow-md rounded-lg hover:bg-gray-100">
      <Link
        to={`/notes/add-note`}
        state={{ title: "Add New Note" }}
        className="w-full h-full flex justify-center items-center"
        onClick={() => setOpen(false)}
      >
        <Plus size={48} color="black" />
      </Link>
    </Card>
  );
}
