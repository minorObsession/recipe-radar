import { memo } from "react";
import Pagination from "./Pagination";
import { useSelector } from "react-redux";
import SearchResultsList from "./SearchResultsList";
import LoadingSpinner from "./CenteredLoadingSpinner";

const Sidebar = memo(function Sidebar() {
  const { isLoading, searchResults } = useSelector((store) => store.search);
  const resultsLoaded = searchResults?.length > 0 && !isLoading;
  const noResults = searchResults?.length === 0 && !isLoading;
  return (
    <aside
      className={`relative h-fit min-h-[100px] md:min-h-[300px] mx-auto order-2 md:col-[1/2] w-[clamp(280px,80%,600px)] lg:w-[35svw] bg-stone-500 sm:pt-5 flex flex-col gap-6 items-center justify-center rounded-lg text-amber-500 text-xl overflow-auto ${
        !searchResults?.length && "bg-transparent"
      } ${isLoading && "min-h-[400px]"}`}
    >
      {isLoading && <LoadingSpinner />}
      {resultsLoaded && (
        <>
          <SearchResultsList />
          <Pagination />
        </>
      )}
      {noResults && (
        <h2 className="lg:text-2xl text-center justify-self-center">
          No results found for your search... Please try again
        </h2>
      )}
    </aside>
  );
});

export default Sidebar;
