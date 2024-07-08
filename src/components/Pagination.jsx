import { useDispatch, useSelector } from "react-redux";
import Button from "./Button";
import { previousPage, nextPage } from "../features/searchSlice";
function Pagination() {
  //
  const dispatch = useDispatch();
  const { activePage, totalNumPages } = useSelector((store) => store.search);

  return (
    <div className=" p-5 -translate-y-3 w-full max-w[90%] flex gap-2 lg:gap-4 items-center justify-center text-right text-lg">
      <Button type="round" onClick={() => dispatch(previousPage())}>
        &larr;
      </Button>
      <span className="whitespace-nowrap text-base lg:text-lg">
        page {activePage} of {totalNumPages}
      </span>
      <Button type="round" onClick={() => dispatch(nextPage())}>
        &rarr;
      </Button>
    </div>
  );
}

export default Pagination;
