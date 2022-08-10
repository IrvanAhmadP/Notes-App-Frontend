import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Header,
  Container,
  Checkbox,
  Input,
  Textarea,
  SimpleButton,
} from "src/components";
import { ACTIONS, useAppContext } from "src/contexts/appContext";

function NewNote() {
  const navigate = useNavigate();
  const { dispatch } = useAppContext();

  const initialNote = {
    title: "",
    titleError: "",
    body: "",
    archived: false,
    disabledSaveButton: true,
  };
  const [note, setNote] = useState(initialNote);

  const handleChangeTitle = (e: any) => {
    const value = e.target.value;
    const MIN = 5,
      MAX = 100;
    let isTitleError, titleError;

    if (value.length < MIN) {
      isTitleError = true;
      titleError = `The title must be at least ${MIN} characters`;
    } else if (value.length > MAX) {
      isTitleError = true;
      titleError = `The title maximum ${MAX} characters`;
    } else {
      isTitleError = false;
      titleError = "";
    }

    setNote({
      ...note,
      title: value,
      titleError: titleError,
      disabledSaveButton: isTitleError,
    });
  };

  const handleResetNote = () => {
    setNote(initialNote);
  };

  const handleSaveNote = () => {
    dispatch({
      type: ACTIONS.ADD,
      payload: { ...note, id: +new Date(), createdAt: new Date().toJSON() },
    });
    handleResetNote();
    navigate("/");
  };

  return (
    <div className="App">
      <Header />
      <main className="pb-[56px] md:pb-[90px]">
        <Container>
          <h2 className="text-xl capitalize font-semibold pt-2">New Note</h2>
          <Input
            label="Title"
            error={note.titleError}
            placeholder="Title"
            value={note.title}
            handleChange={handleChangeTitle}
          />
          <Textarea
            label="Body"
            placeholder="Write a note here..."
            value={note.body}
            handleChange={(e) => setNote({ ...note, body: e.target.value })}
          />
          <Checkbox
            id="archive"
            label="Archive"
            checked={note.archived}
            handleChange={(e) => {
              setNote({ ...note, archived: e.target.checked });
            }}
          />
          <div className="my-2 grid grid-cols-2 w-56 float-right gap-2">
            <SimpleButton
              color="bg-red-400 text-white"
              handleClick={handleResetNote}
            >
              Reset
            </SimpleButton>
            <SimpleButton
              disabled={note.disabledSaveButton}
              color="bg-blue-400 text-white"
              handleClick={handleSaveNote}
            >
              Save
            </SimpleButton>
          </div>
        </Container>
      </main>
    </div>
  );
}

export default NewNote;
