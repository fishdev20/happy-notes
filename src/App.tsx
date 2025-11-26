import { Navigate, Route, HashRouter as Router, Routes } from "react-router";
import "./App.css";
import Layout from "./components/app/Layout";
import Archive from "./components/app/archive/Archive";
import Calendar from "./components/app/calendar/Calendar";
import AddNote from "./components/app/notes/AddNote";
import NoteDetail from "./components/app/notes/NoteDetail";
import Notes from "./components/app/notes/Notes";
import Trash from "./components/app/trash/Trash";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/notes" />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/notes/:noteId" element={<NoteDetail />} />
          <Route path="/notes/add-note" element={<AddNote />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/archive" element={<Archive />} />
          <Route path="/trash" element={<Trash />} />
          <Route path="/trash" element={<Trash />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
