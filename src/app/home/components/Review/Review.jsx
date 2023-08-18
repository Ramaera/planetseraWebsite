import React from "react";
import "./review.css";
import ReviewImg from "./ReviewImg";
import ReviewInfo from "./ReviewInfo";

const Review = () => {
  return (
    <>
      <div className="container w-full relative">
        <img
          alt="bg"
          loading="lazy"
          src="images/backgrounds/customerabsolute.webp"
          className="w-full"
        />
      </div>

      <div className="review-container relative justify-between flex mx-auto md:mt-10">
        <ReviewInfo />
        <ReviewImg />
      </div>
    </>
  );
};

export default Review;
