import { faRedo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { palette } from "../palette";

interface ResetButtonProps {
  onClick: () => void;
  disabled?: boolean;
}

const ResetButton: React.FC<ResetButtonProps> = ({
  onClick,
  disabled = false,
}) => {
  return (
    <button
      className={`p-4 w-full h-12 flex justify-center items-center text-xl text-white rounded-[1rem] transition-all duration-300 
        ${palette["primary"]} ${palette["primaryHover"]} ${palette["disable"]} disabled:cursor-not-allowed disabled:text-gray-700`}
      onClick={onClick}
      disabled={disabled}
    >
      <FontAwesomeIcon icon={faRedo} className="mr-2" /> Reset
    </button>
  );
};

export default ResetButton;
