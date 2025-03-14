import { Route, HashRouter as Router, Routes } from "react-router";
import "./App.css";
import Layout from "./components/app/Layout";
import Archive from "./components/app/archive/Archive";
import Calendar from "./components/app/calendar/Calendar";
import Notes from "./components/app/notes/Notes";
import Trash from "./components/app/trash/Trash";

function App() {
  return (
    <Router>
      <Layout>
        {" "}
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] min-h-screen">
          <Routes>
            <Route path="/notes" element={<Notes />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/archive" element={<Archive />} />
            <Route path="/trash" element={<Trash />} />
            <Route path="/trash" element={<Trash />} />
          </Routes>
        </div>
      </Layout>
    </Router>
  );
}

export default App;
