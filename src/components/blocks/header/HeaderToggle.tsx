type HeaderToggleProps = {
  onNext?: () => void;
  onPrev?: () => void;
  pathname: string;
  buttonState: number;
  setButtonState: (state: number) => void;
};

export default function HeaderToggle(props: HeaderToggleProps) {
  const handleLeftToggleClick = () => {
    if (props.onNext && props.onPrev && props.buttonState !== undefined && props.setButtonState) {
      props.setButtonState(0);
      props.onPrev();
    }
  };

  const handleRightToggleClick = () => {
    if (props.onNext && props.onPrev && props.buttonState !== undefined && props.setButtonState) {
      props.setButtonState(1);
      props.onNext();
    }
  };

  return (
    <div className="flex items-center">
      <button
        className={`flex-1 py-3 font-medium text-center ${
          props.buttonState === 0 ? "text-orange-500" : "text-gray-500"
        }`}
        onClick={handleLeftToggleClick}
      >
        {props.pathname === "/dashboard" ? "最新" : "フォロワー"}
      </button>
      <button
        className={`flex-1 py-3 font-medium text-center ${
          props.buttonState === 1 ? "text-orange-500" : "text-gray-500"
        }`}
        onClick={handleRightToggleClick}
      >
        フォロー中
      </button>
    </div>
  );
}
