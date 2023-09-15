import RelatedPtoductData from "./RelatedProductData";
import Link from "next/link";
import BuynowBtn from "../../../../components/BuynowBtn";

const RelatedProducts = () => {
  return (
    <>
      <div className="flex flex-wrap  md:mx-auto w-full justify-center mb-4">
        {RelatedPtoductData.map((pro) => {
          return (
            <div
              className="w-[44%] md:w-[23%]	 p-2 md:p-4 border-gray-200 border-[1px] rounded-2xl my-2 mx-1 md:m-2"
              key={pro.id}>
              <Link
                href={`/products/${pro.id}`}
                // onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
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
              </Link>
              <div className="mt-[-1rem]">
                <BuynowBtn
                  link={`/products/${pro.id}`}
                  text={"View"}
                  sectionClass="responsiveBtn"
                />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default RelatedProducts;
