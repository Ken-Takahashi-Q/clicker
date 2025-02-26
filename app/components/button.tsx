import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { palette } from "../palette";

interface ButtonProps {
  type: "start";
  text?: string;
  icon: IconProp;
  onClick: () => void;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ type, text, icon, onClick }) => {
  const buttonStyles = {
    start: `${palette.secondary} ${palette["disable"]} ${palette["secondaryHover"]}`,
  };

  return (
    <button
      className={`p-4 h-12 w-full flex justify-center items-center text-xl rounded-full transition-all duration-300 
        ${buttonStyles[type]}`}
      onClick={onClick}
    >
      <FontAwesomeIcon icon={icon} />
      {text && <p className="ml-2">{text}</p>}
    </button>
  );
};

export default Button;
