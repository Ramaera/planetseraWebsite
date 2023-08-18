import "./ProductSection.css";

const ProductSection = () => {
  return (
    <>
      <div className="container spi-container">
        <img
          alt="bg"
          loading="lazy"
          src="images/backgrounds/spi.webp"
          className="spi-alignment 2xl:left-[650px]"
        />
      </div>
      <div className="container bg-contain  md:m-14 flex ProductSectionImg mt-10 flex-wrap relative 2xl:mx-90 2xl:h-[780px]">
        <div className="basis-12/12 flex justify-center items-center w-full productSec 2xl:h-[780px]">
          <h2 className="ProductSection-text tracking-[4px] md:tracking-[6px]">
            Spices that aid gut health
            <br /> with incredible taste
          </h2>
          <div>
            <img
              alt="bg"
              className="rectangleLine 2xl:hidden"
              src="images/backgrounds/RectangleLine.webp"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default ProductSection;
