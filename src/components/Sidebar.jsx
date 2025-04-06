import { memo } from "react";
import Pagination from "./Pagination";
import { useSelector } from "react-redux";
import SearchResultsList from "./SearchResultsList";

const Sidebar = memo(function Sidebar() {
  const { isLoading, searchResults } = useSelector((store) => store.search);

  return (
    <aside
      className={`h-fit mx-auto order-2 md:col-[1/2] w-[clamp(280px,80%,600px)] lg:w-[35vw] bg-stone-500 sm:pt-5 flex flex-col gap-6 items-start lg:items-center rounded-lg text-amber-500 text-xl overflow-auto ${
        !searchResults?.length && "bg-transparent"
      } ${
        isLoading ||
        (searchResults?.length === 0 &&
          "text-center items-center justi1y-center")
      }
      }`}
    >
      {searchResults?.length > 0 && !isLoading && (
        <>
          <SearchResultsList />
          <Pagination />
        </>
      )}
      {searchResults?.length === 0 && !isLoading && (
        <h2 className="lg:text-2xl text-center justify-self-center">
          No results found for your search... Please try again
        </h2>
      )}
    </aside>
  );
});

export default Sidebar;
