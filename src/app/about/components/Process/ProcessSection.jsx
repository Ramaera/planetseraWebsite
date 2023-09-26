import "./Process.css";
import ProcessSection1 from "./ProcessSection1";
import { useSelector } from "react-redux";

const ProcessSection = () => {
  const colorMe = useSelector((state) => state.colorUs.color);
  return (
    <>
      <div className="w-full max-w-full box-border m-auto h-auto px-6 mt-2 2xl:px-16">
        <div className="basis-12/12 flex flex-col relative items-center">
          <h2
            className="processHeading mb-5"
            style={{
              backgroundImage: `linear-gradient(to right, ${colorMe}, ${
                colorMe + "80"
              })`,
            }}>
            MANUFACTURING PROCESSES
            <div
              className="md:w-[190px] md:h-[2px] md:relative"
              style={{
                backgroundImage: `linear-gradient(to right, ${colorMe}, ${
                  colorMe + "80"
                })`,
              }}></div>
          </h2>

          <p className="processText">
            At PlanetsEra Spices, we use the most advanced manufacturing
            technology and adhere to strict quality standards to ensure that our
            spices are of the highest quality. Our skilled team of experts
            carefully selects and blends the finest ingredients, which are then
            carefully packaged to preserve their authentic flavor and aroma.
          </p>
        </div>
        <ProcessSection1 />
      </div>
    </>
  );
};

export default ProcessSection;
