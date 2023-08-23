import RelatedPtoductData from "./RelatedProductData";
import Link from "next/link";

const RelatedProducts = () => {
  return (
    <>
      <div className="flex flex-wrap mx-2 md:mx-3">
        {RelatedPtoductData.map((pro) => {
          return (
            <div className="w-1/4 p-1 md:p-4" key={pro.id}>
              <Link
                href={`/products/${pro.id}`}
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                <img alt="masala" src={pro.RelatedPtoductImg} />
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default RelatedProducts;
