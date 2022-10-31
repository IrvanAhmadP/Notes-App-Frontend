import { Link } from "react-router-dom";
import { useLocale } from "src/contexts/localeContext";
import { noteNotFoundComponentContent } from "src/utils/content";

function NoteNotFound() {
  const { locale } = useLocale();
  const t = noteNotFoundComponentContent()[locale];

  return (
    <div className="flex h-[calc(100vh_-_128px)] items-center justify-center md:h-[calc(100vh_-_162px)]">
      <p className="font-semibold">
        {t.message}{" "}
        <Link className="text-blue-500 dark:text-blue-300" to="/">
          {t.homeLink}
        </Link>
        .
      </p>
    </div>
  );
}

export default NoteNotFound;
