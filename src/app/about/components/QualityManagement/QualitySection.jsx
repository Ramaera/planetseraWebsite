import "./QualitySection.css";

const QualitySection = () => {
  return (
    <>
      <div className="w-full max-w-full box-border m-auto h-auto quality-container px-6 mt-20 md:px-16">
        <img
          alt="bg"
          src="images/backgrounds/founderAb.webp"
          className="absolute qualityEmg z-[-10]"
        />
        <div className="basis-12/12 lg:flex md:flex sm:block">
          <div className="basis-4/12 relative">
            <div className="basis-4/12 relative photo10">
              <img
                alt="bg"
                src="images/backgrounds/quality-1.webp"
                className="absolute quality-img-1"
              />
            </div>
            <div className="basis-4/12 relative photo10">
              <img
                alt="Mr. Devender Mishra"
                title="Our Founder, Mr. Devender Mishra addressing the press"
                src="images/backgrounds/quality-2.webp"
                className="absolute quality-img"
              />
            </div>
          </div>

          <div className="basis-2/12 sm:basis-3/12 xl:basis-2/12"></div>
          <div className="basis-6/12 sm:basis-5/12 xl:basis-6/12 self-center relative qualityOne">
            <p className="management-text1">
              Our journey has been inspired by our motive to make a mark in the
              most popular industrial sectors, providing employment to thousands
              of diligent youth striving to earn and secure their future. We
              also believe in taking care of the environment and have embarked
              on a mission to be the first company in the world to be completely
              carbon positive, waste recycling, and water conserving.
              <br />
              <br />
              As a company, we are consistent in serving you the best with due
              honesty and world-class standards. Your trust has been the main
              pillar of our phenomenal growth and has enabled us to uphold the
              core values of establishing sustainability along with excellence
              and innovation in customer services.
            </p>
          </div>
        </div>
      </div>
      <div className="container flex">
        <div className="basis-12/12 lg:flex md:flex sm:block w-full flex relative pressAlign">
          <div className="basis-2/12"></div>
          <div className="basis-4/12 relative">
            <h2 className="management-heading mb-5 md:mt-[-12rem] md:w-12/12 md:ml-4 2xl:ml-[-1.5rem] md:w-full xl:mt-[-20px]  2xl:mt-16 2xl:w-11/12 ">
              Our Founder, Mr. Devender Mishra addressing the press at the
              launch of PlanetsEra Spices
            </h2>
            <div className="quality-line"></div>
          </div>
          <div className="basis-6/12"></div>
        </div>
      </div>
    </>
  );
};

export default QualitySection;
