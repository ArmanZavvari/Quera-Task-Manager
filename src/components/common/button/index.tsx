import { FC, MouseEventHandler } from "react";

interface ButtonProps {
  type?: "button" | "submit" | "reset";
  color?: string;
  textColor?: string;
  text: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const Button: FC<ButtonProps> = ({
  type = "button",
  color,
  textColor,
  text,
  onClick,
}) => {
  return (
    <button
      type={type}
      style={{ backgroundColor: color, color: textColor }}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
