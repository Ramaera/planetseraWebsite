import "@/public/styles/spicySection.css";
import SpicyData from "./SpicyData";
import Link from "next/link";

const SpicySection = () => {
  return (
    <div className="container px-6 spicyMainContainer">
      <div className="basis-12/12 flex  containerSpicy">
        {SpicyData.map((items) => {
          return (
            <div className="basis-2/12 relative flex imgSpicy">
              <Link href={items.link}>
                <div className="background">
                  <img
                    alt="Planetsera Spices"
                    title={items.spicyName}
                    loading="lazy"
                    src={items.spicyImage}
                    className="w-full mt-12"
                  />
                </div>
                <div className="myImpor">
                  <img alt="masala" loading="lazy" src={items.spicyImageBox} />
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SpicySection;
