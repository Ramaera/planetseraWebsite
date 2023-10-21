import React from "react";

const CategoriesBlog = ({ selected, setSelected }) => {
  const handleCategoryClick = (category) => {
    setSelected(category);
  };

  return (
    <>
      <div className="border-gray-200 border-[1px] rounded-xl px-8 w-full py-2">
        <h3 className="text-[#1E1E1E] text-2xl font-['Montserrat'] font-bold text-left">
          Categories
        </h3>

        <div>
          <ul className="py-1">
            <li
              onClick={() => handleCategoryClick("")}
              className={`cursor-pointer p-2 ${
                selected === "" ? "bg-gray-300 rounded-lg font-semibold" : ""
              }`}>
              All
            </li>
            <li
              onClick={() => handleCategoryClick("BestSelling")}
              className={`cursor-pointer p-2 ${
                selected === "BestSelling"
                  ? "bg-gray-300 rounded-lg font-semibold"
                  : ""
              }`}>
              Best Selling
            </li>
            <li
              onClick={() => handleCategoryClick("MouthWatering")}
              className={`cursor-pointer p-2 ${
                selected === "MouthWatering"
                  ? "bg-gray-300 rounded-lg font-semibold"
                  : ""
              }`}>
              Mouth Watering
            </li>
            <li
              onClick={() => handleCategoryClick("NonvegTadka")}
              className={`cursor-pointer p-2 ${
                selected === "NonvegTadka"
                  ? "bg-gray-300 rounded-lg font-semibold"
                  : ""
              }`}>
              Nonveg Tadka
            </li>
            <li
              onClick={() => handleCategoryClick("KitchenSpices")}
              className={`cursor-pointer p-2 ${
                selected === "KitchenSpices"
                  ? "bg-gray-300 rounded-lg font-semibold"
                  : ""
              }`}>
              Kitchen Spices
            </li>
            <li
              onClick={() => handleCategoryClick("WeekandTadka")}
              className={`cursor-pointer p-2 ${
                selected === "WeekandTadka"
                  ? "bg-gray-300 rounded-lg font-semibold"
                  : ""
              }`}>
              Weekand Tadka
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default CategoriesBlog;
