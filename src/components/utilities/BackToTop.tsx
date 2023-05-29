import { useState } from "react";
import { BsFillArrowUpSquareFill } from "react-icons/bs";
import { Button, ButtonType } from "../ui/Button";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  const MIN_SCROLL_AMOUNT = 150;

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

  const dynamicStyles = visible ? "fixed bottom-4 right-3 z-50" : "hidden";

  return (
    <div className={dynamicStyles} onClick={scrollToTop}>
      <Button type={ButtonType.Link}>
        <BsFillArrowUpSquareFill className="text-5xl lg:text-7xl opacity-40 text-gray-200 hover:text-white hover:opacity-100" />
      </Button>
    </div>
  );
};

export default BackToTop;
