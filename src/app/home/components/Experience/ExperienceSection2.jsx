"use client";
import { useSelector } from "react-redux";

export default function ExperienceSection2() {
  const colorMe = useSelector((state) => state.colorUs.color);

  return (
    <>
      <div
        className="basis-5/12 self-center p-1 md:top-0 md:h-[75vh]"
        data-aos="slide-left">
        <div>
          <h2
            style={{ color: colorMe }}
            className=" txet-[#ff4f4f] text-[30px] md:text-[40px] font-normal md:font-medium leading-[40px] md:leading-[58px] tracking-wide mb-3">
            Extra-ordinary taste with Experience
          </h2>
          <div className="with_line"></div>
          <div className="ordinaryLine"></div>
        </div>

        <p
          class="font-[#1e1e1e] text-[16px] leading-[30px]
          md:leading-[42px] font-light tracking-wider mb-1 md:mb-10"
          data-aos="fade-up">
          Discover the unique flavor that makes us unique. We have perfected the
          art of flavor combining over the years of experience, providing a
          sensory experience that goes above and beyond the norm. Each spice is
          a tribute to our dedication to unrivaled flavor, from the rich depth
          of Spices to the enticing fire of Turmeric Powder and the nuanced
          essence of Black Pepper Powder.
        </p>
      </div>
    </>
  );
}
