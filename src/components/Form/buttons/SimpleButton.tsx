import { ReactNode } from "react";

type SimpleButtonProps = {
  color: string;
  classes?: string;
  children: ReactNode;
  handleClick?: any;
};

function SimpleButton({
  color,
  classes,
  children,
  handleClick,
}: SimpleButtonProps) {
  return (
    <button className={`${color} ${classes} rounded p-1`} onClick={handleClick}>
      {children}
    </button>
  );
}

export default SimpleButton;
