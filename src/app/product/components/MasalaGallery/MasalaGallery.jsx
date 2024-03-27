import "@/public/styles/masalaGallery.css";
import Slider from "infinite-react-carousel";
import BuynowBtn from "@/components/BuynowBtn";
import Link from "next/link";
import { useQuery } from "@apollo/client";
import { Get_All_Products } from "@/apollo/queries";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  speed: 2000,
  autoplaySpeed: 3000,
  cssEase: "linear",
};

const MasalaGallery = () => {
  const allProducts = useQuery(Get_All_Products);

  return (
    <>
      {/*-------------- Mobile View -----------------------------*/}
      <div className="md:hidden my-2 pl-2">
        <Slider {...settings} className="slider-container">
          {allProducts?.data?.allProducts?.map((items, index) => {
            if (
              !items.category.includes("ComingSoon") &&
              (items.title.includes("Sabji Masala") ||
                items.title.includes("Chat Masala") ||
                items.title.includes("Amchur Powder") ||
                items.title.includes("Garam Masala") ||
                items.title.includes("Turmeric Powder") ||
                items.title.includes("Coriander Powder") ||
                items.title.includes("Cumin Powder") ||
                items.title.includes("Black Pepper Powder"))
            ) {
              return (
                <div key={index}>
                  <Link
                    href={`/product/${items.productUrl}`}
                    className="flex items-center justify-center"
                  >
                    <img
                      alt="sabji masala"
                      title="Selected Premium Sabji Masala"
                      loading="lazy"
                      src={`https://planetseraapi.planetsera.com/get-images/${items.productImageUrl}`}
                      className="w-72"
                    />
                  </Link>
                  <Link href={`/product/${items.productUrl}`}>
                    <h3 className="text-center font-[Montserrat] text-xl">
                      {items.title}
                    </h3>
                  </Link>
                  <BuynowBtn
                    width={"140px"}
                    height={"40px"}
                    link={`/product/${items.productUrl}`}
                    text={"Buy Now"}
                  />
                </div>
              );
            }
            return null; // If item doesn't meet conditions, return null
          })}
        </Slider>
      </div>

      {/*---------------- Web View ------------------------------*/}
      <div className="md:flex flex-wrap	hidden justify-evenly mb-32 md:mb-4">
        {allProducts?.data?.allProducts.map((items) => {
          if (
            !items.category.includes("ComingSoon") &&
            (items.title.includes("Sabji Masala") ||
              items.title.includes("Chat Masala") ||
              items.title.includes("Amchur Powder") ||
              items.title.includes("Garam Masala") ||
              items.title.includes("Turmeric Powder") ||
              items.title.includes("Coriander Powder") ||
              items.title.includes("Cumin Powder") ||
              items.title.includes("Black Pepper Powder"))
          ) {
            return (
              <div className="w-1/5 m-4 flex flex-col items-center">
                <Link href={`/product/${items.productUrl}`}>
                  <img
                    alt="Planetsera Spices"
                    title={items?.title}
                    loading="lazy"
                    src={`https://planetseraapi.planetsera.com/get-images/${items?.productImageUrl}`}
                    // width={"330px"}
                    className="sm:w-64 2xl:w-80"
                  />
                </Link>

                <Link href={`/product/${items?.productUrl}`}>
                  <h3 className="text-center font-[Montserrat] text-xl	2xl:text-2xl">
                    {items?.title}
                  </h3>
                </Link>
                <BuynowBtn
                  width={"130px"}
                  height={"40px"}
                  link={`/product/${items?.productUrl}`}
                  text={"Buy Now"}
                />
              </div>
            );
          }
        })}
      </div>
    </>
  );
};
export default MasalaGallery;
