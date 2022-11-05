import { useEffect, useState } from "react";
import {
  Loading,
  NewNoteButton,
  NavBar,
  SearchInput,
  Modal,
  SimpleButton,
  DataNotFound,
  Note,
} from "src/components";
import { noteTypes } from "src/@types/note";
import { getActiveNotes, getArchivedNotes, deleteNote } from "src/utils/api";
import { useSearch } from "src/contexts/searchContext";
import { useLocale } from "src/contexts/localeContext";
import { notesContent } from "src/utils/content";
import MainLayout from "src/layouts/MainLayout";

type NotesProps = {
  page: "active" | "archived";
};

function Notes({ page }: NotesProps) {
  const { locale } = useLocale();
  const t = notesContent()[locale];
  const [isLoading, setIsLoading] = useState(true);
  const { search } = useSearch();
  const [notes, setNotes] = useState<noteTypes[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [noteIDToDelete, setNoteIDToDelete] = useState("");
  const [noteTitleToDelete, setNoteTitleToDelete] = useState("");

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

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleOpenModalDeleteNote = (id: string, noteTitle: string) => {
    setNoteIDToDelete(id);
    setNoteTitleToDelete(noteTitle);
    setIsModalOpen(true);
  };

  const hanldeDeleteNote = () => {
    handleCloseModal();

    deleteNote(noteIDToDelete);
    handleRemoveNoteFromList(noteIDToDelete);
  };

  const matchNotes = notes.filter(
    (n) => n.title?.toLowerCase().search(search.toLowerCase()) !== -1
  );

  return (
    <MainLayout>
      <h2 className="py-2 text-xl font-semibold capitalize">
        {page === "active" ? t.activePageTitle : t.archivedPageTitle}
      </h2>

      <SearchInput searchMatchTotal={matchNotes.length} />

      {isLoading ? (
        <Loading
          loadingHeight="h-[calc(100vh_-_128px_-_7rem)]"
          spinnerWidth="w-10"
        />
      ) : (
        notes && (
          <div className="first:rounded-lg">
            {notes.length === 0 ? (
              <DataNotFound />
            ) : (
              notes.map((note: any) => (
                <Note
                  key={note.id}
                  {...note}
                  handleOpenModalDeleteNote={handleOpenModalDeleteNote}
                />
              ))
            )}
          </div>
        )
      )}

      <NewNoteButton />
      <NavBar page={page} />

      <Modal
        isOpen={isModalOpen}
        title="Delete Note"
        titleColor="text-red-500"
        onClose={handleCloseModal}
      >
        <p>
          Are you sure want to delete{" "}
          <span className="font-semibold">{noteTitleToDelete}</span>?
        </p>
        <div className="float-right grid w-56 grid-cols-2 gap-2 text-white">
          <SimpleButton
            color="bg-gray-300"
            classes="text-black"
            handleClick={handleCloseModal}
          >
            Cancel
          </SimpleButton>
          <SimpleButton color="bg-red-500" handleClick={hanldeDeleteNote}>
            Delete
          </SimpleButton>
        </div>
      </Modal>
    </MainLayout>
  );
}

export default Notes;
