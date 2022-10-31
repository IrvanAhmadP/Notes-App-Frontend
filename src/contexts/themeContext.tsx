import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { putLocalStorage } from "src/utils/storage";
import { getInitialTheme } from "src/utils/theme";

const initialValue = {
  theme: "dark",
  toggleTheme: () => {},
};

type themeTypes = {
  theme: string;
  toggleTheme: () => void;
};

const ThemeContext = createContext<themeTypes>(initialValue);

type ThemeProviderProps = {
  children: ReactNode;
};

function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState(getInitialTheme());

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
      putLocalStorage({ key: "theme", value: "light" });
      return;
    }

    setTheme("dark");
    putLocalStorage({ key: "theme", value: "dark" });
  };

  const value = useMemo(() => {
    return {
      theme,
      toggleTheme,
    };
  }, [theme]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

function useTheme() {
  return useContext(ThemeContext);
}

export { ThemeProvider, useTheme };
