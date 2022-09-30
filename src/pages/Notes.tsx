import { Header, Container, NewNoteButton, NavBar } from "src/components";
import NotesContainer from "src/components/NotesContainer";
import { useAppContext } from "src/contexts/appContext";

type NotesProps = {
  page: "active" | "archived";
};

function Notes({ page }: NotesProps) {
  const { state } = useAppContext();
  const filteredNotes = state.notes.filter((note) => {
    if (page === "active" && note.archived === false) {
      return true;
    } else if (page === "archived" && note.archived === true) {
      return true;
    }

    return false;
  });

  return (
    <div className="App">
      <Header />
      <main className="pb-[56px] md:pb-[90px]">
        <Container>
          <h2 className="py-2 text-xl font-semibold capitalize">
            {page} Notes
          </h2>

          <NotesContainer notes={filteredNotes} />
        </Container>

        <NewNoteButton />
        <NavBar page={page} />
      </main>
    </div>
  );
}

export default Notes;
