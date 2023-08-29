import { useSelector } from "react-redux";
const ProcessSection1 = () => {
  const colorMe = useSelector((state) => state.colorUs.color);

  return (
    <>
      <div className="w-full max-w-full box-border m-auto h-auto mt-20">
        <div className="basis-12/12 lg:flex md:flex sm:block justify-center">
          <div className="basis-5/12 photo1  ">
            <div className="2xl:flex justify-center">
              <img src="images/backgrounds/process-2.webp" />
            </div>

            <div className="2xl:flex justify-center">
              <figcaption className="fig-text 2xl:w-[34%] ">
                Packaging in Airtight zipper bags to retain the flavor of spices
              </figcaption>
            </div>
          </div>

          <div className="basis-1/12"></div>

          <div className="basis-5/12 photo1">
            <img src="images/backgrounds/process-1.webp" />
            <figcaption className="fig-text 2xl:w-4/12">
              Lab testing at PlanetsEra Laboratory to ensure the quality
              standards
            </figcaption>
          </div>
        </div>

        <div className="w-full max-w-full box-border m-auto h-auto xl:mt-40">
          <div className="basis-12/12 md:px-8">
            <div className="w-full md:mb-6 md:mt-6 relative ">
              <h2
                className="planetseraHeading"
                style={{
                  backgroundImage: `linear-gradient(to right, ${colorMe}, ${
                    colorMe + "80"
                  })`,
                }}>
                Organic sourcing:
              </h2>
              <div
                className="organic-line"
                style={{
                  backgroundImage: `linear-gradient(to right, ${colorMe}, ${
                    colorMe + "80"
                  })`,
                }}></div>
              <p className="planetseraText">
                We carefully select the finest, organically grown spice
                ingredients from trusted farmers.The raw spices are cleaned and
                inspected to ensure purity and quality.
              </p>
            </div>
            <div className="w-full md:mb-6 relative">
              <h2
                className="planetseraHeading"
                style={{
                  backgroundImage: `linear-gradient(to right, ${colorMe}, ${
                    colorMe + "80"
                  })`,
                }}>
                Expert blending:
              </h2>
              <div
                className="expert-line"
                style={{
                  backgroundImage: `linear-gradient(to right, ${colorMe}, ${
                    colorMe + "80"
                  })`,
                }}></div>
              <p className="planetseraText">
                Our team of experts carefully blends the spices to achieve the
                perfect balance of flavors and aromas.
              </p>
            </div>
            <div className="w-full md:mb-6 relative">
              <h2
                className="planetseraHeading"
                style={{
                  backgroundImage: `linear-gradient(to right, ${colorMe}, ${
                    colorMe + "80"
                  })`,
                }}>
                Airtight packaging:
              </h2>
              <div
                className="airtight-line"
                style={{
                  backgroundImage: `linear-gradient(to right, ${colorMe}, ${
                    colorMe + "80"
                  })`,
                }}></div>
              <p className="planetseraText">
                The spices are packed in airtight zipper bags to retain their
                freshness and flavour for an extended shelf life. This process
                ensures that every PlanetsEra spice is a pure, natural, and
                authentic addition to any dish.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProcessSection1;
