"use client";
import "./DiscoverSection.css";
import { useSelector } from "react-redux";

const DiscoverSection = () => {
  const colorMe = useSelector((state) => state.colorUs.color);

  return (
    <>
      <div id="discover" className="container disAlig relative">
        <img
          alt="masala"
          src="images/backgrounds/discoverAb.webp"
          className="discover-alignment"
        />
        <div className="basis-12/12 disTile relative">
          <h1
            className="discover-heading"
            style={{
              webkitTextFillColor: "transparent",
              backgroundImage: `linear-gradient(to right, ${colorMe}, ${
                colorMe + "80"
              })`,
            }}>
            Discover more about PlanetsEra
          </h1>
          <div
            className="discover-line 2xl:hidden"
            style={{
              backgroundImage: `linear-gradient(to right, ${colorMe}, ${
                colorMe + "80"
              })`,
            }}></div>
          <h2 className="discover-quality disqual">QUALITIES</h2>
        </div>

        <div class="basis-12/12 lg:flex md:flex sm:block quality-alignment">
          <div
            class="basis-3/12 flex items-center quality-alignment1"
            style={{
              /* backgroundImage: `linear-gradient(to right, ${colorMe}, ${
                colorMe + "80"
              })`, */
              "--hover-color": colorMe,
              "--hover-colored": colorMe + "80",
              "--hover-opacity": 0.5,
            }}>
            <h1>Exotic Spices</h1>
          </div>
          <div
            class="basis-3/12 flex items-center quality-alignment1"
            style={{
              /* backgroundImage: `linear-gradient(to right, ${colorMe}, ${
                colorMe + "80"
              })`, */
              "--hover-color": colorMe,
              "--hover-colored": colorMe + "80",
              "--hover-opacity": 0.5,
            }}>
            <h1>Savoury Taste</h1>
          </div>
          <div
            style={{
              /* backgroundImage: `linear-gradient(to right, ${colorMe}, ${
                colorMe + "80"
              })`, */
              "--hover-color": colorMe,
              "--hover-colored": colorMe + "80",
              "--hover-opacity": 0.5,
            }}
            class="basis-3/12 flex items-center quality-alignment1">
            <h1>Premium Ingredients</h1>
          </div>

          <div
            class="basis-3/12 flex items-center quality-alignment1"
            style={{
              /* backgroundImage: `linear-gradient(to right, ${colorMe}, ${
                colorMe + "80"
              })`, */
              "--hover-color": colorMe,
              "--hover-colored": colorMe + "80",
              "--hover-opacity": 0.5,
            }}>
            <h1>Superior Quality</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default DiscoverSection;
