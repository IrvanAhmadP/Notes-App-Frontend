import { useEffect, useState } from "react";
import NotesContainer from "src/components/NotesContainer";
import {
  Main,
  Header,
  Container,
  Spinner,
  NewNoteButton,
  NavBar,
  SearchInput,
} from "src/components";
import { noteTypes } from "src/@types/note";
import { getActiveNotes, getArchivedNotes } from "src/utils/api";
import { useSearch } from "src/contexts/searchContext";
import { useLocale } from "src/contexts/localeContext";
import { notesContent } from "src/utils/content";

type NotesProps = {
  page: "active" | "archived";
};

function Notes({ page }: NotesProps) {
  const { locale } = useLocale();
  const t = notesContent()[locale];
  const [isLoading, setIsLoading] = useState(true);
  const { search } = useSearch();
  const [notes, setNotes] = useState<noteTypes[]>([]);

  useEffect(() => {
    if (page === "active") {
      document.title = t.activePageTitle;
    } else {
      document.title = t.archivedPageTitle;
    }
  }, [page, t.activePageTitle, t.archivedPageTitle]);

  useEffect(() => {
    if (page === "active") {
      getActiveNotes().then(({ error, data }) => {
        if (error) {
          console.log(error);
          return;
        }

        setNotes(data);
        setIsLoading(false);
      });
    } else {
      getArchivedNotes().then(({ error, data }) => {
        if (error) {
          console.log(error);
          return;
        }

        setNotes(data);
        setIsLoading(false);
      });
    }
  }, [page]);

  const handleRemoveNoteFromList = (id: string) => {
    setNotes(
      notes.filter((n) => {
        return n.id !== id;
      })
    );
  };

  const matchNotes = notes.filter(
    (n) => n.title?.toLowerCase().search(search.toLowerCase()) !== -1
  );

  return (
    <div className="App">
      <Header />
      <Main>
        <Container>
          <h2 className="py-2 text-xl font-semibold capitalize">
            {page === "active" ? t.activePageTitle : t.archivedPageTitle}
          </h2>

          <SearchInput searchMatchTotal={matchNotes.length} />

          {isLoading ? (
            <div className="flex h-[calc(100vh_-_128px_-_5rem)] justify-center">
              <Spinner classes="w-10 h-10 m-auto" />
            </div>
          ) : (
            notes && (
              <NotesContainer
                notes={matchNotes}
                handleRemoveNoteFromList={handleRemoveNoteFromList}
              />
            )
          )}
        </Container>

        <NewNoteButton />
        <NavBar page={page} />
      </Main>
    </div>
  );
}

export default Notes;
