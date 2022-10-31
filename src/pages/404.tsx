import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Main, Container } from "src/components";
import { useAuth } from "src/contexts/authContext";
import { useLocale } from "src/contexts/localeContext";
import { pageNotFoundContent } from "src/utils/content";

function NotFound() {
  const { locale } = useLocale();
  const t = pageNotFoundContent()[locale];
  const { auth } = useAuth();
  useEffect(() => {
    document.title = t.title;
  }, [t.title]);

  return (
    <div className="App">
      <Main>
        <Container>
          <div className="flex h-[calc(100vh_-_150px)] flex-col text-center">
            <img
              className="m-auto w-96"
              src="/illustrations/undraw_page_not_found_re_e9o6.svg"
              alt="404 page"
            />

            <p className="font-semibold">
              {t.message}{" "}
              {auth ? (
                <Link to="/" className="text-blue-500">
                  {t.homeLink}
                </Link>
              ) : (
                <Link to="/login" className="text-blue-500">
                  {t.loginLink}
                </Link>
              )}
              .
            </p>
          </div>
        </Container>
      </Main>
    </div>
  );
}

export default NotFound;
