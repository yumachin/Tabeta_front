import { Settings } from "react-slick";

export const SliderSettings = (setButtonState: (index: number) => void): Settings => ({
  dots: false,
  infinite: false,
  speed: 500,
  arrows: false,
  afterChange: (current: number) => {
    if (setButtonState) {
      setButtonState(current === 0 ? 0 : 1);
    }
  }
});
