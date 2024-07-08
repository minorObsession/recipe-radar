import { useDispatch, useSelector } from "react-redux";
import {
  selectRecipeID,
  fetchRecipe,
  selectedRecipe,
} from "../features/searchSlice";
import { memo, useCallback } from "react";
import { Link } from "react-router-dom";

const SearchResult = memo(function SearchResult({ result }) {
  const dispatch = useDispatch();
  const { selectedRecipeID } = useSelector((store) => store.search);

  const handleSelect = useCallback(() => {
    if (selectedRecipeID !== result.id) {
      const abortController = new AbortController();

      dispatch(selectRecipeID(result.id));
      dispatch(fetchRecipe(result.id, abortController));
    }
  }, [dispatch, result.id, selectedRecipeID]);
  console.log(result);

  return (
    <li>
      <Link
        className="grid grid-rows-1 grid-cols-[1fr_2fr] gap-3 lg:gap-5 p-3 items-center rounded-xl border-b border-amber-800 cursor-pointer hover:text-amber-300 transition-colors duration-600  "
        onClick={handleSelect}
        to={`${result.id}`}
      >
        <img
          className="w-14 h-14 rounded-full opacity-70 object-cover"
          src={result.image_url}
          alt={result.title}
        />
        <span className="text-xs lg:text-sm col-[2] ">{result.title}</span>
      </Link>
    </li>
  );
});

export default SearchResult;
