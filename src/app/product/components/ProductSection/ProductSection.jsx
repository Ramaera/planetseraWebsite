import "@/public/styles/productSection.css";

const ProductSection = () => {
  return (
    <div className="flex justify-center flex-col">
      <div className="w-full max-w-full box-border mx-auto h-auto flex justify-center sm:mt-[-4rem]  2xl:mt-0">
        <img
          alt="bg"
          loading="lazy"
          src="images/backgrounds/spi.webp"
          className=" "
        />
      </div>

      <div className="w-full max-w-full box-border m-auto h-auto bg-contain flex  mt-[-50%] md:mt-[-18rem] flex-wrap relative justify-center">
        <img
          src="/images/backgrounds/productSection.webp"
          alt="Spices with incredible taste"
          title="Spices that aid gut health with incredible taste"
        />
        <div className="basis-12/12 flex justify-center items-center w-full h-full absolute">
          <h2 className="ProductSection-text tracking-[4px] md:tracking-[6px] z-10">
            Spices that aid gut health
            <br /> with incredible taste
            <img
              alt="bg"
              className="hidden md:block"
              src="images/backgrounds/RectangleLine.webp"
            />
          </h2>
        </div>
      </div>
    </div>
  );
};
export default ProductSection;
