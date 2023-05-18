import React from "react";

// create ButtonProps interface
interface ButtonProps {
  children?: React.ReactNode;
  type?: ButtonType;
  size?: ButtonSize;
  animate?: boolean;
  onClick?: () => void;
  className?: string;
  href?: string;
}

// create an enum for button types
export enum ButtonType {
  Primary = "bg-red-400 hover:bg-red-500",
  Secondary = "bg-indigo-500 hover:bg-indigo-700",
  Success = "bg-green-500 hover:bg-green-700",
  Danger = "bg-rose-800 hover:bg-rose-900",
  Warning = "bg-yellow-500 hover:bg-yellow-600",
  Info = "bg-cyan-400 hover:bg-cyan-300",
  Light = "bg-gray-200 hover:bg-gray-300 text-gray-600",
  Dark = "bg-gray-700 hover:bg-gray-900",
  Link = "font-extralight text-white bg-transparent hover:text-red-300 hover:shadow-none",
}

export enum ButtonSize {
  xs = "py-1 px-3 text-xs",
  sm = "py-1 px-3 text-md",
  md = "py-1 px-3 text-lg",
  lg = "py-1 px-4 text-xl",
  xl = "py-2 px-6 text-3xl",
}

// create a button component
export const Button = (props: ButtonProps) => {
  const {
    children,
    onClick,
    className,
    type = ButtonType.Primary,
    size = ButtonSize.md,
    animate = true,
    href,
  } = props;

  const defaultStyles =
    "flex items-center text-sm font-primary font-bold text-white font-medium rounded-md";
  const hoverTransition = animate
    ? "transition duration-75 ease-in-out hover:shadow-lg hover:scale-105"
    : "";

  return (
    <button
      {...(href ? { href } : {})}
      onClick={onClick}
      className={
        hoverTransition +
        " " +
        defaultStyles +
        " " +
        type +
        " " +
        size +
        " " +
        className
      }
    >
      {children}
    </button>
  );
};
