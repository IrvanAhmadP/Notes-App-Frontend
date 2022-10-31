import { ReactNode } from "react";
import { Link } from "react-router-dom";
import {
  MoonIcon,
  SunIcon,
  ArrowLeftOnRectangleIcon,
} from "@heroicons/react/24/outline";
import { useAuth } from "src/contexts/authContext";
import { useLocale } from "src/contexts/localeContext";
import { useTheme } from "src/contexts/themeContext";
import { Container } from "src/components";

function Header() {
  const { auth, onLogout } = useAuth();
  const { locale, toggleLocale } = useLocale();
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="bg-slate-800 py-4 text-white dark:bg-slate-700">
      <Container>
        <div className="flex justify-between gap-2">
          <h3 className="text-3xl font-semibold">
            <Link to="/">Notes</Link>
          </h3>

          <div className="flex items-center gap-2">
            <div className="flex gap-2">
              <Menu handleClick={toggleLocale}>
                {locale === "id" ? (
                  <img className="h-5" src="/flags/en-US.svg" alt="English" />
                ) : (
                  <img className="h-5" src="/flags/id-ID.svg" alt="Indonesia" />
                )}
              </Menu>

              <Menu handleClick={toggleTheme}>
                {theme === "light" ? (
                  <MoonIcon className="h-5 w-5" />
                ) : (
                  <SunIcon className="h-5 w-5" />
                )}
              </Menu>

              <Menu handleClick={onLogout}>
                <ArrowLeftOnRectangleIcon className="inline h-5 w-5" />
                <span className="capitalize"> Hi {auth?.name}!</span>{" "}
              </Menu>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}

type MenuProps = {
  children: ReactNode;
  handleClick?: () => void;
};

function Menu({ children, handleClick }: MenuProps) {
  return (
    <div
      onClick={handleClick}
      className="cursor-pointer rounded-md p-2 hover:bg-gray-600 active:bg-gray-600"
    >
      {children}
    </div>
  );
}

export default Header;
