import { ReactNode } from "react";
import Proptypes from "prop-types";

type SimpleButtonProps = {
  disabled?: boolean;
  color: string;
  classes?: string;
  children: ReactNode;
  handleClick?: any;
};

function SimpleButton({
  disabled,
  color,
  classes,
  children,
  handleClick,
}: SimpleButtonProps) {
  return (
    <button
      disabled={disabled}
      className={`
        ${color} 
        ${classes ? classes : ""}
        rounded p-1 disabled:cursor-not-allowed`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}

SimpleButton.prototype = {
  disabled: Proptypes.bool,
  color: Proptypes.string.isRequired,
  classes: Proptypes.string,
  children: Proptypes.node,
  handleClick: Proptypes.func,
};

export default SimpleButton;
