import { useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useSearch } from "src/contexts/searchContext";

type SearchInputProps = {
  searchMatchTotal: number;
};

function SearchInput({ searchMatchTotal }: SearchInputProps) {
  const { search, setSearch } = useSearch();
  const [searchParams, setSearchParams] = useSearchParams("");
  const inputSearchRef = useRef<HTMLInputElement>(null);

  const keyword = searchParams.get("search");
  useEffect(() => {
    if (keyword) {
      setSearch(keyword);
    }
  }, [keyword, setSearch]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const keyword = e.target.value;
    setSearch(keyword);
    setSearchParams({ search: keyword });
  };

  const handleReset = () => {
    setSearch("");

    inputSearchRef.current?.focus();
  };

  return (
    <div className="mb-2 text-gray-600">
      <MagnifyingGlassIcon className="absolute mt-3 ml-3 h-4 w-4 hover:text-gray-700" />

      <input
        type="text"
        name="search"
        value={search}
        ref={inputSearchRef}
        onChange={handleChange}
        placeholder="Type the keyword"
        className="h-10 w-full rounded-md border border-gray-300 bg-white pl-9 pr-4 outline-none"
      />

      {search !== "" && (
        <>
          <button className="relative" onClick={handleReset}>
            <XMarkIcon className="absolute -ml-6 -mt-3.5 h-4 w-4" />
          </button>

          <p className="mt-2 font-semibold text-gray-500">
            {searchMatchTotal} results for "{search}"
          </p>
        </>
      )}
    </div>
  );
}

export default SearchInput;
