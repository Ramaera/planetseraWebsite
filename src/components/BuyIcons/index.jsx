import BuyAmazon from "../BuyAmazon";
import BuyFlipkart from "../BuyFlipkart";
import BuyPlanetsera from "../BuyPlanetsera";

const index = ({ amazon, flipkart, planetsera, home = 0 }) => {
  return (
    // <div className="w-full flex md:flex-nowrap flex-wrap gap-2  justify-center p-6">
    <div className="w-full flex md:flex-nowrap flex-wrap gap-3 md:gap-7 py-2 pb-6">
      <BuyFlipkart home={home} link={flipkart} />
      <BuyAmazon home={home} link={amazon} />
      <BuyPlanetsera itemlist={planetsera} />
    </div>
  );
};

export default index;
