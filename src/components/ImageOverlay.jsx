function ImageOverlay({
  position = "top", // or 'bottom'
  children,
  className = "",
}) {
  const positionClass =
    position === "top" ? "top-4 lg:top-10" : "bottom-4 lg:bottom-10";

  return (
    <div
      className={` border border-current absolute ${positionClass} flex items-center gap-3 bg-stone-500 rounded-lg p-1.5 transition-all duration-700 ${className}`}
    >
      {children}
    </div>
  );
}

export default ImageOverlay;
