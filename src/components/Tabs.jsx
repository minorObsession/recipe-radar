import { NavLink } from "react-router-dom";
import SidebarButton from "./SidebarButton";

function Tabs() {
  return (
    <div className="col-span-2 flex justify-between gap-4 p-6 border-b-2 border-amber-300 border-dotted mb-6 tracking-wider font-semibold text-lg lg:text-xl">
      <div className="flex gap-10">
        <NavLink to="search">
          <SidebarButton>Search</SidebarButton>
        </NavLink>

        <NavLink to="my-recipes">
          <SidebarButton>My Recipes</SidebarButton>
        </NavLink>
      </div>
      <div className="flex gap-10">
        <NavLink to="meal-planning">
          <SidebarButton>Plan Meals</SidebarButton>
        </NavLink>

        <NavLink to="preferences">
          <SidebarButton>preferences</SidebarButton>
        </NavLink>
      </div>
    </div>
  );
}

export default Tabs;
