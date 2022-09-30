import { Link } from "react-router-dom";

type NavBarProps = {
  page: "active" | "archived" | "search";
};

function NavBar({ page }: NavBarProps) {
  return (
    <nav className="fixed bottom-0 z-10 flex w-full divide-x border-t border-gray-300 bg-white text-center font-semibold">
      {<NavLinks page={page} />}
    </nav>
  );
}

function NavLinks({ page }: NavBarProps) {
  return (
    <>
      <Link
        to="/"
        className={`${page === "active" ? "text-cyan-700" : ""} flex-1 py-4`}
      >
        Active Notes
      </Link>
      <Link
        to="/archived"
        className={`${page === "archived" ? "text-cyan-700" : ""} flex-1 py-4`}
      >
        Archived Notes
      </Link>
    </>
  );
}

export default NavBar;
