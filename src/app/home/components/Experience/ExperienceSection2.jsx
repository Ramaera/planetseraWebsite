"use client";
import { useSelector } from "react-redux";

export default function ExperienceSection2() {
  const colorMe = useSelector((state) => state.colorUs.color);

  return (
    <>
      <div
        className="basis-6/12 self-center p-1 md:mt-[-6rem] xl:mt-[-13rem]"
        data-aos="slide-left">
        <div>
          <h2
            style={{ color: colorMe }}
            className=" txet-[#ff4f4f] text-[30px] md:text-[40px] font-normal leading-[40px] md:leading-[58px] tracking-wide mb-3">
            Extra-ordinary taste with Experience
          </h2>
          <div className="with_line"></div>
          <div className="ordinaryLine"></div>
        </div>

        <p
          class="font-[#1e1e1e] text-[16px] leading-[30px]
          md:leading-[42px] font-light tracking-wider mb-1 md:mb-10"
          data-aos="fade-up">
          Families are created by love and warmth. Your love towards our spices
          has brought us together as a family because it is said, “ A family
          that eats together, stays together.”
          <br />
          <br />
          Your love and trust has made us one of the most trustworthy masala
          manufacturers and has enabled us to give years of excellence in taste.
        </p>
      </div>
    </>
  );
}
