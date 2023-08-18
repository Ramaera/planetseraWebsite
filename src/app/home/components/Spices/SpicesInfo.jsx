import { useSelector } from "react-redux"

const SpicesInfo = () => {
  const colorMe = useSelector((state) => state.colorUs.color)

  return (
    <div className="spices-info lg:mt-[28%] lg:mr-20 relative">
      <h1
        style={{ color: colorMe }}
        className="text-[32px] md:text-[49px] font-light text-center md:text-left leading-[40px] md:leading-[130px]"
      >
        Why We are best ?
      </h1>
      <div className="best_line"></div>
      <p className="w-[90%] mt-5 md:mt-2 lg:w-[95%] text-[18px] m-auto  md:m-0 text-left md:text-[22px] font-light	leding-[30px] md:leading-[36px]">
        PlanetsEra Spices are enriched with the most authentic taste and
        enchanting aroma. Each step in the manufacturing process is responsibly
        supervised from picking out from the farms to delivering it to the
        stores, so that there is no compromise in the health of our consumers.
      </p>
      <div className="flex btn-container mt-10">
        <div
          style={{
            border: `2px solid ${colorMe}`,
            color: colorMe,
            cursor: "default",
          }}
          className="text-white text-center rounded-xl w-[150px] md:w-[266px] h-[50px] md:h-[77px] text-[13px] md:text-[25px] font-normal	 leading-[16px]  md:leading-[25px] flex items-center p-2"
        >
          Hygienic manufacturing
        </div>
        <div
          style={{
            border: `2px solid ${colorMe}`,
            color: colorMe,
            cursor: "default",
          }}
          className="text-white text-center rounded-xl w-[150px] md:w-[266px] h-[50px] md:h-[77px] text-[13px] md:text-[25px] font-normal	 leading-[16px]  md:leading-[25px] flex items-center ml-5  p-2"
        >
          Grinded at lower temperatures{" "}
        </div>
      </div>
      <div className="flex btn-container mt-4">
        <div
          style={{
            border: `2px solid ${colorMe}`,
            color: colorMe,
            cursor: "default",
          }}
          className="text-white text-center rounded-xl w-[150px] md:w-[266px] h-[50px] md:h-[77px] text-[13px] md:text-[25px] font-normal	 leading-[16px]  md:leading-[25px] flex items-center p-2"
        >
          Quality preservation{" "}
        </div>
        <div
          style={{
            border: `2px solid ${colorMe}`,
            color: colorMe,
            cursor: "default",
          }}
          className="text-white text-center rounded-xl w-[150px] md:w-[266px] h-[50px] md:h-[77px] text-[13px] md:text-[25px] font-normal	 leading-[16px]  md:leading-[25px] flex items-center ml-5 p-2"
        >
          Handpicked from the best farms{" "}
        </div>
      </div>
    </div>
  )
}

export default SpicesInfo
