import { useState } from "react";
import {
  Header,
  Container,
  Input,
  Textarea,
  SimpleButton,
} from "src/components";

function NewNote() {
  const [note, setNote] = useState({
    title: "",
    body: "",
    archived: false,
  });

  return (
    <div className="App">
      <Header />
      <main className="pb-[56px] md:pb-[90px]">
        <Container>
          <h2 className="text-xl capitalize font-semibold pt-2">New Note</h2>
          <Input
            label="Title"
            placeholder="Title"
            value={note.title}
            handleChange={(e) => setNote({ ...note, title: e.target.value })}
          />
          <Textarea
            label="Body"
            placeholder="Write a note here..."
            value={note.body}
            handleChange={(e) => setNote({ ...note, body: e.target.value })}
          />
          <div className="w-full">
            <input
              type="checkbox"
              onChange={(e) => setNote({ ...note, archived: e.target.checked })}
            />{" "}
            Archive
          </div>
          <div className="my-2 grid grid-cols-2 w-56 float-right gap-4">
            <SimpleButton color="bg-gray-300">Cancel</SimpleButton>
            <SimpleButton color="bg-blue-400 text-white">Save</SimpleButton>
          </div>
        </Container>
      </main>
    </div>
  );
}

export default NewNote;
