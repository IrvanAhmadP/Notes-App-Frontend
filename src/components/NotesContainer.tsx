import { useState } from "react";
import { Link } from "react-router-dom";
import { ACTIONS, useAppContext } from "src/contexts/appContext";
import { Modal, SimpleButton, Note } from "src/components";

type NotesContainerProps = {
  notes: any;
};

function NotesContainer({ notes }: NotesContainerProps) {
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
    <>
      <div className="first:rounded-lg">
        {notes.length === 0 ? (
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
          notes.map((note: any) => (
            <Note
              key={note.id}
              {...note}
              handleOpenModalDeleteNote={handleOpenModalDeleteNote}
            />
          ))
        )}
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
  );
}

export default NotesContainer;
