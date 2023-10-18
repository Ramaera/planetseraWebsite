import "@/public/styles/advanceSection.css";

import { useSelector } from "react-redux";

const AdvanceSection1 = () => {
  const colorMe = useSelector((state) => state.colorUs.color);

  return (
    <>
      <section class="relative px-6 md:px-16 mt-10" id="QualityControl">
        <div class="basis-12/12 lg:flex md:flex sm:block 2xl:px-16">
          <div class="photo w-full">
            <img
              alt="Technology behind spices"
              title="The Advanced Technology Behind PlanetsEra Spices"
              class="max-w-full rounded-lg shadow-lg sm:h-[550px] 2xl:w-[full]"
              src="images/backgrounds/Develop-1.webp"
            />
          </div>
          <div className="basis-1/12"></div>
          <div class="">
            {/* <div class="text-pink-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-pink-300 mt-8"></div> */}
            <h3
              className="advanceHeading mb-5 font-medium"
              style={{
                backgroundImage: `linear-gradient(to right, ${colorMe}, ${
                  colorMe + "80"
                })`,
              }}>
              Experience the Flavours of Precision: The Advanced Technology
              Behind PlanetsEra Spices
              <div
                className="plan-line 2xl:hidden"
                style={{
                  backgroundImage: `linear-gradient(to right, ${colorMe}, ${
                    colorMe + "80"
                  })`,
                }}></div>
            </h3>

            <p class="advanceText">
              At PlanetsEra Spices, we utilise the most advanced technology for
              the manufacturing of our spices.We ensure complete precision in
              the development of our spices and preserve them efficiently to
              retain their authenticity and pungency for a longer
              period.Experience the difference that advanced technology can make
              in your spice collection. Shop our range of high-quality spices
              today.
            </p>
            <ul className="list-none ">
              <li class="py-2">
                <div className="basis-12/12 proFlex">
                  <div className="w-[20%] sm:w-[10%] mt-4 sm:mt-0">
                    <img
                      src="images/backgrounds/advance-1.avif"
                      alt="Quality Spices"
                      title="Exceptional Quality Spices"
                    />
                  </div>
                  <div className="w-full relative">
                    <h4
                      className="advanceHeading"
                      style={{
                        backgroundImage: `linear-gradient(to right, ${colorMe}, ${
                          colorMe + "80"
                        })`,
                      }}>
                      Exceptional Quality Spices
                    </h4>
                    <div
                      className="except-line"
                      style={{
                        backgroundImage: `linear-gradient(to right, ${colorMe}, ${
                          colorMe + "80"
                        })`,
                      }}></div>
                    <p className="advanceText">
                      We are committed to delivering exceptional quality spices
                      through our focus on precision manufacturing techniques
                      and careful sourcing of high-quality raw materials
                    </p>
                  </div>
                </div>
              </li>
              <li className="py-2">
                <div className="basis-12/12 proFlex">
                  <div className="w-[20%] sm:w-[10%] mt-4 sm:mt-0">
                    <img
                      src="images/backgrounds/advance-2.avif"
                      alt="Developed by Experts"
                      title="Expertly crafted premium spices for elevated culinary experiences"
                    />
                  </div>
                  <div className="w-full relative">
                    <h4
                      className="advanceHeading"
                      style={{
                        backgroundImage: `linear-gradient(to right, ${colorMe}, ${
                          colorMe + "80"
                        })`,
                      }}>
                      Developed by Experts
                    </h4>
                    <div
                      className="develop-line"
                      style={{
                        backgroundImage: `linear-gradient(to right, ${colorMe}, ${
                          colorMe + "80"
                        })`,
                      }}></div>
                    <p className="advanceText">
                      Expertly crafted premium spices for elevated culinary
                      experiences, made from only the finest organic ingredients
                      by our artisanal team.
                    </p>
                  </div>
                </div>
              </li>
              <li class="py-2">
                <div class="basis-12/12 proFlex">
                  <div className="w-[20%] sm:w-[10%] mt-4 sm:mt-0scale-75">
                    <img
                      src="images/backgrounds/advance-3.avif"
                      alt="Pure and Balanced Organic"
                      title="Our organic spice blends are crafted with care and sustainability"
                    />
                  </div>
                  <div className="w-full relative">
                    <h4
                      className="advanceHeading"
                      style={{
                        backgroundImage: `linear-gradient(to right, ${colorMe}, ${
                          colorMe + "80"
                        })`,
                      }}>
                      Pure and Balanced Organic Blends
                    </h4>
                    <div
                      className="pure-line"
                      style={{
                        backgroundImage: `linear-gradient(to right, ${colorMe}, ${
                          colorMe + "80"
                        })`,
                      }}></div>
                    <p className="advanceText">
                      Our organic spice blends are crafted with care and
                      sustainability. We use only the finest, organically grown
                      ingredients to create perfectly balanced blends for a pure
                      and natural taste.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default AdvanceSection1;
