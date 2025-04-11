import { NavLink, useNavigate } from "react-router-dom";
import SidebarButton from "./SidebarButton";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { resetSearch } from "../features/searchSlice";
import SavedRecipesDropdown from "./SavedRecipesDropdown";
import { useEffect } from "react";

function Tabs() {
  const { currentAccount, savedRecipes } = useSelector((store) => store.search);
  const [showSavedRecipes, setShowSavedRecipes] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleSelectRecipe(e) {
    e.stopPropagation();
    const recipeName = e.target.textContent;
    const recipe = savedRecipes.find((r) => r.title === recipeName);

    setShowSavedRecipes(false);
    navigate(`/app/search/${recipe.id}`);
  }

  function refreshPage() {
    // if (!searchResults) return;
    setTimeout(() => {
      dispatch(resetSearch());
      navigate(`/app/search`);

      // dispatch(stopSearching());
    }, 500);
  }

  useEffect(() => {
    const currentPath = window.location.pathname
      .replaceAll("/", "")
      .replace("app", "");

    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach((link) => {
      if (link.getAttribute("href").includes(currentPath)) {
        link.classList.add("active-tab");
      } else {
        link.classList.remove("active-tab");
      }
    });
  }, [location.pathname]);

  return (
    <nav className=" gap-2 w-full col-span-2 flex justify-between items-center p-2 mb-6 border-b-2 border-amber-300 border-dotted md:tracking-wider sm:font-semibold text-xs sm:text-sm md:text-lg lg:text-xl md:whitespace-nowrap">
      <NavLink to="search" onClick={refreshPage}>
        <SidebarButton>Search</SidebarButton>
      </NavLink>

      <NavLink to="my-recipes">
        <SidebarButton>My Recipes</SidebarButton>
      </NavLink>
      <NavLink to="meal-planning">
        <SidebarButton>Plan Meals</SidebarButton>
      </NavLink>

      {/* // ! hover dropdown stuff */}
      <menu
        onClick={() => setShowSavedRecipes((prev) => !prev)}
        onMouseEnter={() => setShowSavedRecipes(true)}
        onMouseLeave={() => setTimeout(() => setShowSavedRecipes(false), 500)}
        className="relative"
      >
        <SidebarButton additionalClassNames="text-amber-500  ">
          {currentAccount?.name}
        </SidebarButton>

        <SavedRecipesDropdown
          showSavedRecipes={showSavedRecipes}
          savedRecipes={savedRecipes}
          handleSelectRecipe={handleSelectRecipe}
        />
      </menu>
    </nav>
  );
}

export default Tabs;
