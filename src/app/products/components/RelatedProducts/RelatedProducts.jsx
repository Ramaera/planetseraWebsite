import RelatedPtoductData from "./RelatedProductData";
import Link from "next/link";

const RelatedProducts = () => {
  return (
    <>
      <div className="flex flex-wrap mx-2 md:mx-3">
        {RelatedPtoductData.map((pro) => {
          return (
            <div className="w-2/4 md:w-1/4 p-1 md:p-4" key={pro.id}>
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
                  className="text-center py-2 md:text-xl	text-slate-600"
                  // style={{
                  //   color: pro.colored,
                  // }}
                >
                  {pro.ProductName}
                </h2>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default RelatedProducts;
