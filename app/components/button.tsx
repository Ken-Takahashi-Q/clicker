import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ButtonProps {
  type: "minus" | "plus" | "reset";
  text?: string;
  icon: IconProp;
  onClick: () => void;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  type,
  text,
  icon,
  onClick,
  disabled = false,
}) => {
  const buttonStyles = {
    minus:
      "w-28 bg-red-700 disabled:bg-gray-700 disabled:cursor-not-allowed hover:bg-red-800",
    plus: "w-28 bg-green-700 hover:bg-green-800",
    reset: "w-full bg-gray-700 hover:bg-gray-800",
  };

  return (
    <button
      className={`p-4 h-28 flex justify-center items-center text-3xl border rounded-full transition-all duration-300 
        ${buttonStyles[type]}`}
      onClick={onClick}
      disabled={disabled}
    >
      <FontAwesomeIcon icon={icon} />
      {text && <p className="ml-2">{text}</p>}
    </button>
  );
};

export default Button;
