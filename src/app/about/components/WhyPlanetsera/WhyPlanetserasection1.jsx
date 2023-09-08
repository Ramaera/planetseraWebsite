import { useSelector } from "react-redux";

const WhyPlanetserasection1 = () => {
  const colorMe = useSelector((state) => state.colorUs.color);
  const LabCircleYellowTop = "/images/backgrounds/LabCircleYellowTop.webp";
  const LabCircleYellowBottom =
    "/images/backgrounds/LabCircleYellowBottom.webp";
  const LabCircleRedTop = "/images/backgrounds/LabCircleRedTop.webp";
  const LabCircleRedBottom = "/images/backgrounds/LabCircleRedBottom.webp";
  const LabCircleGreenTop = "/images/backgrounds/LabCircleGreenTop.webp";
  const LabCircleGreenBottom = "/images/backgrounds/LabCircleGreenBottom.webp";

  return (
    <>
      <div className="w-full max-w-full box-border m-auto h-auto mt-20 2xl:">
        <div className="basis-12/12 lg:flex md:flex sm:block mb-20">
          <div className="basis-1/12"></div>

          <div className="basis-4/12 self-center relative">
            <h2
              className="planetseraHeading"
              style={{
                backgroundImage: `linear-gradient(to right, ${colorMe}, ${
                  colorMe + "80"
                })`,
              }}>
              Precision milling
            </h2>
            <div
              className="precision-line"
              style={{
                backgroundImage: `linear-gradient(to right, ${colorMe}, ${
                  colorMe + "80"
                })`,
              }}></div>
            <p className="planetseraText">
              The spices are precisely milled to preserve their authenticity and
              pungency for a longer period.
            </p>
          </div>
          <div className="basis-1/12"></div>
          <div className="basis-5/12 photo2">
            <img
              alt="Precision milling"
              title="precisely milled to preserve their authenticity and pungency"
              src={
                colorMe === "#2dc83c"
                  ? LabCircleGreenTop
                  : colorMe === "#ffde39"
                  ? LabCircleYellowTop
                  : LabCircleRedTop
              }
            />
          </div>
          <div className="basis-1/12"></div>
        </div>

        <div className="basis-12/12 myfLex">
          <div className="basis-1/12"></div>

          <div className="basis-5/12 myfirst photo2">
            <img
              alt="Lab Testing"
              title="Our spices undergo rigorous lab testing"
              src={
                colorMe === "#2dc83c"
                  ? LabCircleGreenBottom
                  : colorMe === "#ffde39"
                  ? LabCircleYellowBottom
                  : LabCircleRedBottom
              }
            />
          </div>
          <div className="basis-1/12"></div>
          <div className="basis-4/12 self-center relative mysecond">
            <h2
              className="planetseraHeading"
              style={{
                backgroundImage: `linear-gradient(to right, ${colorMe}, ${
                  colorMe + "80"
                })`,
              }}>
              Lab Testing
            </h2>
            <div
              className="lab-line"
              style={{
                backgroundImage: `linear-gradient(to right, ${colorMe}, ${
                  colorMe + "80"
                })`,
              }}></div>
            <p className="planetseraText">
              Our spices undergo rigorous lab testing to ensure their safety,
              quality, and compliance with regulatory standards.
            </p>
          </div>

          <div className="basis-1/12 md:hidden"></div>
        </div>
      </div>
    </>
  );
};

export default WhyPlanetserasection1;
