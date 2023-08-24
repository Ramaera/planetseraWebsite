import "./TechnologyPeopleSection.css";

const TechnologyPeopleSection = () => {
  return (
    <>
      <div className="container rectLine"></div>
      <div className="w-full max-w-full box-border m-auto h-auto quality-container px-6 flex flex-col md:px-16">
        <img
          alt="masala"
          src="images/backgrounds/founderAb2.webp"
          className="absolute founderAlig"
        />

        <div className="basis-12/12 lg:flex md:flex sm:block">
          <div className="basis-6/12 self-center relative technOne">
            <p className="technology-text1">
              At PlanetsEra Spices, we are dedicated to not only delivering the
              best quality products at the most reasonable prices in the comfort
              of your homes but also establishing financial stability through
              our numerous investment policies. Whenever you buy or sell any
              PlanetsEra product, you become eligible to earn a percentage in
              the share of investment, making you a part of our strong and
              trusted PlanetsEra family.
              <br />
              <br />
              We take pride in being a company that cares for our very own
              PlanetsEra family, which includes our buyers, sellers, and
              producers. Our goal is to strengthen our family from every aspect,
              making it financially strong and a source of love and warmth.
              Families are created by love and warmth, and we believe that "a
              family that eats together, stays together." That is why we take
              care of your well-being and financial stability as a step towards
              making everybody financially strong.
            </p>
          </div>
          <div className="basis-2/12"></div>

          <div className="basis-4/12 relative">
            <div className="basis-4/12 relative photo10">
              <img
                alt="masala"
                src="images/backgrounds/technologyplanet-1.webp"
                className="absolute technologyPeople-img-1"
              />
            </div>
            <div className="basis-4/12 relative photo10">
              <img
                alt="masala"
                src="images/backgrounds/technologyplanet-2.webp"
                className="absolute technologyPeople-img"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container flex">
        <div className="basis-12/12 w-full lg:flex md:flex sm:block relative founalign">
          <div className="basis-7/12"></div>
          <div className="basis-4/12">
            <h2 className="technology-heading mb-5 md:pr-10 2xl:pr-0 md:mt-[-20px] 2xl:mt-16 2xl:w-11/12">
              Our Founder,Mr.Devender Mishra and members at the launch of
              Planetsera Spices
            </h2>
            <div class="technology-line"></div>
          </div>
        </div>
      </div>
      <div className="w-full max-w-full box-border m-auto h-auto flex tasAlign px-6 md:px-16">
        <div className="basis-12/12 flex ">
          <div className="basis-12/12 flex">
            <p className="execute-text">
              Innovation and excellence are our guiding principles, and the
              execution of these in technology is helping us to carry out
              various policies that contribute to the upliftment of society for
              a better tomorrow. Our journey has just begun, and we look forward
              to continuing to provide you with unmatched taste and exceptional
              benefits that you can savor for a lifetime.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TechnologyPeopleSection;
