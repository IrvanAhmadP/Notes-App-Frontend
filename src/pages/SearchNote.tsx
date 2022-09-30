import { useSearchParams } from "react-router-dom";
import { useAppContext } from "src/contexts/appContext";
import { Header, Container, NewNoteButton, NavBar } from "src/components";

function SearchNotes() {
  const { state } = useAppContext();
  const [searchParams] = useSearchParams();

  const keyword = searchParams.get("keyword");

  const filteredNotes = state.notes.filter((note) => {
    let searchMatch = true;
    if (keyword !== "") {
      searchMatch = note.title.toLowerCase().search(state.search) !== -1;
    }

    return false;
  });

  return (
    <div className="App">
      <Header />
      <main className="pb-[56px] md:pb-[90px]">
        <Container>
          {state.search !== "" && (
            <p className="my-2 font-semibold text-gray-500">
              {filteredNotes.length} results for "{state.search}"
            </p>
          )}
        </Container>

        <NewNoteButton />
        <NavBar page="search" />
      </main>
    </div>
  );
}

export default SearchNotes;
