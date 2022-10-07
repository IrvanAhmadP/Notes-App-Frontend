import { useParams, Link } from "react-router-dom";
import {
  Main,
  Header,
  Container,
  NavBar,
  NoteNotFound,
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

  const note = state.notes.find((note) => note.id.toString() === id);
  console.log(note);

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
        <div className="fixed bottom-[72px] right-4 z-10 grid grid-cols-3 gap-2">
          <Link to={`/edit/${note?.id}`}>
            <RoundedButton color="bg-blue-500 text-white">
              <PencilIcon className="m-auto h-6 w-6" />
            </RoundedButton>
          </Link>

          {note?.archived ? (
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

          <RoundedButton color="bg-red-500 text-white">
            <TrashIcon className="m-auto h-6 w-6" />
          </RoundedButton>
        </div>
      </Main>
      <NavBar page="search" />
    </div>
  );
}

export default Note;
