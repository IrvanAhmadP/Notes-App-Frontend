const getInitialTheme = () => {
  const themeLocalStorage = localStorage.getItem("theme");
  if (themeLocalStorage === "light") {
    return "light";
  }

  if (window.matchMedia("(prefers-color-scheme: light)").matches) {
    return "light";
  }

  return "dark";
};

export { getInitialTheme };
