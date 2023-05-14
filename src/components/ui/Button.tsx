// create ButtonProps interface
interface ButtonProps {
  children: React.ReactNode;
  type: ButtonType;
  onClick?: () => void;
  className?: string;
}

// create an enum for button types
export enum ButtonType {
  PRIMARY = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",
  SECONDARY = "bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded",
  SUCCESS = "bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded",
  DANGER = "bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded",
  WARNING = "bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded",
  INFO = "bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded",
  LIGHT = "bg-gray-100 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded",
  DARK = "bg-gray-700 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded",
}

// create a button component
export const Button = (props: ButtonProps) => {
  const { children, onClick, className, type } = props;
  return (
    <button onClick={onClick} className={type + " " + className}>
      {children}
    </button>
  );
};
