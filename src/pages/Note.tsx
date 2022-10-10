import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import {
  Main,
  Modal,
  Header,
  Container,
  NavBar,
  NoteNotFound,
  SimpleButton,
  RoundedButton,
} from "src/components";
import { showFormattedDate } from "src/utils/index";
import { ACTIONS, useAppContext } from "src/contexts/appContext";
import {
  ArchiveBoxArrowDownIcon,
  ArchiveBoxXMarkIcon,
  PencilIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";

function Note() {
  const { id } = useParams();
  const { state, dispatch } = useAppContext();
  const navigate = useNavigate();
  const note = state.notes.find((note) => note.id.toString() === id);

  const [modalData, setModalData] = useState<{
    id: number | undefined;
    isOpen: boolean;
    title: string;
    noteTitle: string | undefined;
  }>({
    id: undefined,
    isOpen: false,
    title: "Delete note",
    noteTitle: undefined,
  });

  const handleCloseModal = () => {
    setModalData({ ...modalData, isOpen: false });
  };

  const handleOpenModalDeleteNote = (id: number, noteTitle: string) => {
    setModalData({
      ...modalData,
      isOpen: true,
      id: id,
      noteTitle: noteTitle,
    });
  };

  const hanldeDeleteNote = () => {
    handleCloseModal();

    dispatch({
      type: ACTIONS.DELETE,
      payload: { id: modalData.id },
    });

    navigate("/");
  };

  return (
    <div className="App">
      <Header />
      <Main>
        <Container>
          {note !== undefined ? (
            <div className="mt-4 h-fit bg-white p-4">
              <h1 className="text-2xl">{note.title}</h1>
              <span className="font-semibold text-gray-400">
                {showFormattedDate(note.createdAt)}
              </span>
              <div>{note.body}</div>
            </div>
          ) : (
            <NoteNotFound />
          )}
        </Container>

        {note !== undefined && (
          <>
            <div className="fixed bottom-[72px] right-4 z-10 grid grid-cols-3 gap-2">
              <Link to={`/edit/${note?.id}`}>
                <RoundedButton color="bg-blue-500 text-white">
                  <PencilIcon className="m-auto h-6 w-6" />
                </RoundedButton>
              </Link>

              {note.archived ? (
                <RoundedButton
                  color="bg-orange-500 text-white"
                  handleClick={() =>
                    dispatch({
                      type: ACTIONS.UNARCHIVE,
                      payload: { id: note.id },
                    })
                  }
                >
                  <ArchiveBoxXMarkIcon className="m-auto h-6 w-6" />
                </RoundedButton>
              ) : (
                <RoundedButton
                  color="bg-green-500 text-white"
                  handleClick={() =>
                    dispatch({
                      type: ACTIONS.ARCHIVE,
                      payload: { id: note?.id },
                    })
                  }
                >
                  <ArchiveBoxArrowDownIcon className="m-auto h-6 w-6" />
                </RoundedButton>
              )}

              <RoundedButton
                color="bg-red-500 text-white"
                handleClick={() =>
                  handleOpenModalDeleteNote(note.id, note?.title)
                }
              >
                <TrashIcon className="m-auto h-6 w-6" />
              </RoundedButton>
            </div>

            <Modal {...modalData} onClose={handleCloseModal}>
              <p>
                Are you sure want to delete{" "}
                <span className="font-semibold">{modalData.noteTitle}</span>?
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
          </>
        )}
      </Main>
      <NavBar page="search" />
    </div>
  );
}

export default Note;
