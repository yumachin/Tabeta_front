type HeaderToggleProps = {
  pathname: string;
  buttonState: number;
  setButtonState: (state: number) => void;
};

export default function HeaderToggle(props: HeaderToggleProps) {
  return (
    <div className="flex items-center">
      <button
        className={`flex-1 py-3 font-medium text-center ${
          props.buttonState === 0 ? "text-orange-500" : "text-gray-500"
        }`}
        onClick={() => props.setButtonState(0)}
      >
        {props.pathname === "/dashboard" ? "最新" : "フォロワー"}
      </button>
      <button
        className={`flex-1 py-3 font-medium text-center ${
          props.buttonState === 1 ? "text-orange-500" : "text-gray-500"
        }`}
        onClick={() => props.setButtonState(1)}
      >
        フォロー中
      </button>
    </div>
  );
}
