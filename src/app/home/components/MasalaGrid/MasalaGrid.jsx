"use client";
import Our from "./MasalaGridData";
import { useSelector } from "react-redux";
import BuynowBtn from "../../../../components/BuynowBtn";

function MasalaGrid() {
  const colorMe = useSelector((state) => state.colorUs.color);

  return (
    <>
      <div className="container px-6 mx-auto lg:pt-22 mt-16">
        <div className="basis-12/12">
          <div data-aos="slide-right" data-aos-duration="1000">
            <h2
              style={{ color: colorMe }}
              className="text-[30px] md:text-[49px] text-center my-5 leading-[40px] md:leading-[80px] tracking-wider md:font-normal">
              Perfect spicy twist for every occasion
            </h2>
            <div className="spicy_line"></div>
            <div className="masalaLine"></div>
          </div>
        </div>
        <div className="basis-12/12 masalaTab ml-4">
          {Our.map((items) => {
            return (
              <div className="basis-4/12 mb-8 md:mb-20 text-center text-2xl font-extralight tracking-wider space-y-1 md:flex md:flex-col md:items-center">
                <img
                  alt="masala"
                  src={items.ourproductImage}
                  className="masImg hover:scale-110 cursor-pointer"
                />

                <h2 className="text-[24px] font-normal tracking-wide font-Montserrat">
                  {items.productText}
                </h2>

                <div style={{ marginTop: "10px" }}></div>
                <BuynowBtn link={`/products/${items.id}`} text={"Buy Now"} />
              </div>
            );
          })}
        </div>

        <div className="basis-12/12 flex my-10">
          <div className="basis-5/12"></div>
          <div className="basis-2/12 flex justify-center items-center"></div>
          <div className="basis-5/12"></div>
        </div>
      </div>
      <img
        alt="masala"
        src="images/backgrounds/masalaAbsolute.webp"
        className="w-full md:my-[-100px]"
      />
    </>
  );
}
export default MasalaGrid;
