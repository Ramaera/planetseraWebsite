import "./QualitySection.css";

const QualitySection = () => {
  return (
    <>
      <div className="w-full max-w-full box-border m-auto h-auto flex mt-0 sm:mt-[4rem] px-6 md:px-16 2xl:px-60 mb-20">
        <div className="basis-12/12 lg:flex md:flex sm:block">
          <div className="basis-4/12 ">
            <div className="basis-4/12  photo10">
              <img
                alt="bg"
                src="images/backgrounds/quality-1.webp"
                className="absolute quality-img-1"
              />
            </div>
            <div className="basis-4/12  photo10">
              <img
                alt="Mr. Devender Mishra"
                title="Our Founder, Mr. Devender Mishra addressing the press"
                src="images/backgrounds/quality-2.webp"
                className="quality-img"
              />
              <h3 className="relative sm:left-[100px] top-[5vh] sm:top-[2vh] text-center">
                Our Founder, Mr. Devender Mishra addressing the press at the
                launch of PlanetsEra Spices
              </h3>
            </div>
          </div>

          <div className="basis-2/12"></div>
          <div className="basis-6/12  self-center h-full mt-16 sm:my-0">
            <p className="management-text1 ">
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
            <img
              alt="bg"
              src="images/backgrounds/founderAb.webp"
              className="absolute qualityEmg z-[-10]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default QualitySection;
