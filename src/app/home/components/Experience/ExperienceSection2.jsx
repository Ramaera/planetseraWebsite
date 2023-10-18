"use client";
import { useSelector } from "react-redux";

export default function ExperienceSection2() {
  const colorMe = useSelector((state) => state.colorUs.color);

  return (
    <>
      <div
        className="basis-6/12  2xl:basis-5/12 self-center p-1 md:top-0"
        data-aos="slide-left">
        <div>
          <h2
            style={{ color: colorMe }}
            className=" txet-[#ff4f4f] text-[1.3rem] md:text-[35px] font-medium  md:leading-[58px] tracking-[0.17em] md:tracking-wide mb-3">
            Extra-ordinary taste with Experience
          </h2>
          <div className="with_line"></div>
          <div className="ordinaryLine"></div>
        </div>

        <p
          class="font-[#1e1e1e] text-[16px] leading-[30px]
          md:leading-[42px] font-normal tracking-wider mb-1 md:mb-10"
          data-aos="fade-up">
          Planetsera spices, with their amazing flavour, transform culinary
          experiences. Each spice in our beautiful collection has been
          painstakingly chosen and mixed to take your recipes to new levels of
          flavour. Our dedication to quality and flavour is unrivalled. When you
          pick Planetsera, you're starting on an unforgettable culinary
          adventure. Our spices are the culmination of years of experience,
          ensuring that each bite is a flavour symphony. Our spices will take
          your taste buds to a realm of culinary bliss, making every meal an
          exceptional experience, whether you're a seasoned chef or an aspiring
          home cook. Discover the enchantment of Planetsera spices and taste the
          unusual in every bite.
        </p>
      </div>
    </>
  );
}
