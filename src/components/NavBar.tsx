import { Link } from "react-router-dom";

type NavBarProps = {
  page: "active" | "archived";
};

function NavBar({ page }: NavBarProps) {
  return (
    <nav className="fixed bottom-0 z-10 flex w-full divide-x border-t border-gray-300 bg-white font-semibold">
      {page === "active" ? <ActiveNavLinks /> : <ArchivedNavLinks />}
    </nav>
  );
}

function ActiveNavLinks() {
  return (
    <>
      <Link to="/" className="flex-1 py-4 text-center text-blue-500">
        Active Notes
      </Link>
      <Link to="/archived" className="flex-1 py-4 text-center">
        Archived Notes
      </Link>
    </>
  );
}

function ArchivedNavLinks() {
  return (
    <>
      <Link to="/" className="flex-1 py-4 text-center">
        Active Notes
      </Link>
      <Link to="/archived" className="flex-1 py-4 text-center text-blue-500">
        Archived Notes
      </Link>
    </>
  );
}

export default NavBar;
