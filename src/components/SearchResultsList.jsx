import { memo, useMemo } from "react";
import SearchResult from "./searchResult";
import { useSelector } from "react-redux";

const SearchResultsList = memo(function SearchResultsList() {
  //
  const { activePage, resultsPerPage, searchResults } = useSelector(
    (store) => store.search
  );

  const resultsToDisplay = useMemo(() => {
    if (!searchResults) return [];
    const searchResultsCopy = searchResults;
    const startIndex = (activePage - 1) * resultsPerPage;
    const endIndex = resultsPerPage * activePage;
    return searchResultsCopy.slice(startIndex, endIndex);
  }, [activePage, searchResults, resultsPerPage]);

  return (
    <ul className="">
      {/* // !  search key in docs  */}
      {resultsToDisplay.map((r, i) => (
        <SearchResult result={r} key={r.id} />
      ))}
    </ul>
  );
});

export default SearchResultsList;
