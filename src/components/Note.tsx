import Proptypes from "prop-types";
import { Link } from "react-router-dom";
import { SimpleButton } from "src/components";
import { showFormattedDate } from "src/utils/date";
import { archiveNote, unarchiveNote } from "src/utils/api";
import { useLocale } from "src/contexts/localeContext";
import { noteComponentContent } from "src/utils/content";

type NoteProps = {
  id: string;
  title: string;
  body: string;
  archived: boolean;
  createdAt: string;
  handleRemoveNoteFromList: (id: string) => void;
  handleOpenModalDeleteNote: (id: string, noteTitle: string) => void;
};

function Note({
  id,
  title,
  body,
  archived,
  createdAt,
  handleRemoveNoteFromList,
  handleOpenModalDeleteNote,
}: NoteProps) {
  const { locale } = useLocale();
  const t = noteComponentContent()[locale];

  const handleArchive = (id: string) => {
    archiveNote(id);
    handleRemoveNoteFromList(id);
  };

  const handleUnarchive = (id: string) => {
    unarchiveNote(id);
    handleRemoveNoteFromList(id);
  };

  return (
    <div className="-mx-4 border border-gray-300 bg-white p-4 dark:border-slate-500 dark:bg-slate-700 sm:mx-0 md:first:rounded-t-lg md:last:rounded-b-lg">
      <Link to={`/note/${id}`}>
        <p className="text-lg font-semibold">{title}</p>
      </Link>
      <span className="font-semibold text-gray-500 dark:text-gray-400">
        {showFormattedDate(createdAt)}
      </span>
      <p className="text-justify">{body}</p>

      <div className="mt-2 grid max-w-xl grid-cols-3 gap-4 font-semibold text-white">
        {archived ? (
          <SimpleButton
            color="bg-orange-500 dark:bg-orange-700"
            handleClick={() => handleUnarchive(id)}
          >
            {t.unarchiveButton}
          </SimpleButton>
        ) : (
          <SimpleButton
            color="bg-green-500 dark:bg-green-700"
            handleClick={() => handleArchive(id)}
          >
            {t.archiveButton}
          </SimpleButton>
        )}

        <SimpleButton
          color="bg-red-500"
          handleClick={() => handleOpenModalDeleteNote(id, title)}
        >
          {t.deleteButton}
        </SimpleButton>
      </div>
    </div>
  );
}

Note.prototype = {
  id: Proptypes.string.isRequired,
  title: Proptypes.string.isRequired,
  body: Proptypes.string.isRequired,
  archived: Proptypes.bool.isRequired,
  createdAt: Proptypes.string.isRequired,
  handleOpenModalDeleteNote: Proptypes.func.isRequired,
};

export default Note;
