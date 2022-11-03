import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  ArchiveBoxArrowDownIcon,
  ArchiveBoxXMarkIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import {
  Modal,
  Loading,
  NoteNotFound,
  SimpleButton,
  RoundedButton,
} from "src/components";
import { noteTypes } from "src/@types/note";
import { showFormattedDate } from "src/utils/date";
import { getNote, deleteNote, archiveNote, unarchiveNote } from "src/utils/api";
import { noteContent } from "src/utils/content";
import { useLocale } from "src/contexts/localeContext";
import MainLayout from "src/layouts/MainLayout";

function Note() {
  const { locale } = useLocale();
  const t = noteContent()[locale];
  const navigate = useNavigate();
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [note, setNote] = useState<noteTypes | null>(null);

  useEffect(() => {
    document.title = note?.title || t.notFoundTitle;
  }, [note?.title, t.notFoundTitle]);

  useEffect(() => {
    if (!id) return;

    getNote(id).then(({ error, data }) => {
      if (error) return;

      setNote(data);
      setIsLoading(false);
    });
  }, [id]);

  const [modalData, setModalData] = useState<{
    id: string;
    isOpen: boolean;
    title: string;
    noteTitle: string | undefined;
  }>({
    id: "",
    isOpen: false,
    title: t.modalTitle,
    noteTitle: undefined,
  });

  const handleArchive = (id: string) => {
    if (!id) return;
    archiveNote(id);

    if (note) {
      setNote({ ...note, archived: true });
    }
  };

  const handleUnarchive = (id: string) => {
    if (!id) return;
    unarchiveNote(id);

    if (note) {
      setNote({ ...note, archived: false });
    }
  };

  const handleCloseModal = () => {
    setModalData({ ...modalData, isOpen: false });
  };

  const handleOpenModalDeleteNote = (id: string, noteTitle: string) => {
    setModalData({
      ...modalData,
      isOpen: true,
      id: id,
      noteTitle: noteTitle,
    });
  };

  const hanldeDeleteNote = () => {
    handleCloseModal();

    if (!id) return;
    deleteNote(id);

    navigate("/");
  };

  return (
    <MainLayout>
      {isLoading ? (
        <Loading
          loadingHeight="h-[calc(100vh_-_128px_-_5rem)]"
          spinnerWidth="w-10"
        />
      ) : note ? (
        <div className="mt-4 h-fit bg-white p-4 dark:bg-slate-700">
          <h1 className="text-2xl">{note.title}</h1>
          <span className="font-semibold text-gray-500 dark:text-gray-400">
            {showFormattedDate(note.createdAt)}
          </span>
          <div>{note.body}</div>
        </div>
      ) : (
        <NoteNotFound />
      )}

      {note && (
        <>
          <div className="fixed bottom-[72px] right-4 z-10 grid grid-cols-3 gap-2">
            {note.archived ? (
              <RoundedButton
                color="bg-orange-500 dark:bg-orange-700 text-white"
                handleClick={() => handleUnarchive(note.id)}
              >
                <ArchiveBoxXMarkIcon className="m-auto h-6 w-6" />
              </RoundedButton>
            ) : (
              <RoundedButton
                color="bg-green-500 dark:bg-green-700 text-white"
                handleClick={() => handleArchive(note.id)}
              >
                <ArchiveBoxArrowDownIcon className="m-auto h-6 w-6" />
              </RoundedButton>
            )}

            <RoundedButton
              color="bg-red-500 dark:bg-red-700 text-white"
              handleClick={() =>
                handleOpenModalDeleteNote(note.id, note?.title)
              }
            >
              <TrashIcon className="m-auto h-6 w-6" />
            </RoundedButton>
          </div>

          <Modal
            {...modalData}
            titleColor="text-red-500"
            onClose={handleCloseModal}
          >
            <p>
              {t.modalMessage}{" "}
              <span className="font-semibold">{modalData.noteTitle}</span>?
            </p>
            <div className="float-right grid w-56 grid-cols-2 gap-2 text-white">
              <SimpleButton
                color="bg-gray-300"
                classes="text-black"
                handleClick={handleCloseModal}
              >
                {t.modalCancelButton}
              </SimpleButton>
              <SimpleButton color="bg-red-500" handleClick={hanldeDeleteNote}>
                {t.modalDeleteButton}
              </SimpleButton>
            </div>
          </Modal>
        </>
      )}
    </MainLayout>
  );
}

export default Note;
