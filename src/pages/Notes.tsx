import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Header,
  Modal,
  Container,
  Note,
  NewNoteButton,
  NavBar,
  SimpleButton,
} from "src/components";
import { ACTIONS, useAppContext } from "src/contexts/appContext";

type NotesProps = {
  page: "active" | "archived";
};

function Notes({ page }: NotesProps) {
  const { state, dispatch } = useAppContext();
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

  const filteredNotes = state.notes.filter((note) => {
    let searchMatch = true;
    if (state.search !== "") {
      searchMatch = note.title.toLowerCase().search(state.search) !== -1;
    }

    if (page === "active" && note.archived === false && searchMatch) {
      return true;
    } else if (page === "archived" && note.archived === true && searchMatch) {
      return true;
    }

    return false;
  });

  const handleCloseModal = () => {
    setModalData({ ...modalData, isOpen: false });
  };

  const handleOpenModalDeleteNote = (id: number, noteTitle: string) => {
    setModalData({
      ...modalData,
      id: id,
      isOpen: true,
      noteTitle: noteTitle,
    });
  };

  const hanldeDeleteNote = () => {
    handleCloseModal();

    dispatch({
      type: ACTIONS.DELETE,
      payload: { id: modalData.id },
    });
  };

  return (
    <div className="App">
      <Header />
      <main className="pb-[56px] md:pb-[90px]">
        <Container>
          <h2 className="py-2 text-xl font-semibold capitalize">
            {page} Notes
          </h2>
          {state.search !== "" && (
            <p className="mb-2 font-semibold text-gray-500">
              {filteredNotes.length} results for "{state.search}"
            </p>
          )}

          <div className="first:rounded-lg first:bg-red-100">
            {filteredNotes.length === 0 ? (
              <div className="flex h-[calc(100vh_-_128px_-_57px)] items-center justify-center md:h-[calc(100vh_-_162px_-_57px)]">
                <p className="font-semibold">
                  Data not found,{" "}
                  <Link className="text-blue-500" to="/new-note">
                    create a note
                  </Link>
                  .
                </p>
              </div>
            ) : (
              filteredNotes.map((note: any) => (
                <Note
                  key={note.id}
                  {...note}
                  handleOpenModalDeleteNote={handleOpenModalDeleteNote}
                />
              ))
            )}
          </div>
        </Container>
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

        <NewNoteButton />
        <NavBar page={page} />
      </main>
    </div>
  );
}

export default Notes;
