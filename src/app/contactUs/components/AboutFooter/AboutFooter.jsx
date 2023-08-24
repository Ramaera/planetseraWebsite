import "./AboutFooter.css";
import FooterEnd from "./AboutFooterEnd";
import AboutIcons from "./AboutIcons";
import AboutSidebar from "./AboutSidebar";

const AboutFooter = () => {
  return (
    <>
      <div className="main-container lg:w-full mt-4 imaged1 bg-cover">
        <div className="footer flex bg-center">
          <div className="basis-9/12 flex items-center">
            <div className="basis-12/12 flex">
              <div className="basis-1/12"></div>
              <div className="basis-10/12">
                <h2 class="diverse-text1 text-center p-8 md:p-2s ">
                  Make every meal memorable with PlanetsEra spices
                </h2>
              </div>
              <div className="basis-1/12"></div>
            </div>
          </div>
          <div className="basis-3/12">
            <div className="lg:basis-3/12 social lg:h-48 bg-[#1E1E1E] flex flex-col justify-center items-center">
              <p className="social-text">Social Media</p>
              <AboutIcons />
            </div>
            <AboutSidebar />
          </div>
        </div>
        <></>
      </div>
      <FooterEnd />
    </>
  );
};

export default AboutFooter;
