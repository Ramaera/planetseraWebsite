import RelatedPtoductData from "./RelatedProductData";
import Link from "next/link";
import BuynowBtn from "../../../../components/BuynowBtn";

const RelatedProducts = () => {
  return (
    <>
      <div className="flex flex-wrap mx-2 md:mx-3 mb-4">
        {RelatedPtoductData.map((pro) => {
          return (
            <div className="w-2/4 md:w-1/4 p-1 md:p-3" key={pro.id}>
              <Link
                href={`/products/${pro.id}`}
                // onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                <div className="border-gray-200 border-[1px] rounded-2xl px-3 pt-3 pb-1">
                  <img
                    src={pro.RelatedPtoductImg}
                    alt={pro.ProductName}
                    title={`Buy Planetsera ${pro.ProductName}`}
                  />
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
                      sectionClass="responsiveBtn"
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
