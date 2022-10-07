import { ReactNode } from "react";

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

export default RoundedButton;
