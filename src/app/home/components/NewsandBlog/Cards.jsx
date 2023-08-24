"use client";
import { useSelector } from "react-redux";

const Cards = ({ item }) => {
  const colorMe = useSelector((state) => state.colorUs.color);

  return (
    <div className="cards  scale-75 md:scale-100  product-font text-center ">
      <div
        className="box1 img-div card1 mx-auto mb-4"
        style={{
          backgroundImage: `url(${item.productImg})`,
        }}
      />
      <h2 style={{ color: colorMe }} className="text-2xl mb-2 ">
        {item.productName}
      </h2>
      <p className="text-xl text-[#1E1E1E]">{item.productDesc}</p>
    </div>
  );
};

export default Cards;
