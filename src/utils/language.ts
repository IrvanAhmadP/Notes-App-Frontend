import { getLocalStorage } from "src/utils/storage";

const getInitialLanguage = () => {
  if (getLocalStorage("language") === "id") {
    return "id";
  }
  return "en";
};

export { getInitialLanguage };
