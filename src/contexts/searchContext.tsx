import { createContext, ReactNode, useContext, useMemo, useState } from "react";

const initialValue = {
  search: "",
};

type searchTypes = {
  search: string;
  setSearch?: any;
};

const SearchContext = createContext<searchTypes>(initialValue);

type SearchProviderProps = {
  children: ReactNode;
};

function SearchProvider({ children }: SearchProviderProps) {
  const [search, setSearch] = useState("");

  const value = useMemo(() => {
    return {
      search,
      setSearch,
    };
  }, [search]);

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
}

function useSearch() {
  return useContext(SearchContext);
}

export { SearchProvider, useSearch };
