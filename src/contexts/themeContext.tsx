import { createContext, ReactNode, useContext, useMemo, useState } from "react";

type themeTypes = {
  theme: string;
  toggleTheme: () => void;
};

const ThemeContext = createContext<themeTypes | null>(null);

type ThemeProviderProps = {
  children: ReactNode;
};

function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState("");

  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
      return;
    }

    setTheme("dark");
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
