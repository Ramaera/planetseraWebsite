import "./BlendedSection.css";
import BuynowBtn from "../../../../components/BuynowBtn";
import Link from "next/link";

const BlendedSection = () => {
  return (
    <div
      className="w-full max-w-full box-border m-auto h-auto relative mt-10 md:mt-10"
      id="blendedSpices">
      <div className="basis-12/12 md:mx-16 md:my-4 m-2">
        <img
          src="images/backgrounds/BlendedSpicesBg.webp"
          className="w-full"
          alt="Blended spices"
          title="PlanetsEra blended spices"
        />
      </div>
      <div className="basis-12/12 my-2">
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
        <div class="w-full rounded blendedImgBox">
          <Link href={`/products/garam-masala`}>
            <img
              alt="PlanetsEra Garam Masala"
              title="Garam Masala"
              loading="lazy"
              src="images/allProductsImg/GaramMasala.webp"
              className="mx-auto sm:w-64 2xl:w-80"
            />
            <h2 className="text-center font-[Montserrat] text-xl 2xl:text-2xl mt-1">
              Garam Masala
            </h2>
          </Link>

          <BuynowBtn
            width={"130px"}
            height={"40px"}
            link={`/products/garam-masala`}
            text={"Buy Now"}
            sectionClass="responsiveBtn"
          />
        </div>

        <div class="w-full rounded  blendedImgBox">
          <Link href={`/products/sabji-masala`}>
            <img
              src="images/allProductsImg/SabjiMasala.webp"
              alt="PlanetsEra Sabji Masala"
              title="Sabji Masala"
              loading="lazy"
              className="mx-auto sm:w-64 2xl:w-80"
            />
            <h2 className="text-center font-[Montserrat] text-xl 2xl:text-2xl mt-1">
              Sabji Masala
            </h2>
          </Link>

          <BuynowBtn
            width={"130px"}
            height={"40px"}
            link={`/products/sabji-masala`}
            text={"Buy Now"}
            sectionClass="responsiveBtn"
          />
        </div>

        <div class="w-full rounded blendedImgBox z-10">
          <Link href={`/products/meat-masala`}>
            <img
              loading="lazy"
              src="images/allProductsImg/MeatMasala.webp"
              className="mx-auto sm:w-64 2xl:w-80"
              alt="PlanetsEra Meat masala"
              title="Meat Masala"
            />
            <h2 className="text-center font-[Montserrat] text-xl 2xl:text-2xl mt-1">
              Meat Masala
            </h2>
          </Link>

          <BuynowBtn
            width={"130px"}
            height={"40px"}
            link={`/products/meat-masala`}
            text={"Buy Now"}
            sectionClass="responsiveBtn"
          />
        </div>

        <div class="w-full rounded mt-10 blendedImgBox">
          <Link href={`/products/chat-masala`}>
            <img
              src="images/allProductsImg/ChatMasala.webp"
              alt="PlanetsEra Chat masala"
              title="Chat Masala"
              loading="lazy"
              className="mx-auto sm:w-64 2xl:w-80"
            />
            <h2 className="text-center font-[Montserrat] text-xl 2xl:text-2xl mt-1">
              Chat Masala
            </h2>
          </Link>

          <BuynowBtn
            width={"130px"}
            height={"40px"}
            link={`/products/chat-masala`}
            text={"Buy Now"}
            sectionClass="responsiveBtn"
          />
        </div>

        <div class="w-full rounded mt-10 blendedImgBox">
          <div className="relative flex items-center justify-center">
            {/* <div className="top-0 absolute z-10 justify-items-center flex items-center">
              <img
                className="relative sm:w-64 sm:px-10"
                loading="lazy"
                src="images/backgrounds/comingsoon.png"
                alt="coming soon..."
              />
            </div> */}
            <div className="flex items-center justify-center ">
              <img
                loading="lazy"
                src="images/allProductsImg/PaneerMasala.webp"
                className="mx-auto sm:w-64 2xl:w-80"
                alt="PlanetsEra Paneer Masala"
                title="Paneer Masala"
              />
            </div>
          </div>
          <h2 className="text-center font-[Montserrat] text-xl 2xl:text-2xl mt-1">
            Paneer Masala
          </h2>

          <BuynowBtn
            height={"40px"}
            text={"Coming soon"}
            link=""
            opacity={0.5}
            size={"15px"}
            sectionClass="responsiveBtn"
          />
        </div>
      </div>

      <div className="basis-12/12 absolute blendedMenuImg w-48 md:w-[52vh] mt-[-65vh] 2xl:mt-[-55vh] 2xl:w-96">
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
