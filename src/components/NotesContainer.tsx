import { useState } from "react";
import Proptypes from "prop-types";
import { deleteNote } from "src/utils/api";
import { DataNotFound, Modal, SimpleButton, Note } from "src/components";

type NotesContainerProps = {
  notes: any;
  handleRemoveNoteFromList: (id: string) => void;
};

function NotesContainer({
  notes,
  handleRemoveNoteFromList,
}: NotesContainerProps) {
  const [modalData, setModalData] = useState<{
    id: string;
    isOpen: boolean;
    title: string;
    noteTitle: string | undefined;
  }>({
    id: "",
    isOpen: false,
    title: "Delete note",
    noteTitle: undefined,
  });

  const handleCloseModal = () => {
    setModalData({ ...modalData, isOpen: false });
  };

  const handleOpenModalDeleteNote = (id: string, noteTitle: string) => {
    setModalData({
      ...modalData,
      id: id,
      isOpen: true,
      noteTitle: noteTitle,
    });
  };

  const hanldeDeleteNote = () => {
    handleCloseModal();

    deleteNote(modalData.id);
    handleRemoveNoteFromList(modalData.id);
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
              handleRemoveNoteFromList={handleRemoveNoteFromList}
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
