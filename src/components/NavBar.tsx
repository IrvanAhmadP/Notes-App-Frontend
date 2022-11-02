import { Link } from "react-router-dom";
import Proptypes from "prop-types";
import { useLocale } from "src/contexts/localeContext";
import { navBarComponentContent } from "src/utils/content";

type NavBarProps = {
  page: "active" | "archived" | "search";
};

function NavBar({ page }: NavBarProps) {
  return (
    <nav className="fixed inset-x-0 bottom-0 z-10 flex w-full divide-x border-t border-gray-300 bg-white text-center font-semibold dark:divide-slate-500 dark:border-slate-500 dark:bg-slate-700">
      {<NavLinks page={page} />}
    </nav>
  );
}

function NavLinks({ page }: NavBarProps) {
  const { locale } = useLocale();
  const t = navBarComponentContent()[locale];

  return (
    <>
      <Link
        to="/"
        className={`${
          page === "active" ? "text-blue-700 dark:text-blue-300" : ""
        } flex-1 py-4`}
      >
        {t.activeNotesLink}
      </Link>
      <Link
        to="/archived"
        className={`${
          page === "archived" ? "text-blue-700 dark:text-blue-300" : ""
        } flex-1 py-4`}
      >
        {t.archivedNotesLink}
      </Link>
    </>
  );
}

NavBar.prototype = {
  page: Proptypes.oneOf(["active", "archived", "search"]).isRequired,
};

NavLinks.prototype = {
  page: Proptypes.oneOf(["active", "archived", "search"]).isRequired,
};

export default NavBar;
