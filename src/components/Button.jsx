import { focusRing } from "../helpers/classNames";

function Button({
  children,
  onClick,
  onMouseOver,
  onMouseLeave,
  additionalClasses,
  type = "primary",
  isCollapsed,
}) {
  if (type === "round") {
    return (
      <button
        className={`flex items-center justify-center w-8 lg:w-8 lg:text-xl text-center bg-amber-900 text-base rounded-full py-1 px-3 hover:bg-stone-200 hover:text-amber-900 transition-colors duration-600 ${focusRing} ${additionalClasses}`}
        onClick={onClick}
        onMouseOver={onMouseOver}
        onMouseLeave={onMouseLeave}
      >
        {children}
      </button>
    );
  }

  if (type === "collapsingArrow")
    return (
      <button
        className={`flex items-center justify-center bg-stone-600 text-base rounded-lg py-1 px-3 hover:bg-stone-800 transition-transform duration-600 ${
          isCollapsed ? "rotate-0" : "rotate-180"
        }    ${focusRing}`}
        onClick={onClick}
      >
        {children}
      </button>
    );

  if (type === "inline")
    return (
      <button
        className={`inline lg:text-xl w-20 lg:w-36 text-center bg-stone-600 text-base rounded-lg py-3 px-3 hover:bg-stone-800 transition-colors duration-600    ${focusRing}`}
        onClick={onClick}
      >
        {children}
      </button>
    );

  if (type === "small")
    return (
      <button
        className={`text-center m-0.5 bg-stone-500 text-base rounded-full py-2 px-3 hover:bg-stone-700 transition-colors duration-600    ${focusRing} ${additionalClasses}`}
        onClick={onClick}
      >
        {children}
      </button>
    );

  return (
    <button
      className={`text-center bg-stone-600 text-xl rounded-full py-3 px-3 tracking-wide hover:bg-stone-800 transition-colors duration-600   ${additionalClasses}   ${focusRing}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
