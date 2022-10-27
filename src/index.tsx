import React from "react";
import ReactDOM from "react-dom/client";
import "src/styles/global.css";
import App from "src/App";
import reportWebVitals from "./reportWebVitals";
import { SearchProvider } from "src/contexts/searchContext";
import { AuthProvider } from "src/contexts/authContext";
import { ThemeProvider } from "src/contexts/themeContext";
import { LanguageProvider } from "src/contexts/languageContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <AuthProvider>
      <LanguageProvider>
        <ThemeProvider>
          <SearchProvider>
            <App />
          </SearchProvider>
        </ThemeProvider>
      </LanguageProvider>
    </AuthProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
