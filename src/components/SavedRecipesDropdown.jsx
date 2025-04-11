import { NavLink } from "react-router-dom";

function SavedRecipesDropdown({
  savedRecipes,
  handleSelectRecipe,
  showSavedRecipes,
}) {
  if (!savedRecipes.length) return null;

  return (
    <article
      className={`absolute overflow-y-scroll w-[clamp(300px,80svw,1200px)] top-5 right-0 md:top-5 md:right-0 flex flex-col z-50 bg-stone-700/85 p-5 rounded-xl transition-opacity duration-500 ease-in-out ${
        showSavedRecipes ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      <div className="flex flex-col gap-2 ">
        <NavLink
          to="/app/my-recipes"
          className="self-center text-center mb-4 font-semibold tracking-wider bg-stone-500 px-5 py-2 rounded-lg"
        >
          My Recipes
        </NavLink>
        <ul className="flex flex-col gap-3">
          {savedRecipes.map((r) => (
            <li
              onClick={handleSelectRecipe}
              className="cursor-pointer hover:bg-amber-900 transition duration-300 p-2 rounded-lg"
              key={r.id}
            >
              {r.title}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default SavedRecipesDropdown;
