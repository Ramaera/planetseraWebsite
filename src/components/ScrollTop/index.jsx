import { useState, useEffect } from "react";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { useSelector } from "react-redux";

const AnimatedScrollToTopButton = () => {
  const colorMe = useSelector((state) => state.colorUs.color);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      style={{ background: colorMe }}
      className={`${
        isVisible ? "block" : "hidden"
      } scaleAnimate fixed right-4 bottom-4 sm:bottom-14 p-2 cursor-pointer  rounded-xl text-white transition duration-300 ease-in-out z-50`}
      onClick={scrollToTop}>
      <ArrowUpwardIcon className="h-8 w-8" />
    </div>
  );
};

export default AnimatedScrollToTopButton;
