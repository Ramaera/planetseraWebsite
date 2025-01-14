import "@/public/styles/productInfo.css";
import Data from "./ProductInfoData";
import Link from "next/link";

const ProductInfoSection = () => {
  return (
    <div className="boxZoom">
      <div className={"containerZoom"} id="containerZoom1">
        <div className="cardZoom">
          <div className="slide slide1">
            <div className="contentZoom">
              <div className="iconZoom">
                <img
                  src="images/backgrounds/Sabji Masala.webp"
                  alt="Sabji Masala"
                  title="PlanetsEra’s Sabji Masala is an evergreen everyday Indian spice added to Indian food."
                  className="fa fa-user-circle"
                />
              </div>
            </div>
          </div>

          <div
            className="slide slide2"
            id="slider-2-1"
            style={{
              background: "linear-gradient(to right, #C9D2B3, #94a274)",
            }}
          >
            <div className="contentZoom">
              <h2 className="headingZoom">Sabji Masala</h2>
              <h3 className="titleZoom ">
                PlanetsEra’s Sabji Masala is an evergreen everyday Indian spice
                added to Indian food. A blend of spices for day-to-day
                preparations in any vegetarian/non-vegetarian dish.
              </h3>

              <Link
                href={`/product/sabji-masala`}
                // onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                <button className="buttonZoomView scale-105">View</button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* 1 */}

      <div className={"containerZoom"} id="containerZoom2">
        <div className="cardZoom">
          <div className="slide slide1" style={{ zIndex: "2" }}>
            <div className="contentZoom">
              <div className="iconZoom">
                <img
                  src="images/backgrounds/Garam Masala.webp"
                  alt="Garam Masala"
                  title="PlanetsEra’s Garam Masala is an evergreen everyday Indian spice added to Indian food."
                  className="fa fa-user-circle"
                />
              </div>
            </div>
          </div>

          <div
            className="slide slide2"
            id="slider-2-2"
            style={{
              background: "linear-gradient(to right, #B79891, #94716B)",
              zIndex: "1",
            }}
          >
            <div className="contentZoom">
              <h2 className="headingZoom">Garam Masala</h2>
              <h3 className="titleZoom ">
                PlanetsEra’s Garam Masala is an evergreen everyday Indian spice
                added to Indian food. A blend of spices for day-to-day
                preparations in any vegetarian/non-vegetarian dish.
              </h3>

              <Link
                href={`/product/garam-masala`}
                // onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                <button className="buttonZoomView scale-105">View</button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* 2 */}
      <div className={"containerZoom"} id="containerZoom3">
        <div className="cardZoom">
          <div className="slide slide1" style={{ zIndex: "2" }}>
            <div className="contentZoom">
              <div className="iconZoom">
                <img
                  src="images/backgrounds/Red Chilli Powder.webp"
                  alt="bRed Chillig"
                  title="PlanetsEra’s Red Chilli is an evergreen everyday Indian spice added to Indian food."
                  className="fa fa-user-circle"
                />
              </div>
            </div>
          </div>

          <div
            className="slide slide2"
            id="slider-2-3"
            style={{
              background: "linear-gradient(to right, #CDB1B1, #C59F9F)",
              zIndex: "1",
            }}
          >
            <div className="contentZoom">
              <h2 className="headingZoom">Red Chilli Powder</h2>
              <h3 className="titleZoom ">
                PlanetsEra’s Red Chilli Powder is an evergreen everyday Indian
                spice added to Indian food. A blend of spices for day-to-day
                preparations in any vegetarian/non-vegetarian dish.
              </h3>

              <Link
                href={`/product/red-chilli-powder`}
                // onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                <button className="buttonZoomView scale-105">View</button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* 3 */}

      <div className={"containerZoom"} id="containerZoom4">
        <div className="cardZoom">
          <div className="slide slide1">
            <div className="contentZoom">
              <div className="iconZoom">
                <img
                  src="images/backgrounds/Jeera Powder.webp"
                  alt="Cumin Powder"
                  title="PlanetsEra’s Cumin Powder is an evergreen everyday Indian spice added to Indian food."
                  className="fa fa-user-circle"
                />
              </div>
            </div>
          </div>

          <div
            className="slide slide2"
            id="slider-2-4"
            style={{
              background: "linear-gradient(to right, #E4B980, #E2B87F)",
            }}
          >
            <div className="contentZoom">
              <h2 className="headingZoom">Cumin Powder</h2>
              <h3 className="titleZoom ">
                PlanetsEra’s Cumin Powder is an evergreen everyday Indian spice
                added to Indian food. A blend of spices for day-to-day
                preparations in any vegetarian/non-vegetarian dish.
              </h3>

              <Link
                href={`/product/cumin-powder`}
                // onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                <button className="buttonZoomView scale-105">View</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfoSection;
