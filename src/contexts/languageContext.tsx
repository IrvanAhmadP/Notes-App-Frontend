import { createContext, ReactNode, useContext, useMemo, useState } from "react";

type languageTypes = {
  language: string;
  toggleLanguage: () => void;
};

const LanguageContext = createContext<languageTypes | null>(null);

type LanguageProviderProps = {
  children: ReactNode;
};

function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguage] = useState("");

  const toggleLanguage = () => {
    if (language === "us") {
      setLanguage("id");
      return;
    }

    setLanguage("us");
  };

  const value = useMemo(() => {
    return {
      language,
      toggleLanguage,
    };
  }, [language]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

function useLanguage() {
  return useContext(LanguageContext);
}

export { LanguageProvider, useLanguage };
