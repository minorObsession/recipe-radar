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

  const handleSelect = useCallback(() => {
    const abortController = new AbortController();

    dispatch(selectRecipeID(result.id));
    dispatch(fetchRecipe(result.id, abortController));
  }, [dispatch, result.id]);

  return (
    <li>
      <Link
        className="grid grid-rows-1 grid-cols-[1fr_3fr] max-h-12 sm:max-h-20 gap sm:gap-3 lg:gap-5 p-3 items-center rounded-xl border-b border-amber-800 cursor-pointer hover:text-amber-300 transition-colors duration-600  "
        onClick={handleSelect}
        to={`${result.id}`}
      >
        <img
          className="w-10 h-10 sm:w-14 sm:h-14 rounded-full opacity-70 object-cover"
          src={result.image_url}
          alt={result.title}
        />
        <span className="text-xs lg:text-sm col-[2] ">{result.title}</span>
      </Link>
    </li>
  );
});

export default SearchResult;
