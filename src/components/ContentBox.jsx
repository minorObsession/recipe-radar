import { Outlet } from "react-router-dom";
import RecipePreview from "./RecipePreview";
import Footer from "./Footer";

function ContentBox() {
  return (
    <div className="col-span-2 w-full max-h-[80vh] lg:w-[65vw] overflow-scroll sm:overflow-visible">
      <Outlet />
      <Footer />
    </div>
  );
}

export default ContentBox;
