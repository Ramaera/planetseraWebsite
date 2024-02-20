import "@/public/styles/masalaGallery.css";
import Slider from "infinite-react-carousel";
import BuynowBtn from "@/components/BuynowBtn";
import Link from "next/link";
import MasalaGalleryData from "./MasalaGalleryData";
import { useQuery } from "@apollo/client";
import { Get_All_Products } from "@/apollo/queries";

const settings = {
  autoplay: true,
  autoplaySpeed: 3000,
  dots: true,
};

const MasalaGallery = () => {
  const allProducts = useQuery(Get_All_Products);

  return (
    <>
      {/*-------------- Mobile View -----------------------------*/}
      <div className="md:hidden my-2 pl-2">
        <Slider {...settings}>
          {MasalaGalleryData.map((items) => {
            return (
              <div>
                <Link
                  href={`/product/${items.id}`}
                  className="flex items-center justify-center">
                  <img
                    alt="sabji masala"
                    title="Selected Premium Sabji Masala"
                    loading="lazy"
                    src={items?.productImage}
                    className="w-72"
                  />
                </Link>
                <Link href={`/product/${items.id}`}>
                  <h3 className="text-center font-[Montserrat] text-xl">
                    {items?.productName}
                  </h3>
                </Link>
                <BuynowBtn
                  width={"140px"}
                  height={"40px"}
                  link={`/product/${items.id}`}
                  text={"Buy Now"}
                />
              </div>
            );
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
                <Link href={`/product/${items.id}`}>
                  <img
                    alt="Planetsera Spices"
                    title={items?.title}
                    loading="lazy"
                    src={`https://planetseraapi.planetsera.com/get-images/${items?.productImageUrl}`}
                    // width={"330px"}
                    className="sm:w-64 2xl:w-80"
                  />
                </Link>

                <Link href={`/product/${items?.id}`}>
                  <h3 className="text-center font-[Montserrat] text-xl	2xl:text-2xl">
                    {items?.title}
                  </h3>
                </Link>
                <BuynowBtn
                  width={"130px"}
                  height={"40px"}
                  link={`/product/${items?.id}`}
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
