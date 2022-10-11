import { ReactNode } from "react";
import Proptypes from "prop-types";

type RoundedButtonProps = {
  classes?: string;
  color?: string;
  handleClick?: any;
  children: ReactNode;
};

function RoundedButton({
  classes,
  color,
  handleClick,
  children,
}: RoundedButtonProps) {
  return (
    <button
      onClick={handleClick}
      className={`${classes} ${color} h-12 w-12 rounded-full`}
    >
      {children}
    </button>
  );
}

RoundedButton.prototype = {
  classes: Proptypes.string,
  color: Proptypes.string,
  handleClick: Proptypes.func,
  children: Proptypes.node.isRequired,
};

export default RoundedButton;
