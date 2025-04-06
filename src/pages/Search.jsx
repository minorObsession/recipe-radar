import { memo, useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import RecipePreview from "../components/RecipePreview";
import SearchInput from "../components/SearchInput";
import Sidebar from "../components/Sidebar";
import { search } from "../features/searchSlice";
import { useInputChangeDebounce } from "../helpers/useInputChangeDebounce(useState+useEffect)";

//
const Search = memo(function Search() {
  const [query, setQuery] = useState("");
  const debouncedValue = useInputChangeDebounce(query);
  const dispatch = useDispatch();
  const searchRef = useRef();

  const handleSearch = useCallback(
    function handleSearch(query) {
      if (!query || query.length < 3) return;

      dispatch(search(query));
    },
    [dispatch]
  );

  useEffect(() => {
    handleSearch(debouncedValue);
    searchRef.current.focus();
  }, [debouncedValue, handleSearch]);

  return (
    // ! whole grid
    <article
      className={`w-full flex col-span-2 flex-col gap-8 sm:grid sm:grid-cols-[1fr_4fr]  gap-x-10 grid-rows-[min-content_1fr] transition-all ease-in-out duration-1000 `}
    >
      <Sidebar />

      <SearchInput
        placeholder="search our amazing recipes"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        handleSearch={handleSearch}
        ref={searchRef}
      />

      <RecipePreview />
    </article>
  );
});

export default Search;
