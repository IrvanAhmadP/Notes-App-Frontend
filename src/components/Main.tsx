import { ReactNode } from "react";

type MainProps = {
  children: ReactNode;
};

function Main({ children }: MainProps) {
  return <main className="pb-[56px] md:pb-[90px]">{children}</main>;
}

export default Main;
