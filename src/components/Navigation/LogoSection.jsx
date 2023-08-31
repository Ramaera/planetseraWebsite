import "./navigation.css";
import { useSelector } from "react-redux";

const LogoSection = () => {
  const colorMe = useSelector((state) => state.colorUs.color);

  return (
    <div className="basis-4/12 pl-5 md:pl-2 xl:pl-5 myPos mt-14">
      <div className="basis-4/12  text-alignment">
        <h1
          style={{
            webkitTextFillColor: "transparent",
            backgroundImage: `linear-gradient(to right, ${colorMe}, ${
              colorMe + "95"
            })`,
            fontFamily: "Oriya MN",
          }}
          className="heading-textt absolute top-32 scale-95 text-4xl mt-20 md:mt-12 xl:mt-20 md:text-5xl xl:text-6xl md:leading-tight	 hidden md:block font-['Oriya MN']">
          Diverse blend of
          <br />
          culture and taste
        </h1>
        {/* <p
          style={{ color: "white" }}
          className="heading-textt text-4xl mt-32 md:text-8xl text-white hidden md:block select-none	font-['Oriya MN']">
          Diverse blend of culture and taste
        </p> */}
        <h1
          style={{
            color: colorMe,
          }}
          className="font-mont text-4xl mt-16 md:text-8xl text-white md:hidden font-['Oriya MN']">
          Diverse blend of culture and taste
        </h1>

        <p className="my-3 md:ml-4 md:mt-2 xl:mt-32  text-[18px] text-[#797979] font-light pr-2 md:px-0 leading-[30px]">
          Uniting the diverse blend of our cultural richness and taste with
          PlanetsEra spices
        </p>

        <a
          href="#produce"
          className="explore btn1 py-4 md:mx-4 hover:scale-105 2xl:mb-16 font-Montserrat font-light"
          style={{
            boxShadow: `2px 4px 7px -2px ${colorMe}`,
            background: `linear-gradient(72.44deg, ${colorMe} 0%, ${
              colorMe + "95"
            } 100%)`,
            cursor: "pointer",
            zIndex: "19",
            fontWeight: "bold",
          }}>
          Explore More
        </a>
      </div>
    </div>
  );
};

export default LogoSection;
