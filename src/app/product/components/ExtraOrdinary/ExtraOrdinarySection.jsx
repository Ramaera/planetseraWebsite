import "./ExtraOrdinarySection.css";

const ExtraOrdinarySection = () => {
  return (
    <div className="container mt-60 px-6 ordinaryConatiner">
      <div className="basis-12/12 flex justify-center w-full">
        <div className="">
          <div className="basis-6/12 relative flex justify-center">
            <div className="basis-12/12 photo">
              <img
                alt="masala"
                loading="lazy"
                src="images/backgrounds/ordinary-1.webp"
                className=""
              />
            </div>
            <div className="basis-12/12 ordinary-alignment">
              <h2 class="ordinary-text md:tracking-[6px] md:mt-[-3vh]">
                Guaranteed Freshness
              </h2>
            </div>
          </div>
          <div className="basis-6/12 relative flex justify-center">
            <div className="basis-12/12 photo">
              <img
                alt="masala"
                loading="lazy"
                src="images/backgrounds/ordinary-2.webp"
                className=""
              />
            </div>
            <div className="basis-12/12 ordinary-alignment2">
              <h2 class="ordinary-text md:tracking-[6px]">Premium Quality</h2>
            </div>
          </div>
        </div>
        <div className="">
          <div className="basis-6/12 relative flex justify-center">
            <div className="basis-12/12 ordinary-second photo">
              <img
                alt="masala"
                loading="lazy"
                src="images/backgrounds/ordinary-3.webp"
                className=""
              />
            </div>
            <div className="basis-12/12 ordinary-alignment2 ">
              <h2 class="ordinary-text md:tracking-[6px] md:mt-[-5vh]">
                Hand Selected and Pure
              </h2>
            </div>
          </div>
          <div className="basis-6/12 relative flex justify-center">
            <div className="basis-12/12 ordinary-three photo">
              <img
                alt="masala"
                loading="lazy"
                src="images/backgrounds/ordinary-4.webp"
                className="ordinary-img4"
              />
            </div>
            <div className="basis-12/12 ordinary-alignment4">
              <h2 class="ordinary-text md:tracking-[6px] md:mt-[-10vh]">
                Organically and Handpicked
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExtraOrdinarySection;
