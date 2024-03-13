import React, { FC, MouseEventHandler } from "react";
import { Link } from "react-router-dom";

interface ButtonProps {
  type?: "button" | "submit" | "reset";
  color?: string;
  textColor?: string;
  text: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  isLoading?: boolean;
  disabled?: boolean;
  customStyle?: React.CSSProperties;
  width?: number | string;
  height?: number | string;
  className?: string;
  workspaceId?: string;
  projectId?: string;
}

const LinkButton: FC<ButtonProps> = ({
  workspaceId,
  projectId,
  type,
  color,
  textColor,
  text,
  onClick,
  isLoading,
  disabled,
  customStyle,
  width,
  height,
  className,
}) => {
  const buttonStyle: React.CSSProperties = {
    width: width ?? "100%",
    height: height ?? "auto",
    backgroundColor: color,
    color: textColor,
    opacity: isLoading || disabled ? 0.5 : 1,
    cursor: isLoading || disabled ? "not-allowed" : "pointer",
    ...customStyle,
  };

  return (
    <Link to={`/dashboard/boardview/${workspaceId}/projects/${projectId}`}>
      <button
        type={type}
        className={className}
        style={buttonStyle}
        onClick={onClick}
        disabled={isLoading || disabled}
      >
        {isLoading ? "لطفا منتظر بمانید" : text}
      </button>
    </Link>
  );
};

export default LinkButton;
