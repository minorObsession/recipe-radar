import { focusRing } from "../helpers/classNames";

function Button({
  children,
  onClick,
  onMouseOver,
  onMouseLeave,
  additionalClasses,
  type = "primary",
  isCollapsed,
  btnEl,
  value,
  clicked,
}) {
  if (type === "inline")
    return (
      <button
        className={`inline lg:text-xl w-20 lg:w-36 text-center bg-stone-600 text-base rounded-lg py-3 px-3 hover:bg-stone-800 transition-colors duration-600    ${focusRing}`}
        onClick={onClick}
        ref={btnEl}
      >
        {children}
      </button>
    );

  if (type === "small")
    return (
      <button
        className={`text-center m-0.5 text-xs md:text-sm rounded-full py-2 px-3 hover:bg-stone-700 transition-colors duration-300  ${additionalClasses} ${
          clicked && " bg-amber-900"
        }`}
        onClick={onClick}
        value={value}
      >
        {children}
      </button>
    );

  if (type === "round") {
    return (
      <button
        className={`flex items-center justify-center w-10 lg:w-10 lg:text-xl text-center bg-amber-900 text-base rounded-full py-1 px-3 hover:bg-stone-200 hover:text-amber-900 transition-colors duration-600 ${focusRing} ${additionalClasses}`}
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
        className={`flex items-center justify-center w-10 lg:w-10 text-base rounded-full py-1 px-3 hover:bg-stone-200 hover:text-amber-900 transition-transform duration-600 bg-amber-900   ${
          isCollapsed ? "rotate-0" : "rotate-180"
        }    ${focusRing}`}
        onClick={onClick}
      >
        {children}
      </button>
    );
  return (
    <button
      className={`flex items-center justify-center lg:text-xl text-center text-sm md:text-base font-semibold md:tracking-wider rounded-full py-3 px-5 bg-stone-500 hover:bg-stone-200 hover:text-stone-800 transition-colors duration-600 whitespace-nowrap ${focusRing} ${additionalClasses}`}
      onClick={onClick}
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </button>
    // <button
    //   className={`text-center bg-stone-600 lg:text-xl rounded-full py-3 px-4 tracking-wide hover:bg-stone-800 transition-colors duration-600 ${additionalClasses} ${focusRing}`}
    //   onClick={onClick}
    //   onMouseOver={onMouseOver}
    //   onMouseLeave={onMouseLeave}
    // >
    //   {children}
    // </button>
  );
}

export default Button;
