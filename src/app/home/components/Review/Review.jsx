import React from "react";
import "./review.css";
import ReviewImg from "./ReviewImg";
import ReviewInfo from "./ReviewInfo";

const Review = () => {
  return (
    <>
      <div className="w-full max-w-full box-border mx-auto h-auto relative mt-[-3rem] md:mt-10 2xl:mt-20">
        <img
          alt="bg"
          loading="lazy"
          src="images/backgrounds/customerabsolute.png"
          className="w-[100vw]"
        />
      </div>

      <div className="review-container relative justify-between flex md:mx-10 md:my-10 2xl:mx-20 2xl:mb-44">
        <ReviewInfo />
        <ReviewImg />
      </div>
    </>
  );
};

export default Review;
