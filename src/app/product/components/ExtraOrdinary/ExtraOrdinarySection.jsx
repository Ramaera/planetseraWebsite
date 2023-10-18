import "@/public/styles/extraOrdinarySection.css";

const ExtraOrdinarySection = () => {
  return (
    <div className="container px-6 ordinaryConatiner">
      <div className="basis-12/12 flex justify-center w-full">
        <div className="">
          <div className="basis-6/12 relative flex justify-center">
            <div className="basis-12/12 photo z-10">
              <img
                alt="masala"
                title="Guaranteed freshness spices"
                loading="lazy"
                src="images/backgrounds/ordinary-1.webp"
                className="2xl:w-[100vw]"
              />
            </div>

            <div className="basis-12/12 absolute flex h-full items-center text-left w-full p-14 ">
              <h2 class="ordinary-text md:tracking-[6px] w-full z-20">
                Guaranteed <br /> Freshness
              </h2>
            </div>
          </div>
          <div className="basis-6/12 relative flex justify-center">
            <div className="basis-12/12 photo z-10">
              <img
                alt="masala"
                title="Premium quality spices"
                loading="lazy"
                src="images/backgrounds/ordinary-2.webp"
                className="2xl:w-[100vw]"
              />
            </div>

            <div className="basis-12/12 absolute flex h-full items-center text-left w-full p-14">
              <h2 class="ordinary-text md:tracking-[6px] w-full z-20">
                Premium <br />
                Quality
              </h2>
            </div>
          </div>
        </div>
        <div className="">
          <div className="basis-6/12 relative flex justify-center">
            <div className="basis-12/12 ordinary-second photo z-10">
              <img
                alt="masala"
                title="Hand selected and pure"
                loading="lazy"
                src="images/backgrounds/ordinary-3.webp"
                className="2xl:w-[100vw]"
              />
            </div>
            <div className="basis-12/12 absolute flex h-full items-center text-left w-full p-14">
              <h2 class="ordinary-text md:tracking-[6px] w-full z-20 ">
                Hand Selected <br /> and Pure
              </h2>
            </div>
          </div>
          <div className="basis-6/12 relative flex justify-center">
            <div className="basis-12/12 ordinary-three photo z-10">
              <img
                alt="masala"
                title="Organically and Handpicked"
                loading="lazy"
                src="images/backgrounds/ordinary-4.webp"
                className="ordinary-img4 2xl:w-[100vw]"
              />
            </div>
            <div className="basis-12/12 absolute flex h-full items-center text-left w-full p-14">
              <h2 class="ordinary-text md:tracking-[6px] w-full z-20">
                Organically <br /> and Handpicked
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExtraOrdinarySection;
