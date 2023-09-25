"use client";
import "./recipes.css";
import { InstagramEmbedDangerousHTML } from "./InstagramFeed";
import { SocialIcon } from "./SocialIcon";
import { useSelector } from "react-redux";

const Recipes = () => {
  const colorMe = useSelector((state) => state.colorUs.color);

  return (
    <div className="recipes lg:w-[95%] mx-auto">
      <div className="flex justify-center relative">
        <h2
          style={{ color: colorMe }}
          className="text-[1.7rem] tracking-wider md:text-[49px] font-normal sm:font-medium  text-center	leading-[40px] md:leading-[40px]"
          data-aos="fade-up">
          Check out the yummiest recipes{" "}
        </h2>
        <div className="recipe_line"></div>
      </div>
      <div className="video-cards flex w-[100%] justify-around mx-auto items-center instRecipeContainer ">
        {SocialIcon.map((item) => {
          return (
            <div className="video-cards flex w-11/12 justify-around mx-auto mt-2 md:mt-10 items-center  scale-90 md:scale-100 ">
              <div
                className="shadow-lg p-4 relative"
                style={{ border: "1px solid #dbdbdb" }}>
                <div
                  className="z-[100]bg-500-red h-8 w-8 absolute"
                  style={{ right: "7%", top: "40%" }}>
                  <a href={`${item.instaLink}`} target="_blank">
                    <img
                      alt="bg"
                      loading="lazy"
                      src={`${item.shareIcon}`}
                      className="mb-10"
                    />
                  </a>
                  <a href={`${item.instaLink}`} target="_blank">
                    <img
                      alt="bg"
                      loading="lazy"
                      src={`${item.commentIcon}`}
                      className="mb-10"
                    />
                  </a>

                  <a href={`${item.instaLink}`} target="_blank">
                    <img
                      alt="bg"
                      loading="lazy"
                      src={`${item.likeIcon}`}
                      className="mb-10"
                    />
                  </a>
                </div>
                <InstagramEmbedDangerousHTML url={`${item.instaLink}`} />
              </div>
            </div>
          );
        })}
      </div>
      <div className="video-cards flex w-[100%] justify-around mx-auto mt-10 items-center"></div>
    </div>
  );
};

export default Recipes;
