"use client";
import Our from "./MasalaGridData";
import { useSelector } from "react-redux";
import BuynowBtn from "../../../../components/BuynowBtn";
import Link from "next/link";

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
        <div className="flex flex-wrap mx-6 md:mx-3 basis-12/12 justify-between">
          {Our.map((items) => {
            return (
              <div className="w-[44%] md:3/4  md:h-full flex flex-col justify-between md:basis-4/12 mb-8 md:mb-20 text-center text-2xl font-extralight tracking-wider space-y-1 md:flex md:flex-col md:items-center ">
                <Link href={`/products/${items.id}`}>
                  <img
                    alt="masala"
                    src={items.ourproductImage}
                    className="masImg md:hover:scale-110 cursor-pointer"
                  />

                  <h2 className="text-[18px] md:text-[24px] text-center  font-normal tracking-wide font-Montserrat">
                    {items.productText}
                  </h2>
                </Link>
                <div style={{ marginTop: "10px" }}></div>
                <BuynowBtn
                  link={`/products/${items.id}`}
                  text={"Buy Now"}
                  sectionClass="responsiveBtn"
                />
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
