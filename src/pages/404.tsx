import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Main, Container } from "src/components";
import { useAuth } from "src/contexts/authContext";

function NotFound() {
  const { auth } = useAuth();
  useEffect(() => {
    document.title = "Page Not Found";
  }, []);

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
              Page not found, back to{" "}
              {auth ? (
                <Link to="/" className="text-blue-500">
                  home
                </Link>
              ) : (
                <Link to="/login" className="text-blue-500">
                  login
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
