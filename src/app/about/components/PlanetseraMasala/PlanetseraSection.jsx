import "./PlanetseraSection.css";
import PlanetseraIconOne from "./PlanetseraIconOne";
import PlanetseraIconTwo from "./PlanetseraIconTwo";
import PlanetseraIconThree from "./PlanetseraIconThree";
import PlanetseraIconFour from "./PlanetseraIconFour";

const PlanetseraSection = () => {
  return (
    <>
      <div className="container mt-10 relative">
        <div className="basis-12/12">
          <img
            src="images/backgrounds/planetseraMasala.webp"
            className="w-full"
          />
          <PlanetseraIconOne />
          <PlanetseraIconTwo />
          <PlanetseraIconThree />
          <PlanetseraIconFour />
        </div>
      </div>
    </>
  );
};

export default PlanetseraSection;
