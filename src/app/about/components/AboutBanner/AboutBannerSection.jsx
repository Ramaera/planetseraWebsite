import "./AboutBanner.css";

const AboutBannerSection = () => {
  return (
    <>
      <div className="flex justify-center flex-col mt-14">
        <div className="w-full max-w-full box-border mx-auto h-auto flex justify-center">
          <img
            alt="bg"
            loading="lazy"
            src="images/backgrounds/aboutBannerAbsolute.webp"
            className=" "
          />
        </div>

        <div className="w-full max-w-full box-border m-auto h-auto bg-contain flex  mt-[-14%] md:mt-[-4rem] flex-wrap relative justify-center">
          <img
            src="/images/backgrounds/aboutbanner.webp"
            alt="Establishment of PlanetsEra Spices"
            title="Know the Journey behind the establishment of PlanetsEra Spices"
          />

          <div className="basis-12/12 flex justify-center items-center w-full h-full absolute">
            <h2 className="text-base text-white	text-center tracking-[4px] md:tracking-[6px] md:text-6xl md:text-left  md:leading-relaxed	md:z-10">
              Know the journey behind
              <br /> the establishment of <br />
              PlanetsEra Spices
              <img
                src="/images/backgrounds/rect.webp"
                className="hidden md:block"
                alt="masala"
              />
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutBannerSection;
