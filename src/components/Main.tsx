import { ReactNode } from "react";
import Proptypes from "prop-types";

type MainProps = {
  children: ReactNode;
};

function Main({ children }: MainProps) {
  return <main className="pb-[56px] md:pb-[90px]">{children}</main>;
}

Main.prototype = {
  children: Proptypes.node.isRequired,
};

export default Main;
