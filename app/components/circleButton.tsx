import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { palette } from "../palette";

interface CircleButtonProps {
  type: "minus" | "plus" | "start";
  text?: string;
  icon: IconProp;
  onClick: () => void;
  disabled?: boolean;
}

const CircleButton: React.FC<CircleButtonProps> = ({
  type,
  text,
  icon,
  onClick,
  disabled = false,
}) => {
  const buttonStyles = {
    minus: `${palette.secondary} ${palette["disable"]} ${palette["secondaryHover"]}`,
    plus: `${palette.primary} ${palette["primaryHover"]}`,
    start: `${palette.secondary} ${palette["disable"]} ${palette["secondaryHover"]}`,
  };

  return (
    <button
      className={`p-4 h-20 w-20 flex justify-center items-center text-3xl rounded-full transition-all duration-300 
        ${buttonStyles[type]} disabled:cursor-not-allowed`}
      onClick={onClick}
      disabled={disabled}
    >
      <FontAwesomeIcon icon={icon} />
      {text && <p className="ml-2">{text}</p>}
    </button>
  );
};

export default CircleButton;
