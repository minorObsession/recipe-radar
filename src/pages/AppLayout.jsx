import ContentBox from "../components/ContentBox";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import Tabs from "../components/Tabs";
import { boxBackgroundClass } from "../helpers/classNames";
import MyRecipes from "./MyRecipes";
import Search from "./Search";

function AppLayout() {
  return (
    <>
      <div className="flex justify-center lg:text-xl">
        <div
          className={`w-[90vw] h-[90vh] lg:max-h-[85vh] bg-transparent grid grid-cols-[5fr_1fr] grid-rows-[80px_5fr] `}
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
