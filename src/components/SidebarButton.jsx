import { Children } from "react";

function SidebarButton({ children }) {
  return (
    <button className="block border-b border-stone-600">{children}</button>
  );
}

export default SidebarButton;
