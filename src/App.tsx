import { BrowserRouter, Routes, Route } from "react-router-dom";

//pages
import Note from "src/pages/Note";
import Notes from "src/pages/Notes";
import NewNote from "src/pages/NewNote";
import EditNote from "src/pages/EditNote";
import NotFound from "src/pages/404";
import SearchNotes from "./pages/SearchNote";

function App() {
  const activeNotes = <Notes page="active" />;
  const archivedNotes = <Notes page="archived" />;

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={activeNotes} />
        <Route path="archived" element={archivedNotes} />
        <Route path="new-note" element={<NewNote />} />
        <Route path="note/:id" element={<Note />} />
        <Route path="edit/:id" element={<EditNote />} />
        <Route path="search" element={<SearchNotes />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
