import { NavLink, useNavigate } from "react-router-dom";
import SidebarButton from "./SidebarButton";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { resetSearch } from "../features/searchSlice";

function Tabs() {
  const { currentAccount, savedRecipes } = useSelector((store) => store.search);
  const [showSavedRecipes, setShowSavedRecipes] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //
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
    // ! INDICATE THESE ARE TABSW
    <div className=" gap-2 w-full col-span-2 flex justify-between items-center p-2 mb-6 border-b-2 border-amber-300 border-dotted md:racking-wider sm:font-semibold text-xs sm:text-sm md:text-lg lg:text-xl md:whitespace-nowrap">
      <NavLink to="search" onClick={refreshPage}>
        <SidebarButton>Search</SidebarButton>
      </NavLink>

      <NavLink className="" to="my-recipes">
        <SidebarButton>My Recipes</SidebarButton>
      </NavLink>
      <NavLink to="meal-planning">
        <SidebarButton>Plan Meals</SidebarButton>
      </NavLink>

      <div
        onMouseEnter={() => setShowSavedRecipes(true)}
        onMouseLeave={() =>
          setTimeout(() => {
            setShowSavedRecipes(false);
          }, 1000)
        }
        className="relative"
      >
        <SidebarButton additionalClassNames="text-amber-500  ">
          {currentAccount?.name}
        </SidebarButton>
        {showSavedRecipes && (
          <div
            className="absolute overflow-y-scroll top-6 right-0 md:top-7 md:right-0 flex flex-col z-50 bg-stone-600 p-5 rounded-xl transition-opacity duration-300 opacity-60 hover:opacity-100 
"
          >
            <div className="flex flex-col gap-2 ">
              <NavLink
                to="/app/my-recipes"
                className="self-center text-center mb-4 font-semibold tracking-wider bg-stone-500 px-5 py-2 rounded-lg"
              >
                My Recipes
              </NavLink>
              <ul className="flex flex-col gap-3 ">
                {savedRecipes.map((r) => (
                  <li
                    // ! navigate to recipePreview
                    onClick={handleSelectRecipe}
                    className="cursor-pointer hover:bg-amber-900 transition duration-300 p-2 rounded-lg"
                    key={r.id}
                  >
                    {r.title}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Tabs;
