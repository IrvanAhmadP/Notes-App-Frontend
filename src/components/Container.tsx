import { ReactNode } from "react";

type ContainerProps = {
  padding?: "default" | "mobile-px-0";
  children?: ReactNode;
};

function Container({ padding = "default", children }: ContainerProps) {
  const paddingClass = padding === "default" ? "px-4" : "";
  return (
    <div className={`m-auto max-w-screen-lg ${paddingClass}`}>{children}</div>
  );
}

export default Container;
