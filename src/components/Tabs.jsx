import { NavLink, useNavigate } from "react-router-dom";
import SidebarButton from "./SidebarButton";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { resetSearch } from "../features/searchSlice";

function Tabs() {
  const { currentAccount, savedRecipes } = useSelector((store) => store.search);
  const [showSavedRecipes, setShowSavedRecipes] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //
  function handleSelectRecipe(e) {
    const recipeName = e.target.textContent;
    const recipe = savedRecipes.find((r) => r.title === recipeName);

    navigate(`/app/search/${recipe.id}`);
  }

  function refreshPage() {
    navigate(`/app/search`);
    // dispatch(startSearching());

    setTimeout(() => {
      dispatch(resetSearch());
      // dispatch(stopSearching());
    }, 500);
  }

  return (
    <div className="col-span-2 flex justify-between gap-4 p-4 sm:p-2 mb-6  border-b-2 border-amber-300 border-dotted md:racking-wider sm:font-semibold text-sm sm:text-lg lg:text-xl md:whitespace-nowrap">
      <div className="flex gap-10">
        <NavLink to="search" onClick={refreshPage}>
          <SidebarButton>Search</SidebarButton>
        </NavLink>

        <NavLink to="my-recipes">
          <SidebarButton>My Recipes</SidebarButton>
        </NavLink>
      </div>
      <div className="flex gap-10 ">
        <NavLink to="meal-planning">
          <SidebarButton>Plan Meals</SidebarButton>
        </NavLink>

        <div
          onMouseEnter={() => setShowSavedRecipes(true)}
          onMouseLeave={() => setShowSavedRecipes(false)}
          className="relative"
        >
          <SidebarButton
            additionalClassNames="text-amber-500  "
            // onMouseEnter={() => {
            //   setShowSavedRecipes(true);
            //   return <span>1111111</span>;
            // }}
            // onMouseLeave={() => setShowSavedRecipes(false)}
          >
            {currentAccount?.name}
          </SidebarButton>
          {showSavedRecipes && (
            <div className="absolute top-6 right-0 md:top-7 md:right-0 flex flex-col z-50 bg-stone-600 p-5 rounded-xl transition-opacity duration-300 opacity-60 hover:opacity-100">
              <div className="flex flex-col gap-2 ">
                <h2 className="self-center text-center mb-4 text-lg font-semibold tracking-wider md:text-xl bg-stone-500 px-5 py-2 rounded-lg">
                  My Recipes
                </h2>
                <ul className="flex flex-col gap-3 ">
                  {savedRecipes.map((r) => (
                    <li
                      // ! navigate to recipePreview
                      onClick={handleSelectRecipe}
                      className="text-sm cursor-pointer md:text-base "
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
    </div>
  );
}

export default Tabs;
