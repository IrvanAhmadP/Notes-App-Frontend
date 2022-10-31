import { Link } from "react-router-dom";
import { useLocale } from "src/contexts/localeContext";
import { dataNotFoundComponentContent } from "src/utils/content";

function DataNotFound() {
  const { locale } = useLocale();
  const t = dataNotFoundComponentContent()[locale];

  return (
    <div className="flex h-[calc(100vh_-_128px_-_57px)] items-center justify-center md:h-[calc(100vh_-_162px_-_57px)]">
      <p className="font-semibold">
        {t.message},{" "}
        <Link className="text-blue-500 dark:text-blue-300" to="/new-note">
          {t.createNoteLink}
        </Link>
        .
      </p>
    </div>
  );
}

export default DataNotFound;
