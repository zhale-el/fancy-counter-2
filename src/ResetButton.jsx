import { ResetIcon } from "@radix-ui/react-icons";

const ResetButton = ({ setCount }) => {
  const handleCLick = () => {
    setCount(0);
  };

  return (
    <button onClick={handleCLick} className="reset-btn">
      <ResetIcon className="reset-btn-icon" />
    </button>
  );
};

export default ResetButton;
