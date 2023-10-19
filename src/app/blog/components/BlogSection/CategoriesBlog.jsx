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
              className={`cursor-pointer ${
                selected === "" ? "bg-gray-300" : ""
              }`}>
              All
            </li>
            <li
              onClick={() => handleCategoryClick("BestSelling")}
              className={`cursor-pointer ${
                selected === "BestSelling" ? "bg-gray-300" : ""
              }`}>
              Best Selling
            </li>
            <li
              onClick={() => handleCategoryClick("MouthWatering")}
              className={`cursor-pointer ${
                selected === "MouthWatering" ? "bg-gray-300" : ""
              }`}>
              Mouth Watering
            </li>
            <li
              onClick={() => handleCategoryClick("NonvegTadka")}
              className={`cursor-pointer ${
                selected === "NonvegTadka" ? "bg-gray-300" : ""
              }`}>
              Nonveg Tadka
            </li>
            <li
              onClick={() => handleCategoryClick("KitchenSpices")}
              className={`cursor-pointer ${
                selected === "KitchenSpices" ? "bg-gray-300" : ""
              }`}>
              Kitchen Spices
            </li>
            <li
              onClick={() => handleCategoryClick("WeekandTadka")}
              className={`cursor-pointer ${
                selected === "WeekandTadka" ? "bg-gray-300" : ""
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
