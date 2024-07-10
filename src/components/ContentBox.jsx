import { Outlet } from "react-router-dom";
import RecipePreview from "./RecipePreview";

function ContentBox() {
  return (
    <div className="col-span-2 w-full lg:w-[65vw] overflow-scroll sm:overflow-visible">
      {/* // ! create user component with the name of current user */}
      <Outlet />
    </div>
  );
}

export default ContentBox;
