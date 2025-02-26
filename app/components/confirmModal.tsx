import { Modal } from "antd";

interface ConfirmModalProps {
  open: boolean;
  index: number;
  onCancel: (index: number) => void;
  onOk: (index: number) => void;
}

const ConfirmModal: React.FC<ConfirmModalProps> = ({
  open,
  index,
  onCancel,
  onOk,
}) => {
  return (
    <Modal
      open={open}
      centered
      onCancel={() => onCancel(index)}
      onOk={() => onOk(index)}
    >
      Are you sure to delete?
    </Modal>
  );
};

export default ConfirmModal;
