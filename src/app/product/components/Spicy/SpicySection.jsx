import "./SpicySection.css";
import SpicyData from "./SpicyData";

const SpicySection = () => {
  return (
    <div className="container px-6 spicyMainContainer">
      <div className="basis-12/12 flex  containerSpicy">
        {SpicyData.map((items) => {
          return (
            <div className="basis-2/12 relative flex imgSpicy">
              <div className="background">
                <img
                  alt="masala"
                  title="spices collection"
                  loading="lazy"
                  src={items.spicyImage}
                  className="w-full mt-12"
                />
              </div>
              <div className="myImpor">
                <img alt="masala" loading="lazy" src={items.spicyImageBox} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SpicySection;
