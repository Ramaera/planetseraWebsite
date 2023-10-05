import "./MasalaGallery.css";
import Slider from "infinite-react-carousel";
import BuynowBtn from "../../../../components/BuynowBtn";
import Link from "next/link";
import MasalaGalleryData from "./MasalaGalleryData";

const settings = {
  autoplay: true,
  autoplaySpeed: 3000,
  dots: true,
};

const MasalaGallery = () => {
  return (
    <>
      {/*-------------- Mobile View -----------------------------*/}
      <div className="md:hidden my-2 pl-2">
        <Slider {...settings}>
          {MasalaGalleryData.map((items) => {
            return (
              <div>
                <Link
                  href={`/products/${items.id}`}
                  className="flex items-center justify-center">
                  <img
                    alt="sabji masala"
                    title="Selected Premium Sabji Masala"
                    loading="lazy"
                    src={items?.productImage}
                    className="w-72"
                  />
                </Link>
                <Link href={`/products/${items.id}`}>
                  <h3 className="text-center font-[Montserrat] text-xl">
                    {items?.productName}
                  </h3>
                </Link>
                <BuynowBtn
                  width={"140px"}
                  height={"40px"}
                  link={`/products/${items.id}`}
                  text={"Buy Now"}
                />
              </div>
            );
          })}
        </Slider>
      </div>
      {/*---------------- Web View ------------------------------*/}
      <div className="md:flex flex-wrap	hidden justify-evenly mb-32 md:mb-4">
        {MasalaGalleryData.map((items) => {
          return (
            <div className="w-1/5 m-4 flex flex-col items-center">
              <Link href={`/products/${items.id}`}>
                <img
                  alt="Planetsera Spices"
                  title={items?.productName}
                  loading="lazy"
                  src={items?.productImage}
                  // width={"330px"}
                  className="sm:w-64 2xl:w-80"
                />
              </Link>
              <Link href={`/products/${items.id}`}>
                <h3 className="text-center font-[Montserrat] text-xl	2xl:text-2xl">
                  {items?.productName}
                </h3>
              </Link>
              <BuynowBtn
                width={"130px"}
                height={"40px"}
                link={`/products/${items.id}`}
                text={"Buy Now"}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};
export default MasalaGallery;
