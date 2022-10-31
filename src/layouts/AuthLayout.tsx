import { ReactNode } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { useLocale } from "src/contexts/localeContext";
import { useTheme } from "src/contexts/themeContext";
import { authLayoutContent } from "src/utils/content";

type AuthLayoutProps = {
  title: string;
  children: ReactNode;
};

function AuthLayout({ title, children }: AuthLayoutProps) {
  const { locale, toggleLocale } = useLocale();
  const { theme, toggleTheme } = useTheme();
  const t = authLayoutContent()[locale];

  return (
    <div className="App bg-white dark:bg-slate-900">
      <div className="grid min-h-[100vh] md:grid-flow-col md:grid-cols-2">
        <div className="hidden bg-blue-500 dark:bg-blue-700 md:flex">
          <div className="m-auto w-[27rem]">
            <img
              alt="note illustration"
              src="/illustrations/undraw_note_list_re_r4u9.svg"
            />
            <p className="mt-4 text-center text-2xl text-white">{t.message}</p>
          </div>
        </div>
        <div className="m-auto">
          <h1 className="text-center text-2xl font-bold capitalize">{title}</h1>

          <div className="mt-2 flex justify-center">
            <div
              className="mx-1 cursor-pointer rounded-md border border-gray-200 p-2 shadow-sm hover:bg-gray-200 dark:border-slate-600 dark:hover:bg-slate-700"
              onClick={toggleLocale}
            >
              {locale === "id" ? (
                <img className="h-5" alt="English" src="flags/en-US.svg" />
              ) : (
                <img className="h-5" alt="Indonesia" src="flags/id-ID.svg" />
              )}
            </div>

            <div
              className="mx-1 cursor-pointer rounded-md border border-gray-200 p-2 shadow-sm hover:bg-gray-200 dark:border-slate-600 dark:hover:bg-slate-700"
              onClick={toggleTheme}
            >
              {theme === "light" ? (
                <MoonIcon className="h-5" />
              ) : (
                <SunIcon className="h-5" />
              )}
            </div>
          </div>

          {children}
        </div>
      </div>
    </div>
  );
}

export default AuthLayout;
