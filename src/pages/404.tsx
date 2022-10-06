import { Main, Header, Container } from "src/components";

function NotFound() {
  return (
    <div className="App">
      <Header />
      <Main>
        <Container>
          <div className="flex h-[calc(100vh_-_150px)]">
            <img
              className="m-auto w-96"
              src="/undraw_page_not_found_re_e9o6.svg"
              alt="404 page"
            />
          </div>
        </Container>
      </Main>
    </div>
  );
}

export default NotFound;
