import Link from "next/link";
import { useSelector } from "react-redux";
import FestivalModal from "../festival/festivalModal";

const LogoSection = () => {
  const colorMe = useSelector((state) => state.colorUs.color);
  const festivalDate = new Date("2024-04-22"); // Example: April 22, 2024
  const currentDate = new Date();

  const isFestivalDay =
    currentDate.getDate() === festivalDate.getDate() &&
    currentDate.getMonth() === festivalDate.getMonth() &&
    currentDate.getFullYear() === festivalDate.getFullYear();

  return (
    <>
      {isFestivalDay && <FestivalModal />}
      <div className="basis-4/12 2xl:basis-6/12 md:pl-2 xl:pl-5 myPos mt-14">
        <div className="basis-4/12 h-[450px] flex md:h-[660px] flex-col justify-center w-full px-5 md:px-0">
          <h1
            className="heading-text absolute top-28 scale-95 text-4xl my-10 md:my-12 xl:my-10 md:text-5xl xl:text-6xl md:leading-tight hidden md:block font-['Oriya MN']"
            style={{
              WebkitTextFillColor: "transparent",
              backgroundImage: `linear-gradient(to right, ${colorMe}, ${
                colorMe + "95"
              })`,
            }}
          >
            Diverse blend of
            <br />
            culture and taste
          </h1>

          <h3
            className="font-medium text-3xl tracking-widest mt-44 md:text-8xl text-white md:hidden font-['Oriya MN']"
            style={{
              color: colorMe,
            }}
          >
            Diverse blend of culture and taste
          </h3>

          <p className="my-4 md:my-8 text-[16px] md:mt-24 w-full text-[#1e1e1e] md:pr-2 md:px-0 leading-[30px] font-normal">
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
            }}
          >
            Explore More
          </Link>
        </div>
      </div>
    </>
  );
};

export default LogoSection;
