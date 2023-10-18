import React, { useState } from "react";
import "@/public/styles/instagramRecipe.css";
import { InstagramEmbedDangerousHTML } from "./InstagramPost";
import { InstagramSocialIcon } from "./InstagramSocialIcon";
import InstagramHeading from "./InstagramHeading";
import InstagramButton from "./InstagramButton";

const InstagramRecipe = () => {
  return (
    <div className="w-full max-w-full box-border m-auto h-auto instagram-background relative">
      <InstagramHeading />
      <div className="basis-12/12 flex justify-center mt-6 instContainer">
        {InstagramSocialIcon.map((item) => {
          return (
            <div className="basis-2/12 p-5">
              <div
                className="shadow-lg p-4 relative"
                style={{ backgroundColor: "white" }}>
                <InstagramEmbedDangerousHTML
                  url={`${item.instaLink}`}
                  className="myplaneteraPost"
                />
              </div>
            </div>
          );
        })}
      </div>
      <InstagramButton />
      {/* <img loading="lazy" src={insta} className="instagram-masala" /> */}
    </div>
  );
};

export default InstagramRecipe;
