import { useState, Dispatch, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Main,
  Header,
  Container,
  NoteNotFound,
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

  useEffect(() => {
    document.title = "Edit note";
  }, []);

  return (
    <div className="App">
      <Header />
      <Main>
        <Container>
          {selectedNote === undefined ? (
            <NoteNotFound />
          ) : (
            <EditNoteContent selectedNote={selectedNote} dispatch={dispatch} />
          )}
        </Container>
      </Main>
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
    disabledSaveButton: false,
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
      <h2 className="pt-2 text-xl font-semibold capitalize">Edit Note</h2>
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
      <div className="float-right my-2 grid w-56 grid-cols-2 gap-2">
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
