import { Outlet } from "react-router-dom";
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
