import { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { useSelector } from "react-redux";

const AnimatedScrollToTopButton = () => {
  const colorMe = useSelector((state) => state.colorUs.color);
  const [isVisible, setIsVisible] = useState(false);
  const [springProps, setSpringProps] = useSpring(() => ({
    opacity: 0,
    transform: "scale(0)",
    from: { opacity: 0, transform: "scale(0)" },
  }));

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
        setSpringProps({ opacity: 1, transform: "scale(1)" });
      } else {
        setIsVisible(false);
        setSpringProps({ opacity: 0, transform: "scale(0)" });
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [setSpringProps]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <animated.button
      className={`${
        isVisible ? "block" : "hidden"
      } fixed right-4 bottom-4 sm:bottom-14 p-2 rounded-xl text-white transition duration-300 ease-in-out z-50`}
      style={{ ...springProps, background: `${colorMe}` }}
      onClick={scrollToTop}>
      <ArrowUpwardIcon className="h-8 w-8" />
    </animated.button>
  );
};

export default AnimatedScrollToTopButton;
