function Footer() {
  return (
    <footer className=" absolute bottom-0 right-0 col-span-2 text-center p-1 border-t border-b border-amber-300">
      <p className="">
        &copy; Copyright {new Date().getFullYear()} by Recipe Radar Inc.
      </p>
    </footer>
  );
}

export default Footer;
