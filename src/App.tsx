import { BrowserRouter, Routes, Route } from "react-router-dom";

//pages
import Notes from "src/pages/Notes";
import NewNote from "src/pages/NewNote";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Notes page="active" />} />
        <Route path="archived" element={<Notes page="archived" />} />
        <Route path="new-note" element={<NewNote />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
