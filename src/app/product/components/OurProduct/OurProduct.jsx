import "./OurProduct.css";
import Our from "./OurProductData";
import BuynowBtn from "../../../../components/BuynowBtn";
import Link from "next/link";

const OurProduct = () => {
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
        {Our.map((items) => {
          return (
            <div className="basis-4/12 mb-10 groundedImg flex flex-col items-center">
              <Link href={`/products/${items.id}`}>
                <img
                  loading="lazy"
                  src={items.masalaImg}
                  alt="Ground spices"
                  title={`Buy Planetsera ${items.masalaName}`}
                  className="sm:w-64 2xl:w-96"
                />
                <h2 className="text-center font-[Montserrat] text-xl	2xl:text-2xl mt-2">
                  {items.masalaName}
                </h2>
              </Link>
              <BuynowBtn
                width={"130px"}
                height={"40px"}
                link={`/products/${items.id}`}
                text={"Buy Now"}
                sectionClass="responsiveBtn"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OurProduct;
