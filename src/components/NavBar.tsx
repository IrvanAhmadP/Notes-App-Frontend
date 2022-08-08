import { Link } from "react-router-dom";

type NavBarProps = {
  page: "active" | "archived";
};

function NavBar({ page }: NavBarProps) {
  return (
    <nav className="flex fixed bottom-0 border-t font-semibold border-gray-300 z-10 divide-x bg-white w-full">
      {page === "active" ? <ActiveNavLinks /> : <ArchivedNavLinks />}
    </nav>
  );
}

function ActiveNavLinks() {
  return (
    <>
      <Link to="/" className="flex-1 text-blue-500 text-center py-4">
        Active Notes
      </Link>
      <Link to="/archived" className="flex-1 text-center py-4">
        Archived Notes
      </Link>
    </>
  );
}

function ArchivedNavLinks() {
  return (
    <>
      <Link to="/" className="flex-1 text-center py-4">
        Active Notes
      </Link>
      <Link to="/archived" className="flex-1 text-blue-500 text-center py-4">
        Archived Notes
      </Link>
    </>
  );
}

export default NavBar;
