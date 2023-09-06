import { useSelector } from "react-redux";

const SpicesInfo = () => {
  const colorMe = useSelector((state) => state.colorUs.color);

  return (
    <div className="spices-info  md:mr-6 xl:mr-20 relative">
      <h2
        style={{ color: colorMe }}
        className="text-[32px] md:text-[40px] font-light md:font-medium text-center md:text-left leading-[40px] md:leading-[70px] md:mb-8">
        Why We are best ?
      </h2>
      <div className="best_line"></div>
      <p className="w-[90%] mt-5 md:mt-2 lg:w-[95%] text-[16px] m-auto  md:m-0 text-left font-normal	leading-[35px]">
        PlanetsEra Spices are enriched with the most authentic taste and
        enchanting aroma. Each step in the manufacturing process is responsibly
        supervised from picking out from the farms to delivering it to the
        stores, so that there is no compromise in the health of our consumers.
      </p>
      <div className="flex w-full justify-center md:justify-start mt-10">
        <div
          style={{
            border: `2px solid ${colorMe}`,
            color: colorMe,
            cursor: "default",
          }}
          className="text-white text-center rounded-xl w-[150px] md:w-[266px] h-[50px] md:h-[77px] text-[13px] md:text-[22px] font-normal	 leading-[16px]  md:leading-[25px] flex items-center p-2 justify-center">
          Hygienic <br /> manufacturing
        </div>
        <div
          style={{
            border: `2px solid ${colorMe}`,
            color: colorMe,
            cursor: "default",
          }}
          className="text-white text-center rounded-xl w-[150px] md:w-[266px] h-[50px] md:h-[77px] text-[13px] md:text-[22px] font-normal	 leading-[16px]  md:leading-[25px] flex items-center ml-5  p-2 justify-center">
          Grinded at lower <br />
          temperatures
        </div>
      </div>
      <div className="flex w-full justify-center md:justify-start mt-4 md:mt-6">
        <div
          style={{
            border: `2px solid ${colorMe}`,
            color: colorMe,
            cursor: "default",
          }}
          className="text-white text-center rounded-xl w-[150px] md:w-[266px] h-[50px] md:h-[77px] text-[13px] md:text-[22px] font-normal	 leading-[16px]  md:leading-[25px] flex items-center p-2 justify-center">
          Quality <br /> preservation{" "}
        </div>
        <div
          style={{
            border: `2px solid ${colorMe}`,
            color: colorMe,
            cursor: "default",
          }}
          className="text-white text-center rounded-xl w-[150px] md:w-[266px] h-[50px] md:h-[77px] text-[13px] md:text-[22px] font-normal	 leading-[16px]  md:leading-[25px] flex items-center ml-5 p-2 justify-center">
          Handpicked from <br /> the best farms{" "}
        </div>
      </div>
    </div>
  );
};

export default SpicesInfo;
