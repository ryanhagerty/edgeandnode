import "./Button.css";

declare type ButtonProps = {
  children: string;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({ children, className }) => {
  const classes = className ? className : "";

  return (
    <button className={`button ${classes}`}>
      {children}
    </button>
  );
};

export default Button;