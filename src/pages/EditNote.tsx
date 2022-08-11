import { useState, Dispatch } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  Header,
  Container,
  Checkbox,
  Input,
  Textarea,
  SimpleButton,
} from "src/components";
import { ACTIONS, useAppContext } from "src/contexts/appContext";

function EditNote() {
  const { id } = useParams();

  const { state, dispatch } = useAppContext();
  const selectedNote = state.notes.find((n) => n.id.toString() === id);

  return (
    <div className="App">
      <Header />
      <main className="pb-[56px] md:pb-[90px]">
        <Container>
          {selectedNote === undefined ? (
            <NoteNotFound />
          ) : (
            <EditNoteContent selectedNote={selectedNote} dispatch={dispatch} />
          )}
        </Container>
      </main>
    </div>
  );
}

function NoteNotFound() {
  return (
    <div className="flex h-[calc(100vh_-_128px)] md:h-[calc(100vh_-_162px)] items-center justify-center">
      <p className="font-semibold">
        Note not found, return to{" "}
        <Link className="text-blue-500" to="/">
          homepage
        </Link>
        .
      </p>
    </div>
  );
}

type EditNoteContentProps = {
  selectedNote: {
    title: string;
    body: string;
    archived: boolean;
  };

  dispatch: Dispatch<any>;
};

function EditNoteContent({ selectedNote, dispatch }: EditNoteContentProps) {
  const navigate = useNavigate();
  const [note, setNote] = useState({
    ...selectedNote,
    titleError: "",
    disabledSaveButton: true,
  });

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
    setNote({
      ...selectedNote,
      titleError: "",
      disabledSaveButton: true,
    });
  };

  const handleSaveNote = () => {
    dispatch({ type: ACTIONS.EDIT, payload: note });
    handleResetNote();
    navigate("/");
  };

  return (
    <>
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
          Update
        </SimpleButton>
      </div>
    </>
  );
}

export default EditNote;
