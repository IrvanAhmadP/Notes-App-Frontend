import Proptypes from "prop-types";
import { Link } from "react-router-dom";
import { SimpleButton } from "src/components";
import { showFormattedDate } from "src/utils/index";
import { ACTIONS, useAppContext } from "src/contexts/appContext";

type NoteProps = {
  id: number;
  title: string;
  body: string;
  archived: boolean;
  createdAt: string;
  handleOpenModalDeleteNote: (id: number, noteTitle: string) => void;
};

function Note({
  id,
  title,
  body,
  archived,
  createdAt,
  handleOpenModalDeleteNote,
}: NoteProps) {
  const { dispatch } = useAppContext();

  return (
    <div className="-mx-4 border-b border-gray-300 bg-white p-4 sm:mx-0 md:first:rounded-t-lg md:last:rounded-b-lg">
      <Link to={`/note/${id}`}>
        <p className="text-lg font-semibold">{title}</p>
      </Link>
      <span className="font-semibold text-gray-400">
        {showFormattedDate(createdAt)}
      </span>
      <p className="text-justify">{body}</p>

      <div className="mt-2 grid max-w-lg grid-cols-3 gap-4 font-semibold text-white">
        <Link className="w-full" to={`/edit/${id}`}>
          <SimpleButton classes="w-full" color="bg-blue-500">
            Edit
          </SimpleButton>
        </Link>

        {archived ? (
          <SimpleButton
            color="bg-orange-500"
            handleClick={() =>
              dispatch({ type: ACTIONS.UNARCHIVE, payload: { id: id } })
            }
          >
            Unarchive
          </SimpleButton>
        ) : (
          <SimpleButton
            color="bg-green-500"
            handleClick={() =>
              dispatch({ type: ACTIONS.ARCHIVE, payload: { id: id } })
            }
          >
            Archive
          </SimpleButton>
        )}

        <SimpleButton
          color="bg-red-500"
          handleClick={() => handleOpenModalDeleteNote(id, title)}
        >
          Delete
        </SimpleButton>
      </div>
    </div>
  );
}

Note.prototype = {
  id: Proptypes.number.isRequired,
  title: Proptypes.string.isRequired,
  body: Proptypes.string.isRequired,
  archived: Proptypes.bool.isRequired,
  createdAt: Proptypes.string.isRequired,
  handleOpenModalDeleteNote: Proptypes.func.isRequired,
};

export default Note;
