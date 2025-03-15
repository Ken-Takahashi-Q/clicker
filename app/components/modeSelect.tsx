import { Select } from "antd";
import { ModeChoice } from "../utils";

interface ModeSelectProps {
  onChange: (index: number, mode: string) => void;
  options: ModeChoice[];
}

const ModeSelect: React.FC<ModeSelectProps> = ({ onChange, options }) => {
  return (
    <Select
      defaultValue={options[0].value}
      onChange={onChange}
      options={options}
      className="w-full"
    />
  );
};

export default ModeSelect;
