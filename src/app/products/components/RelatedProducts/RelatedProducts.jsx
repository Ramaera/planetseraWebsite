import RelatedPtoductData from "./RelatedProductData";
import Link from "next/link";
import BuynowBtn from "../../../../components/BuynowBtn";

const RelatedProducts = () => {
  return (
    <>
      <div className="flex flex-wrap mx-2 md:mx-3 mb-4">
        {RelatedPtoductData.map((pro) => {
          return (
            <div className="w-2/4 md:w-1/4 p-1 md:p-5" key={pro.id}>
              <Link
                href={`/products/${pro.id}`}
                // onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                <div className="border-gray-200 border-[1px] rounded-xl p-2 sm:px-4 sm:pt-4 pb-1 2xl:px-8 2xl:pt-8">
                  <div
                    className="border-solid border-2 rounded-xl md:border-0 p-6  flex items-center flex-col justify-center"
                    style={{
                      background: pro.bgColor,
                    }}>
                    <img
                      src={pro.ProductMasala}
                      alt={pro.ProductName}
                      title={`Buy Planetsera ${pro.ProductName}`}
                      className="w-48 2xl:w-64"
                    />
                  </div>
                  <h2
                    className="text-center py-2 text-[13px] md:text-xl	text-slate-600"
                    // style={{
                    //   color: pro.colored,
                    // }}
                  >
                    {pro.ProductName}
                  </h2>
                  <div className="mt-[-1rem]">
                    <BuynowBtn
                      link={`/products/${pro.id}`}
                      text={"View"}
                      sectionClass="relatedResponsiveBtn"
                      width={"125px"}
                      height={"30px"}
                      padding={"20px"}
                    />
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default RelatedProducts;
