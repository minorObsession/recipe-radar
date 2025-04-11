import { NavLink, useNavigate } from "react-router-dom";
import SidebarButton from "./SidebarButton";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { resetSearch } from "../features/searchSlice";
import SavedRecipesDropdown from "./SavedRecipesDropdown";

function Tabs() {
  const { currentAccount, savedRecipes } = useSelector((store) => store.search);
  const [showSavedRecipes, setShowSavedRecipes] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleSelectRecipe(e) {
    const recipeName = e.target.textContent;
    const recipe = savedRecipes.find((r) => r.title === recipeName);

    navigate(`/app/search/${recipe.id}`);
    setShowSavedRecipes(false);
  }

  function refreshPage() {
    // if (!searchResults) return;
    setTimeout(() => {
      setTimeout(() => {
        dispatch(resetSearch());
        navigate(`/app/search`);
      }, 1000);

      // dispatch(stopSearching());
    }, 500);
  }

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
      <div
        onMouseEnter={() => {
          setShowSavedRecipes(true);
        }}
        onMouseLeave={() =>
          setTimeout(() => {
            setShowSavedRecipes(false);
          }, 500)
        }
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
      </div>
    </nav>
  );
}

export default Tabs;
