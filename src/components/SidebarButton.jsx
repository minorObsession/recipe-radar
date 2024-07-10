import { Children } from "react";

function SidebarButton({
  children,
  additionalClassNames,
  onMouseEnter,
  onMouseLeave,
}) {
  return (
    <button
      className={`${additionalClassNames}  `}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </button>
  );
}

export default SidebarButton;
