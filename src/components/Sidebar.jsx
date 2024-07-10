import { memo } from "react";
import Pagination from "./Pagination";
import { useSelector } from "react-redux";
import LoadingSpinner from "./LoadingSpinner";
import SearchResultsList from "./SearchResultsList";
// import SidebarButton from "./SidebarButton";

const Sidebar = memo(function Sidebar() {
  const { isLoading, searchResults } = useSelector((store) => store.search);
  return (
    <div
      className={`w-full sm:w-[30vw] lg:w-[20vw] bg-stone-500 pt-5 flex flex-col gap-6 items-start lg:items-center rounded-lg text-amber-500 text-xl overflow-hidden ${
        !searchResults?.length && "bg-transparent"
      } ${
        isLoading ||
        (searchResults?.length === 0 &&
          "text-center items-center justify-center")
      }
      }`}
    >
      {isLoading && <LoadingSpinner />}
      {searchResults?.length > 0 && !isLoading && <SearchResultsList />}
      {searchResults?.length === 0 && !isLoading && (
        <h2 className="lg:text-2xl text-center justify-self-center">
          No results found for your search... Please try again
        </h2>
      )}
      {searchResults?.length > 0 && !isLoading && <Pagination />}
    </div>
  );
});

export default Sidebar;
