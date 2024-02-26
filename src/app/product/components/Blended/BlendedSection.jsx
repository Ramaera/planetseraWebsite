import "@/public/styles/blendedSection.css";
import BuynowBtn from "@/components/BuynowBtn";
import Link from "next/link";
import { useQuery } from "@apollo/client";
import { Get_All_Products } from "@/apollo/queries";

const BlendedSection = () => {
  const allProducts = useQuery(Get_All_Products);
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

      <div className="basis-12/12 flex flex-wrap ml-4 groundedContainer">
        {allProducts?.data?.allProducts.map((items) => {
          if (
            items?.type.includes("blended") &&
            !items.category.includes("ComingSoon")
          ) {
            return (
              <div className="basis-4/12 mb-10 groundedImg flex flex-col items-center">
                <Link href={`/product/${items.productUrl}`}>
                  <img
                    loading="lazy"
                    src={`https://planetseraapi.planetsera.com/get-images/${items?.productImageUrl}`}
                    alt="Planetsera Spices"
                    title={items.title}
                    className="sm:w-64 2xl:w-80"
                  />
                  <h2 className="text-center font-[Montserrat] text-xl	2xl:text-2xl mt-2">
                    {items.title}
                  </h2>
                </Link>
                <BuynowBtn
                  width={"130px"}
                  height={"40px"}
                  link={`/product/${items.productUrl}`}
                  text={"Buy Now"}
                  sectionClass="responsiveBtn"
                />
              </div>
            );
          }
        })}
      </div>

      <div className="basis-12/12 hidden sm:block absolute  blendedMenuImg w-48 md:w-[52vh] mt-[-65vh] 2xl:mt-[-55vh] 2xl:w-96">
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
