import { FormEvent, useRef } from "react";
import {
  createSearchParams,
  Link,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { Container } from "src/components";
import { ACTIONS, useAppContext } from "src/contexts/appContext";

function Header() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { state, dispatch } = useAppContext();
  const searchRef = useRef<HTMLInputElement>(null);

  const keyword = searchParams.get("keyword");

  const handleFocusSearchRef = () => {
    if (null !== searchRef.current) {
      searchRef.current.focus();
    }
  };

  const handleSearch = (e: FormEvent<HTMLInputElement>) => {
    const keyword = e.currentTarget.value;
    navigate({
      pathname: "/search",
      search: createSearchParams({ keyword }).toString(),
    });

    dispatch({
      type: ACTIONS.SEARCH,
      payload: { search: keyword },
    });

    handleFocusSearchRef();
  };

  const handleResetSearch = () => {
    dispatch({ type: ACTIONS.RESERT_SEARCH });

    handleFocusSearchRef();
  };

  return (
    <header className="bg-slate-800 py-4 text-white">
      <Container>
        <div className="flex justify-between">
          <h1 className="flex-grow text-3xl font-semibold">
            <Link to="/">Notes</Link>
          </h1>

          <div className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute mt-3 ml-3 h-4 w-4 text-white hover:text-gray-400"
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
              className="h-10 rounded-md border border-slate-500 bg-inherit bg-slate-700 pl-9 pr-4 outline-none placeholder:text-gray-200"
              placeholder="Search"
              ref={searchRef}
              value={state.search}
              onChange={handleSearch}
            />

            {state.search !== "" && (
              <button className="relative" onClick={handleResetSearch}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute -ml-6 -mt-2 h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            )}
          </div>
        </div>
      </Container>
    </header>
  );
}

export default Header;
