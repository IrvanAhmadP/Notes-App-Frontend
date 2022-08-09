import { ReactNode } from "react";

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
      className={`${color} ${classes} rounded p-1 disabled:cursor-not-allowed`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}

export default SimpleButton;
