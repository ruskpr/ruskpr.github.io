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
  Primary = "bg-blue-600 hover:bg-blue-700",
  Secondary = "bg-red-400 hover:bg-red-500",
  Success = "bg-green-600 hover:bg-green-700",
  Danger = "bg-rose-800 hover:bg-rose-900",
  Warning = "bg-yellow-500 hover:bg-yellow-600",
  Info = "bg-cyan-400 hover:bg-cyan-300",
  Light = "bg-gray-200 hover:bg-gray-300 text-gray-600",
  Dark = "bg-gray-700 hover:bg-gray-900",
  Link = "font-extralight text-white bg-transparent hover:text-blue-500 hover:shadow-none",
}

export enum ButtonSize {
  xs = "py-1 px-3 text-xs",
  sm = "py-1 px-3 text-md",
  md = "py-1 px-3 text-lg",
  lg = "py-1 px-4 text-xl",
  xl = "py-2 px-6 text-3xl",
  xxl = "py-2 px-6 text-6xl",
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
    "flex items-center text-sm font-primdary font-bold text-white font-medium rounded-full";
  const hoverTransition = animate
    ? "transition duration-100 ease-in-out hover:shadow-lg hover:scale-105"
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
