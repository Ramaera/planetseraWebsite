import "./BlendedSection.css";
import BuynowBtn from "../../../../components/BuynowBtn";

const BlendedSection = () => {
  return (
    <div className="container relative mt-10 md:mt-32" id="blendedSpices">
      <div className="basis-12/12 md:m-16 m-2 blendedbg">
        <img
          src="images/backgrounds/BlendedSpicesBg.webp"
          className="w-full"
          alt="masala"
        />
      </div>
      <div className="basis-12/12">
        <div className="basis-1/12"></div>
        <div className="basis-10/12">
          <p className="blended-text">
            Craving for restaurant-like food at home? Bring home the
            multi-cuisine spice blends by PlanetsEra to get amazing
            restaurant-like food at home along with the ease of hassle free
            cooking.
          </p>
        </div>
        <div className="basis-1/12"></div>
      </div>

      <div class="container grid grid-cols-3 gap-2 mx-auto blended">
        <div class="w-full rounded spaceBlendedImg blendedImgBox">
          <img
            alt="masala"
            loading="lazy"
            src="images/backgrounds/blended-1.webp"
            className="mx-auto blendedImg"
          />
          <h2 className="blended-text2">Garam Masala</h2>

          <div className="mt-[-10px] md:mt-5"></div>
          <BuynowBtn
            link={`/productDetailsInfo/7`}
            text={"Buy Now"}
            sectionClass="responsiveBtn"
          />
        </div>
        {/* </Link> */}
        <div class="w-full rounded spaceBlendedImg blendedImgBox">
          <div className="flex items-center justify-center">
            <div className="absolute z-10  m-2 justify-items-center flex items-center">
              <img
                className="relative w-[100px] md:w-72"
                loading="lazy"
                src="images/backgrounds/comingsoon.webp"
                alt="coming soon..."
              />
            </div>
            <div className="flex items-center justify-center opacity-50">
              <img
                loading="lazy"
                src="images/backgrounds/blended-2.webp"
                className="mx-auto blendedImg"
                alt="masala"
              />
            </div>
          </div>
          <h2 className="delight-text2">Jaljeera Masala</h2>

          <div className="mt-[-10px] md:mt-5"></div>

          <BuynowBtn
            text={"Coming soon"}
            link=""
            opacity={0.5}
            size={"15px"}
            sectionClass="responsiveBtn"
          />
        </div>

        <div class="w-full rounded spaceBlendedImg blendedImgBox z-10">
          <img
            loading="lazy"
            src="images/backgrounds/blended-3.webp"
            className="mx-auto blendedImg"
            alt="masala"
          />
          <h2 className="delight-text2">Meat Masala</h2>

          <div className="mt-[-10px] md:mt-5"></div>
          <BuynowBtn
            link={`/productDetailsInfo/5`}
            text={"Buy Now"}
            sectionClass="responsiveBtn"
          />
        </div>

        <div class="w-full rounded mt-10 spaceBlendedImg blendedImgBox">
          <img
            alt="masala"
            loading="lazy"
            src="images/backgrounds/blended-4.webp"
            className="mx-auto  blendedImg"
          />
          <h2 className="delight-text2">Chat Masala</h2>

          <div className="mt-[-10px] md:mt-5"></div>
          <BuynowBtn
            link={`/productDetailsInfo/3`}
            text={"Buy Now"}
            sectionClass="responsiveBtn"
          />
        </div>

        <div class="w-full rounded mt-10 blendedImgBox">
          <img
            alt="masala"
            loading="lazy"
            src="images/backgrounds/blended-5.webp"
            className="mx-auto  blendedImg"
          />
          <h2 className="delight-text2">Sabji Masala</h2>

          <div className="mt-[-10px] md:mt-5"></div>
          <BuynowBtn
            link={`/productDetailsInfo/2`}
            text={"Buy Now"}
            sectionClass="responsiveBtn"
          />
        </div>
      </div>

      <div className="basis-12/12 absolute blendedMenuImg w-48 md:w-[52vh] mt-[-70vh] 2xl:mt-[-55vh] 2xl:w-96">
        <img
          alt="masala"
          loading="lazy"
          src="images/backgrounds/menuBg.webp"
          className=" "
        />
      </div>
    </div>
  );
};

export default BlendedSection;
