import { Outlet } from "react-router-dom";
import RecipePreview from "./RecipePreview";
import Footer from "./Footer";

function ContentBox() {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
}

export default ContentBox;
