import { memo, useCallback, useRef, useState } from "react";
import { bigBox, inputClassNames } from "../helpers/classNames";
import { useDispatch, useSelector } from "react-redux";
import Button from "../components/Button";
import RecipePreview from "../components/RecipePreview";
import SearchInput from "../components/SearchInput";
import Sidebar from "../components/Sidebar";
import { search } from "../features/searchSlice";
import { useKeyPress } from "../helpers/useKeyPress";

//
const Search = memo(function Search() {
  const [query, setQuery] = useState("");
  const { searchResults } = useSelector((store) => store.search);
  const dispatch = useDispatch();

  const previousQuery = useRef(null);

  const handleSearch = useCallback(
    function handleSearch() {
      if (!query || query.length < 3 || query === previousQuery.current) return;
      const abortController = new AbortController();
      dispatch(search(query, abortController));
      previousQuery.current = query;
      setQuery("");
    },
    [dispatch, query]
  );

  // ! input field focus on Enter press
  const inputEl = useRef(null);
  const btnEl = useRef(null);
  useKeyPress("Enter", () => {
    if (
      document.activeElement === inputEl ||
      document.activeElement === btnEl.current
    )
      return;
    inputEl.current.focus();
    setQuery("");
  });

  return (
    // ! whole grid
    <div
      className={`w-[90vw] sm:w-[90vw] lg:w-[90vw] max-h-[90vh] flex flex-col gap-2 sm:grid sm:grid-cols-[1fr_4fr] gap-x-10 transition-all ease-in-out duration-1000 `}
    >
      {searchResults && <Sidebar />}
      {/* <Sidebar /> */}
      <div
        className={`${
          !searchResults && "col-span-2"
        } flex-grow transition-all duration-500`}
      >
        <div className="flex gap-4 w-full justify-around">
          <SearchInput
            className={"bg-stone-500"}
            placeholder="search our amazing recipes"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            inputEl={inputEl}
            handleSearch={handleSearch}
          />

          <Button type="inline" onClick={handleSearch} btnEl={btnEl}>
            GO
          </Button>
        </div>
        <RecipePreview />
      </div>
    </div>
  );
});

export default Search;
