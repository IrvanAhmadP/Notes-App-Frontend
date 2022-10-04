import { useSearchParams } from "react-router-dom";
import { useAppContext } from "src/contexts/appContext";
import {
  Header,
  Container,
  NewNoteButton,
  NavBar,
  DataNotFound,
} from "src/components";
import NotesContainer from "src/components/NotesContainer";

function SearchNotes() {
  const { state } = useAppContext();
  const [searchParams] = useSearchParams();

  const keyword = searchParams.get("keyword");

  const matchNotes = state.notes.filter((note) => {
    if (keyword !== null) {
      return note.title.toLowerCase().search(keyword.toLowerCase()) !== -1;
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
      </main>
    </div>
  );
}

export default SearchNotes;
