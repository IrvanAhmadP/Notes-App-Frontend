import { SimpleButton } from "src/components";
import { showFormattedDate } from "src/utils/index";
import { ACTIONS, useAppContext } from "src/contexts/appContext";
import { Link } from "react-router-dom";

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
    <div className="-mx-4 md:first:rounded-t-lg md:last:rounded-b-lg sm:mx-0 p-4 bg-white border-b border-gray-300">
      <p className="text-lg font-semibold">{title}</p>
      <span className="text-gray-400 font-semibold">
        {showFormattedDate(createdAt)}
      </span>
      <p className="text-justify">{body}</p>

      <div className="grid max-w-lg grid-cols-3 gap-4 mt-2 text-white font-semibold">
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

export default Note;
