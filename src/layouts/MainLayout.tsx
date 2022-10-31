import { ReactNode } from "react";
import { Container, Header, Main } from "src/components";

type MainLayoutProps = {
  children: ReactNode;
};

function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="App">
      <Header />
      <Main>
        <Container>{children}</Container>
      </Main>
    </div>
  );
}

export default MainLayout;
