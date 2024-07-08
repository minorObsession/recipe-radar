import { Outlet } from "react-router-dom";
import RecipePreview from "./RecipePreview";

function ContentBox() {
  return (
    <div className="h-full w-full lg:w-[65vw]">
      {/* // ! create user component with the name of current user */}
      <Outlet />
    </div>
  );
}

export default ContentBox;
