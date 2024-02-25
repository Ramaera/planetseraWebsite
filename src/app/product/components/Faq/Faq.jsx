import { useState } from "react";
import { useParams } from "next/navigation";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import RelatedPtoductData from "../RelatedProducts/RelatedProductData";
import { Get_All_Products } from "@/apollo/queries";
import { useQuery } from "@apollo/client";

const Faq = () => {
  const { loading, data, error } = useQuery(Get_All_Products);
  const { id } = useParams();
  if (loading) {
    <p>Loading....</p>;
  }
  const faqDataFilter = data?.allProducts.find(
    (prod) => prod.productUrl === id
  );

  const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <div className=" p-4">
      <h6 className="text-xl sm:text-3xl font-semibold mb-6 text-center">
        Frequently Asked Questions (FAQ)
      </h6>
      <div className="max-w-4xl mx-auto">
        {faqDataFilter?.metaData?.map((data) =>
          data?.faqs.map((faq, index) => (
            <div key={index} className="mb-6">
              <button
                className={`w-full flex items-center justify-between text-left font-semibold  p-4 transition duration-300 text-black ${
                  openIndex === index ? " rounded-t-lg" : " rounded-lg"
                }`}
                style={{
                  backgroundColor: "rgb(240, 240, 240, 1)",
                }}
                onClick={() => toggleItem(index)}
              >
                <span>{faq.question}</span>
                {openIndex === index ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </button>
              {openIndex === index && (
                <div
                  className="bg-white px-4 pb-4  rounded-b-lg"
                  style={{ backgroundColor: "rgb(240, 240, 240, 1)" }}
                >
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Faq;
