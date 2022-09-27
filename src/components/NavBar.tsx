import { Link } from "react-router-dom";

type NavBarProps = {
  page: "active" | "archived";
};

function NavBar({ page }: NavBarProps) {
  return (
    <nav className="fixed bottom-0 z-10 flex w-full divide-x border-t border-gray-300 bg-white text-center font-semibold">
      {<NavLinks open={page} />}
    </nav>
  );
}

type NavLinksProps = {
  open: "active" | "archived";
};

function NavLinks({ open }: NavLinksProps) {
  return (
    <>
      <Link
        to="/"
        className={`${open === "active" ? "text-cyan-500" : ""} flex-1 py-4`}
      >
        Active Notes
      </Link>
      <Link
        to="/archived"
        className={`${open === "archived" ? "text-cyan-500" : ""} flex-1 py-4`}
      >
        Archived Notes
      </Link>
    </>
  );
}

export default NavBar;
