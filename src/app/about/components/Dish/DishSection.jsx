import "./DishSection.css";

const DishSection = () => {
  return (
    <div class="w-full max-w-full box-border m-auto h-auto relative mt-40">
      <div className="basis-12/12 lg:flex md:flex sm:block">
        <div className="basis-6/12 2xl:basis-6/12 mb-8 md:mb-0 md:mr-4">
          <img
            alt="Perfection"
            title="Perfection in every dish"
            src="images/backgrounds/dish-1.webp"
            className="w-full"
          />
        </div>
        <div className="basis-6/12 relative 2xl:basis-6/12 md:ml-4">
          <img
            alt="crafting"
            title="crafting exceptional level"
            src="images/backgrounds/dish-2.webp"
            className="w-full "
          />
        </div>
      </div>
    </div>
  );
};

export default DishSection;
