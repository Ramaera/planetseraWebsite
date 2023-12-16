import { useSelector } from "react-redux";
import Link from "next/link";
import "@/public/styles/buyNowBtnStyle.css";

const Index = ({
  link,
  text,
  bg,
  size,
  opacity,
  disabled,
  width,
  height,
  padding,
  sectionClass,
  onClick,
}) => {
  const colorMe = useSelector((state) => state.colorUs.color);

  const handleClick = () => {
    // if (link && !disabled) {
    //   window.scrollTo({ top: 0, behavior: "smooth" });
    // }
  };

  return (
    <div
      className={`mt-2 sm:mt-4 mb-2 flex flex-wrap gap-4 text-center justify-center ${sectionClass}`}
    >
      <Link
        href={link}
        onClick={onClick}
        className={`buynow-button py-4 hover:scale-105 ${
          disabled ? "disabled" : ""
        }`}
        style={{
          boxShadow: `2px 4px 5px -2px ${colorMe}`,
          background:
            bg ||
            `linear-gradient(72.44deg, ${colorMe} 0%, ${colorMe + "85"} 100%)`,
          cursor: disabled ? "not-allowed" : "pointer",
          zIndex: "19",
          fontWeight: 400,
          fontSize: size || "18px",
          width: width || " 148px",
          height: height || "48px",
          padding: padding || "22px",
          opacity: opacity,
        }}
        disabled={disabled}
      >
        {text}
      </Link>
    </div>
  );
};

export default Index;
