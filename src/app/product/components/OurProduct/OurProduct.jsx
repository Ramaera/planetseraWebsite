import "@/public/styles/ourProduct.css";
import Our from "./OurProductData";
import BuynowBtn from "@/components/BuynowBtn";
import Link from "next/link";
import { useQuery } from "@apollo/client";
import { Get_All_Products } from "@/apollo/queries";

const OurProduct = () => {
  const allProducts = useQuery(Get_All_Products);

  return (
    <div
      className="w-full max-w-full box-border m-auto h-auto relative mt-10 md:mt-20 containerBorder"
      id="groundSpices">
      <div className="basis-12/12 absolute ourbg"></div>
      <div className=" groundbg">
        <img
          src="images/backgrounds/GroundSpicesBg.webp"
          alt="Ground Spices"
          title="PlanetsEra Ground Spices"
          className="w-full"
        />
      </div>
      <div className="basis-12/12 flex">
        <div className="basis-11/12 m-auto tracking-[5px]">
          <p className="grounded-text">
            Every spice carries a story and expresses the cultural richness of
            every region. With PlanetsEra Spices, we preserve the richness and
            authenticity of our Indian cuisine.
          </p>
        </div>
      </div>
      <div className="basis-12/12 flex flex-wrap ml-4 groundedContainer">
        {allProducts?.data?.allProducts.map((items) => {
          if (
            items?.type.includes("grounded") &&
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
    </div>
  );
};

export default OurProduct;
