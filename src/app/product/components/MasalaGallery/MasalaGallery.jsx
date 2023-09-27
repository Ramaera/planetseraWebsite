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
                <Link href={`/products/${items.id}`}>
                  <img
                    alt="sabji masala"
                    title="Selected Premium Sabji Masala"
                    loading="lazy"
                    src={items?.productImage}
                    width={"360px"}
                  />
                </Link>
                <Link href={`/products/${items.id}`}>
                  <h3 className="text-center invention-text">
                    {items?.productName}
                  </h3>
                </Link>
                <BuynowBtn link={`/products/${items.id}`} text={"Buy Now"} />
              </div>
            );
          })}
        </Slider>
      </div>
      {/*---------------- Web View ------------------------------*/}
      <div className="md:flex flex-wrap	 hidden  justify-evenly mb-32 md:mb-4">
        {MasalaGalleryData.map((items) => {
          return (
            <div>
              <Link href={`/products/${items.id}`}>
                <img
                  alt="sabji masala"
                  title="Selected Premium Sabji Masala"
                  loading="lazy"
                  src={items?.productImage}
                  // width={"330px"}
                  className="sm:w-[280px] xl:w-[320px] 2xl:w-[400px]"
                />
              </Link>
              <Link href={`/products/${items.id}`}>
                <h3 className="text-center invention-text">
                  {items?.productName}
                </h3>
              </Link>
              <BuynowBtn link={`/products/${items.id}`} text={"Buy Now"} />
            </div>
          );
        })}
      </div>
    </>
  );
};
export default MasalaGallery;
