import "./AboutBanner.css";

const AboutBannerSection = () => {
  return (
    <>
      <div className="w-full max-w-full box-border m-auto h-auto relative lg:flex md:flex sm:block mt-20 md:mt-0">
        <img
          alt="masala"
          src="images/backgrounds/aboutBannerAbsolute.webp"
          className="imageAb 2xl:left-[36%]"
        />
        <div className="basis-1/12"></div>
        <div className="container aboutbanner flex justify-center items-center maOne relative 2xl:h-[80vh]">
          <div className="basis-12/12">
            <h1 className="aboutbanner-text">
              Know the journey behind
              <br /> the establishment of PlanetsEra Spices
            </h1>
            <div>
              <img
                src="/images/backgrounds/rect.webp"
                className="spiceRect"
                alt="masala"
              />
            </div>
          </div>
        </div>

        <div className="basis-1/12"></div>
      </div>
    </>
  );
};

export default AboutBannerSection;
