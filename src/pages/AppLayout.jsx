import { useRef } from "react";
import ContentBox from "../components/ContentBox";
import Footer from "../components/Footer";
import SearchInput from "../components/SearchInput";
import Sidebar from "../components/Sidebar";
import Tabs from "../components/Tabs";
import { boxBackgroundClass } from "../helpers/classNames";
import { useKeyPress } from "../helpers/useKeyPress";
import MyRecipes from "./MyRecipes";
import Search from "./Search";

function AppLayout() {
  return (
    <>
      {/* // ! FLEX CONTAINING THE TABS AND WHOLE PREVIEW */}
      <div className="flex justify-center lg:text-xl">
        <div
          className={`w-full sm:w-[90vw] h-[90vh] lg:max-h-[85vh] bg-transparent grid sm:grid-cols-[5fr_1fr] grid-rows-[80px_5fr] `}
        >
          <Tabs />
          {/* <Sidebar /> */}
          <ContentBox />
          {/* <Search /> */}
          {/* <MyRecipes /> */}
        </div>
      </div>
    </>
  );
}

export default AppLayout;
