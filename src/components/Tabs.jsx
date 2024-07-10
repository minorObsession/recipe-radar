import { NavLink, useNavigate } from "react-router-dom";
import SidebarButton from "./SidebarButton";
import { useSelector } from "react-redux";
import { useState } from "react";

function Tabs() {
  const { currentAccount, savedRecipes } = useSelector((store) => store.search);
  const [showSavedRecipes, setShowSavedRecipes] = useState(false);
  const navigate = useNavigate();

  //
  function handleSelectRecipe(e) {
    const recipeName = e.target.textContent;
    const recipe = savedRecipes.find((r) => r.title === recipeName);

    navigate(`/app/search/${recipe.id}`);
  }
  return (
    <div className="col-span-2 flex justify-between gap-4 p-4 sm:p-2 mb-6  border-b-2 border-amber-300 border-dotted md:racking-wider sm:font-semibold text-sm sm:text-lg lg:text-xl md:whitespace-nowrap">
      <div className="flex gap-10">
        <NavLink to="search">
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
            <div className="absolute top-7 right-0 flex flex-col z-50 bg-slate-600 p-5 rounded-xl max-w-48 transition-opacity duration-300  opacity-60 hover:opacity-100">
              <div className="flex flex-col gap-2 ">
                <h2 className="self-center mb-4">My Recipes</h2>
                {savedRecipes.map((r) => (
                  <li
                    // ! navigate to recipePreview
                    onClick={handleSelectRecipe}
                    className="text-sm cursor-pointer list-disc"
                    key={r.id}
                  >
                    {r.title}
                  </li>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Tabs;
