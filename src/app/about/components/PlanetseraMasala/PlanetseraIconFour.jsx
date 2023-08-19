import { useSelector } from "react-redux";

const PlanetseraIconFour = () => {
  const colorMe = useSelector((state) => state.colorUs.color);
  const planetseraIdeal = "/images/backgrounds/planetseraIdealRed.webp";
  const planetseraIdeal2 = "/images/backgrounds/planetseraIdealYellow.webp";
  const planetseraIdeal3 = "/images/backgrounds/planetseraIdealGreen.webp";

  return (
    <div className="planetseraIcon-4">
      <div class="group flex relative">
        <span>
          <img
            src={
              colorMe === "#ff4f4f"
                ? planetseraIdeal
                : colorMe === "#ffde39"
                ? planetseraIdeal2
                : planetseraIdeal3
            }
          />{" "}
        </span>
        <div class="tootip-3 group-hover:opacity-100 transition-opacity bg-white-800 px-1 text-sm text-gray-100 rounded-md absolute left-1/2 opacity-0 m-4 mx-auto">
          <div className="w-full flex">
            <img
              src="images/backgrounds/three3.webp"
              style={{ width: "100px" }}
            />
            <h1 className="tootip-text">Sharp and Savoury</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanetseraIconFour;
