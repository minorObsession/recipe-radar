import { memo, useCallback, useRef, useState } from "react";
import { bigBox, inputClassNames } from "../helpers/classNames";
import { useDispatch, useSelector } from "react-redux";
import Button from "../components/Button";
import RecipePreview from "../components/RecipePreview";
import SearchInput from "../components/SearchInput";
import Sidebar from "../components/Sidebar";
import { search } from "../features/searchSlice";

//
const Search = memo(function Search() {
  const [query, setQuery] = useState("");

  const dispatch = useDispatch();

  const handleSearch = useCallback(
    function handleSearch() {
      if (!query) return;
      const abortController = new AbortController();
      dispatch(search(query, abortController));
    },
    [dispatch, query]
  );

  return (
    <div className="w-[90vw] lg:w-[90vw] min-h-[80vh] max-h-[80vh] grid grid-cols-[1fr_4fr] gap-x-10 ">
      <Sidebar />
      <div className="">
        <div className="flex gap-4 lg:gap-6 w-full">
          <SearchInput
            className={"bg-stone-50"}
            placeholder="search our amazing recipes"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />

          <Button type="inline" onClick={handleSearch}>
            GO
          </Button>
        </div>
        <RecipePreview />
      </div>
    </div>
  );
});

export default Search;
