import ContentBox from "../components/ContentBox";

import Tabs from "../components/Tabs";

function AppLayout() {
  return (
    <>
      {/* // ! FLEX CONTAINING THE TABS AND WHOLE PREVIEW */}
      <div className="flex justify-center">
        <div
          className={`w-[90svw] h-[90svh] lg:max-h-[85svh] bg-transparent grid sm:grid-cols-[5fr_1fr] grid-rows-[5rem_5fr] `}
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
