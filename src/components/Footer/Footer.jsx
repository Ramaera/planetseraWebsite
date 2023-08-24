import "./footer.css";
import Icons from "./Icons";
import SideBar from "./SideBar";
import FooterEnd from "./FooterEnd";

const Footer = ({ page }) => {
  const Footerbg = "/images/backgrounds/footerbg.webp";
  const Footerbg1 = "/images/backgrounds/footerbg.webp";

  function checktext(id) {
    if (id === "contactUs") {
      return "Make every meal memorable with PlanetsEra spices";
    } else {
      return "Authentic taste of culture with PlanetsEra's spices";
    }
  }

  function checkpage(id) {
    if (id === "contactUs") {
      return Footerbg;
    } else {
      return Footerbg1;
    }
  }

  return (
    <>
      <div
        style={{ backgroundImage: `url(${checkpage(page)})` }}
        className="main-container lg:w-full mt-8 imaged bg-cover">
        <div className="footer flex bg-center bg-cover">
          <div className="basis-9/12 flex items-center">
            <div className="basis-12/12 flex">
              <div className="basis-1/12"></div>
              <div className="basis-10/12">
                <h2 className="diverse-text text-center p-8 md:p-2s ">
                  {checktext(page)}
                </h2>
              </div>
              <div className="basis-1/12"></div>
            </div>
          </div>
          <div className="basis-3/12">
            <div className="lg:basis-3/12 social lg:h-48 bg-[#1E1E1E] flex flex-col justify-center items-center">
              <p className="social-text">Social Media</p>
              <Icons />
            </div>
            <SideBar />
          </div>
        </div>
        <></>
      </div>
      <FooterEnd />
    </>
  );
};

export default Footer;
