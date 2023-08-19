import BuyAmazon from "../BuyAmazon";
import BuyFlipkart from "../BuyFlipkart";

const index = ({ amazon, flipkart, home = 0 }) => {
  return (
    // <div className="w-full flex md:flex-nowrap flex-wrap gap-2  justify-center p-6">
    <div className="w-full flex md:flex-nowrap flex-wrap gap-3 md:gap-7 py-2 pb-6">
      <BuyFlipkart home={home} link={flipkart} />
      <BuyAmazon home={home} link={amazon} />
    </div>
  );
};

export default index;
