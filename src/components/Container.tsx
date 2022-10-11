import { ReactNode } from "react";
import PropTypes from "prop-types";

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

Container.prototype = {
  padding: PropTypes.oneOf(["default", "mobile-px-0"]),
  children: PropTypes.node,
};

export default Container;
