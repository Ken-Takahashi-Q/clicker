import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { palette } from "../palette";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

interface CloseButtonProps {
  onClick: () => void;
}

const CloseButton: React.FC<CloseButtonProps> = ({ onClick }) => {
  return (
    <button
      className={`absolute top-0 left-0 p-2 h-10 w-10 flex justify-center items-center text-lg rounded-full
        transition-all duration-300 -translate-x-10 -translate-y-5
        ${palette["secondary"]} shadow-xl`}
      onClick={onClick}
    >
      <FontAwesomeIcon icon={faXmark} />
    </button>
  );
};

export default CloseButton;
