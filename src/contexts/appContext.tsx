import {
  createContext,
  Dispatch,
  ReactNode,
  useContext,
  useReducer,
} from "react";
import { getInitialData } from "src/utils";

type NoteProps = {
  id: number;
  title: string;
  body: string;
  createdAt: string;
  archived: boolean;
};

type AppProps = {
  notes: NoteProps[];
  search: string;
};

const initialStates = {
  notes: getInitialData(),
  search: "",
};

const AppContext = createContext<{
  state: AppProps;
  dispatch: Dispatch<any>;
}>({ state: initialStates, dispatch: () => {} });

const ACTIONS = {
  ADD: "ADD",
  EDIT: "EDIT",
  ARCHIVE: "ARCHIVE",
  UNARCHIVE: "UNARCHIVE",
  DELETE: "DELETE",
  SEARCH: "SEARCH",
  RESERT_SEARCH: "RESERT_SEARCH",
};

function reducer(state: AppProps, action: any) {
  const { type, payload } = action;

  switch (type) {
    case ACTIONS.ADD:
      return {
        ...state,
        notes: [...state.notes, payload],
      };
    case ACTIONS.EDIT:
      return {
        ...state,
        notes: state.notes.map(function (note) {
          if (note.id === payload.id) note = payload;
          return note;
        }),
      };
    case ACTIONS.ARCHIVE:
      return {
        ...state,
        notes: state.notes.map(function (note) {
          if (note.id === payload.id) note.archived = true;
          return note;
        }),
      };

    case ACTIONS.UNARCHIVE:
      return {
        ...state,
        notes: state.notes.map((note) => {
          if (note.id === payload.id) note.archived = false;
          return note;
        }),
      };

    case ACTIONS.DELETE:
      return {
        ...state,
        notes: state.notes.filter((note) => {
          return note.id !== payload.id;
        }),
      };

    case ACTIONS.SEARCH:
      return {
        ...state,
        search: payload.search,
      };

    case ACTIONS.RESERT_SEARCH:
      return {
        ...state,
        search: "",
      };

    default:
      return state;
  }
}

type NotesProviderProps = {
  children: ReactNode;
};

function AppProvider({ children }: NotesProviderProps) {
  const [state, dispatch] = useReducer(reducer, initialStates);
  const value = { state, dispatch };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

function useAppContext() {
  return useContext(AppContext);
}

export { AppProvider, useAppContext, ACTIONS };
