import RelatedPtoductData from "./RelatedProductData";
import Link from "next/link";
import BuynowBtn from "@/components/BuynowBtn";
import { usePathname } from "next/navigation";
import { Get_All_Products } from "@/apollo/queries";
import { useQuery } from "@apollo/client";

const RelatedProducts = () => {
  const allProducts = useQuery(Get_All_Products);
  const currentRoute = usePathname();
  return (
    <>
      <div className="flex flex-wrap mx-2 md:mx-3 mb-4">
        {allProducts?.data?.allProducts?.map((product) => {
          if (
            product.category.includes("ComingSoon") ||
            currentRoute === `/product/${product.productUrl}` ||
            product.isActive === false
          ) {
            return null;
          }

          return (
            <div className="w-2/4 md:w-1/4 p-1 md:p-5" key={product.id}>
              <div className="border-gray-200 border-[1px] rounded-xl p-2 sm:px-4 sm:pt-4 pb-1 2xl:px-8 2xl:pt-8">
                <Link href={`/product/${product.productUrl}`}>
                  <div
                    className="border-solid border-2 rounded-xl md:border-0 p-6  flex items-center flex-col justify-center"
                    style={{
                      background: product?.metaData[0]?.bgColor,
                    }}
                  >
                    {" "}
                    <img
                      src={`https://planetseraapi.planetsera.com/get-images/${product?.productImageUrl}`}
                      alt={product.title}
                      title={`Buy Planetsera ${product.title}`}
                      className="w-48 2xl:w-64"
                    />
                  </div>
                </Link>
                <Link href={`/product/${product.productUrl}`}>
                  <h5
                    className="text-center py-2 text-[13px] md:text-xl	text-slate-600"
                    // style={{
                    //   color: pro.colored,
                    // }}
                  >
                    {product.title}
                  </h5>
                </Link>
                <div className="mt-[-1rem]">
                  <BuynowBtn
                    link={`/product/${product.productUrl}`}
                    text={"View"}
                    sectionClass="relatedResponsiveBtn"
                    width={"125px"}
                    height={"30px"}
                    padding={"20px"}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default RelatedProducts;
