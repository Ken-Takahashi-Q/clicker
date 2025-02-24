import { faRedo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { palette } from "../palette";

interface RecentButtonProps {
  onClick: () => void;
  disabled?: boolean;
}

const RecentButton: React.FC<RecentButtonProps> = ({
  onClick,
  disabled = false,
}) => {
  return (
    <button
      className={`p-4 h-28 flex justify-center items-center text-3xl text-white rounded-[40px] transition-all duration-300 
        w-full ${palette["primary"]} ${palette["primaryHover"]}`}
      onClick={onClick}
      disabled={disabled}
    >
      <FontAwesomeIcon icon={faRedo} className="mr-2" /> Reset
    </button>
  );
};

export default RecentButton;
