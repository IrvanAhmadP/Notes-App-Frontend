import { useState } from "react";
import Proptypes from "prop-types";
import { ACTIONS, useAppContext } from "src/contexts/appContext";
import { DataNotFound, Modal, SimpleButton, Note } from "src/components";

type NotesContainerProps = {
  notes: any;
};

function NotesContainer({ notes }: NotesContainerProps) {
  const { dispatch } = useAppContext();
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

      <Modal
        {...modalData}
        titleColor="text-red-500"
        onClose={handleCloseModal}
      >
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

NotesContainer.prototype = {
  notes: Proptypes.array,
};

export default NotesContainer;
