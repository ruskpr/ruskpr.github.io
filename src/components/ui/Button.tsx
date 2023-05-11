// create ButtonProps interface
interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
}

// create a button component
const Button = (props: ButtonProps) => {
  const { children, onClick, className } = props;
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
};

// export the button component
export default Button;
