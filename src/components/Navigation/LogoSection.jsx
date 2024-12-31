import Link from "next/link";
import { useSelector } from "react-redux";
import FestivalModal from "../festival/festivalModal";

const LogoSection = () => {
  const colorMe = useSelector((state) => state.colorUs.color);

  // const currentDate = new Date();
  // const festivalDate = new Date("2024-10-02");

  // const isFestivalDay =
  //   currentDate.getDate() === festivalDate.getDate() &&
  //   currentDate.getMonth() === festivalDate.getMonth() &&
  //   currentDate.getFullYear() === festivalDate.getFullYear();

  const currentDate = new Date();
  const newYearStart = new Date("2024-01-01T00:00:00");
  const newYearEnd = new Date("2024-01-01T23:59:59");

  let isFestivalDay = false;
  let festivalImg = "";

  // Check if it's New Year's Day (1st January)
  if (currentDate >= newYearStart && currentDate <= newYearEnd) {
    isFestivalDay = true;
    festivalImg = "/images/festivalImg/NewYear2025.jpeg";
  } else {
    isFestivalDay = false;
  }

  // const currentDate = new Date();
  // const danterasStart = new Date("2024-10-29T00:00:00");
  // const danterasEnd = new Date("2024-10-30T23:59:59");

  // const diwaliStart = new Date("2024-10-31T00:00:00");
  // const diwaliEnd = new Date("2024-11-03T23:59:59");

  // let isFestivalDay = false;
  // let festivalImg = "";

  // // Check if it's between 29th October and 30th October (Danteras)
  // if (currentDate >= danterasStart && currentDate <= danterasEnd) {
  //   isFestivalDay = true;
  //   festivalImg = "/images/festivalImg/danteras.jpeg";
  // }
  // // Check if it's between 31st October and 3rd November (Diwali)
  // else if (currentDate >= diwaliStart && currentDate <= diwaliEnd) {
  //   isFestivalDay = true;
  //   festivalImg = "/images/festivalImg/diwali.jpeg";
  // }
  // // If none of the festival days match
  // else {
  //   isFestivalDay = false;
  // }

  return (
    <>
      {isFestivalDay && <FestivalModal festivalImg={festivalImg} />}
      <div className="basis-4/12 2xl:basis-6/12 md:pl-2 xl:pl-5 myPos mt-14">
        <div className="basis-4/12 h-[450px] flex md:h-[660px] flex-col justify-center w-full px-5 md:px-0">
          <h1
            className="heading-text absolute top-28 scale-95 text-4xl my-10 md:my-12 xl:my-10 md:text-5xl xl:text-7xl md:leading-tight hidden md:block font-['Oriya MN']"
            style={{
              WebkitTextFillColor: "transparent",
              backgroundImage: `linear-gradient(to right, ${colorMe}, ${
                colorMe + "95"
              })`,
            }}>
            Diverse blend of
            <br />
            culture and taste
          </h1>

          <h3
            className="font-medium text-3xl tracking-widest mt-44 md:text-8xl text-white md:hidden font-['Oriya MN']"
            style={{
              color: colorMe,
            }}>
            Diverse blend of culture and taste
          </h3>

          <p className="my-4 md:my-8 text-[16px] md:mt-32 w-full text-[#1e1e1e] md:pl-4 md:px-0  leading-[30px] font-normal">
            We deliver the essence of authenticity to every kitchen as a leading
            supplier of spices. Our extensive selection, which includes tasty
            Mirch, zesty Dhaniya, and aromatic Haldi powders, is obtained from
            the center of India. We take pride in providing quality and purity
            that elevates culinary experiences and adds a touch of richness to
            every meal.
          </p>

          <Link
            href="/#explore"
            className="explore btn1 py-4 md:mx-4 hover:scale-105 2xl:mb-16 font-Montserrat font-light"
            style={{
              boxShadow: `2px 4px 7px -2px ${colorMe}`,
              background: `linear-gradient(72.44deg, ${colorMe} 0%, ${
                colorMe + "95"
              } 100%)`,
              fontWeight: "bold",
            }}>
            Explore More
          </Link>
        </div>
      </div>
    </>
  );
};

export default LogoSection;
