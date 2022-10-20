import { useAppContext } from "src/contexts/appContext";
import {
  Main,
  Header,
  Container,
  NewNoteButton,
  NavBar,
  DataNotFound,
} from "src/components";
import NotesContainer from "src/components/NotesContainer";
import { useEffect } from "react";

function SearchNotes() {
  const { state } = useAppContext();

  useEffect(() => {
    document.title = "Search " + state.search;
  }, [state.search]);

  const matchNotes = state.notes.filter((note) => {
    return note.title.toLowerCase().search(state.search.toLowerCase()) !== -1;
  });

  const activeNotesMatch = matchNotes.filter((note) => note.archived === false);
  const archivedNotesMatch = matchNotes.filter(
    (note) => note.archived === true
  );

  return (
    <div className="App">
      <Header />
      <Main>
        <Container>
          <p className="my-2 font-semibold text-gray-500">
            {matchNotes.length} results for "{state.search}"
          </p>

          {matchNotes.length === 0 && <DataNotFound />}

          {activeNotesMatch.length > 0 && (
            <>
              <h2 className="py-2 text-xl font-semibold capitalize">
                Active Notes
              </h2>
              <NotesContainer notes={activeNotesMatch} />
            </>
          )}

          {archivedNotesMatch.length > 0 && (
            <>
              <h2 className="py-2 text-xl font-semibold capitalize">
                Archived Notes
              </h2>
              <NotesContainer notes={archivedNotesMatch} />
            </>
          )}
        </Container>

        <NewNoteButton />
        <NavBar page="search" />
      </Main>
    </div>
  );
}

export default SearchNotes;
