import { createContext, ReactNode, useContext, useMemo, useState } from "react";
import { putLocalStorage } from "src/utils/storage";
import { getInitialLanguage } from "src/utils/language";

const initialValue: localeTypes = {
  locale: "en",
  toggleLocale: () => {},
};

type localeTypes = {
  locale: "id" | "en";
  toggleLocale: () => void;
};

const LocaleContext = createContext<localeTypes>(initialValue);

type localeProviderProps = {
  children: ReactNode;
};

function LocaleProvider({ children }: localeProviderProps) {
  const [locale, setLocale] = useState<"id" | "en">(
    getInitialLanguage() || "en"
  );

  const toggleLocale = () => {
    if (locale === "en") {
      setLocale("id");
      putLocalStorage({ key: "language", value: "id" });
      return;
    }
    setLocale("en");
    putLocalStorage({ key: "language", value: "en" });
  };

  const value = useMemo(() => {
    return {
      locale,
      toggleLocale,
    };
  }, [locale]);

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
}

function useLocale() {
  return useContext(LocaleContext);
}

export { LocaleProvider, useLocale };
