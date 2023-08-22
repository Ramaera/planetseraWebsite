"use client";
import "./AboutHeader.css";
import NavItem from "@/components/Navigation/NavItem";
import NavigationMobile from "@/components/Navigation/NavigationMobile";
import { useSelector } from "react-redux";

const AboutHeader = () => {
  const colorMe = useSelector((state) => state.colorUs.color);
  const bg1 = "/images/backgrounds/aboutBgRed.webp";
  const bg2 = "/images/backgrounds/aboutBgYellow.webp";
  const bg3 = "/images/backgrounds/aboutBgGreen.webp";

  return (
    <>
      <section
        className="relative bg-cover bg-center bg-no-repeat mb-52"
        style={{
          backgroundImage: `url(${
            colorMe === "#2dc83c" ? bg3 : colorMe === "#ffde39" ? bg2 : bg1
          })`,
        }}>
        <NavItem page={"about"} />
        <NavigationMobile page={"about"} />

        <div className="absolute inset-0 bg-white/7"></div>

        <div className="relative mx-auto px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div className="max-w-2xl sm:text-left">
            <h1
              className="aboutH-heading"
              style={{
                webkitTextFillColor: "transparent",
                backgroundImage: `linear-gradient(to right, ${colorMe}, ${
                  colorMe + "80"
                })`,
                textShadow: `0 4px 4px ${colorMe + "85"}`,
              }}>
              Establishing the bond of love and trust through PlanetsEra spices
            </h1>

            <p className="mt-4 max-w-lg sm:text-xl sm:leading-relaxed aboutT-text">
              Uncovering Our Unique Qualities: Discover More About Who We Are
            </p>

            <div className="mt-8 flex flex-wrap gap-4 text-center">
              <a
                href="#discover"
                className="more-button  py-4   hover:scale-105 "
                style={{
                  boxShadow: `2px 4px 7px -2px ${colorMe}`,
                  background: `linear-gradient(72.44deg, ${colorMe} 0%, ${
                    colorMe + "95"
                  } 100%)`,
                  cursor: "pointer",
                  zIndex: "19",
                  fontWeight: "400",
                }}>
                Explore More
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutHeader;
