import { useParams } from "react-router-dom";
import { Main, Header, Container, NavBar, NewNoteButton } from "src/components";
import { ACTIONS, useAppContext } from "src/contexts/appContext";

function Note() {
  const { id } = useParams();
  const { state } = useAppContext();

  const note = state.notes.find((note) => note.id.toString() === id);

  return (
    <div className="App">
      <Header />
      <Main>
        <Container>
          <div className="py-4">
            <h1 className="text-2xl">{note?.title}</h1>
            <div>{note?.body}</div>
          </div>
        </Container>
      </Main>
      <NewNoteButton />
      <NavBar page="search" />
    </div>
  );
}

export default Note;
