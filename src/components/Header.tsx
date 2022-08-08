import { Container } from "src/components";
import { ACTIONS, useAppContext } from "src/contexts/appContext";
import { Link } from "react-router-dom";

function Header() {
  const { state, dispatch } = useAppContext();

  return (
    <header className="bg-slate-800 py-4 text-white">
      <Container>
        <div className="flex justify-between">
          <h1 className="text-3xl font-semibold flex-grow">
            <Link to="/">Notes</Link>
          </h1>

          <div className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="text-white mt-3 ml-3 absolute hover:text-gray-400 h-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              />
            </svg>

            <input
              className="bg-inherit h-10 pl-9 pr-4 outline-none border border-slate-500 bg-slate-700 rounded-md placeholder:text-gray-200"
              placeholder="Search"
              value={state.search}
              onChange={(e) =>
                dispatch({
                  type: ACTIONS.SEARCH,
                  payload: { search: e.target.value },
                })
              }
            />
          </div>
        </div>
      </Container>
    </header>
  );
}

export default Header;
