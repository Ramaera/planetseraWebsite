import "./OurProduct.css";
import Our from "./OurProductData";
import BuynowBtn from "../../../../components/BuynowBtn";

const OurProduct = () => {
  return (
    <div
      className="container relative mt-10 md:mt-32 containerBorder"
      id="groundSpices">
      <div className="basis-12/12 absolute ourbg"></div>
      <div className=" groundbg">
        <img src="images/backgrounds/GroundSpicesBg.webp" className="w-full" />
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
            <div className="basis-4/12 mb-20 groundedImg flex flex-col items-center">
              <img
                loading="lazy"
                src={items.masalaImg}
                style={{
                  width: "fit-content",
                  height: "fit-content",
                  maxHeight: "450px",
                }}
              />

              <h2 className="grounded-text5">{items.masalaName}</h2>

              <BuynowBtn
                link={`/productDetailsInfo/${items.id}`}
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
