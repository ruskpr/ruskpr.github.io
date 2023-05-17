import { useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import { Button, ButtonType, ButtonSize } from "../ui/Button";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  const MIN_SCROLL_AMOUNT = 10;

  const toggleVisible = () => {
    const current_scroll_val = document.documentElement.scrollTop;
    if (current_scroll_val > MIN_SCROLL_AMOUNT) {
      setVisible(true);
    } else if (current_scroll_val <= MIN_SCROLL_AMOUNT) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
		in place of 'smooth' */
    });
  };

  window.addEventListener("scroll", toggleVisible);

  const dynamicStyles = visible ? "fixed bottom-3 right-3 z-50" : "hidden";

  return (
    <div className={dynamicStyles} onClick={scrollToTop}>
      <Button type={ButtonType.Link}>
        <FaArrowCircleUp className="text-3xl"/>
      </Button>
    </div>
  );
};

export default BackToTop;
