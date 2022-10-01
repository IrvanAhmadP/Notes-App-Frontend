import { useSearchParams } from "react-router-dom";
import { useAppContext } from "src/contexts/appContext";
import { Header, Container, NewNoteButton, NavBar } from "src/components";
import NotesContainer from "src/components/NotesContainer";

function SearchNotes() {
  const { state } = useAppContext();
  const [searchParams] = useSearchParams();

  const keyword = searchParams.get("keyword");

  const matchNotes = state.notes.filter((note) => {
    let searchMatch = true;
    if (keyword !== "" && keyword !== null) {
      searchMatch = note.title.toLowerCase().search(keyword) !== -1;
    }

    return false;
  });

  const activeNotesMatch = matchNotes.filter((note) => note.archived === false);
  const archivedNotesMatch = matchNotes.filter(
    (note) => note.archived === true
  );

  return (
    <div className="App">
      <Header />
      <main className="pb-[56px] md:pb-[90px]">
        <Container>
          {state.search !== "" && (
            <p className="my-2 font-semibold text-gray-500">
              {matchNotes.length} results for "{state.search}"
            </p>
          )}

          <h2 className="py-2 text-xl font-semibold capitalize">
            Active Notes
          </h2>
          <NotesContainer notes={activeNotesMatch} />

          <h2 className="py-2 text-xl font-semibold capitalize">
            Archived Notes
          </h2>
          <NotesContainer notes={archivedNotesMatch} />
        </Container>

        <NewNoteButton />
        <NavBar page="search" />
      </main>
    </div>
  );
}

export default SearchNotes;
