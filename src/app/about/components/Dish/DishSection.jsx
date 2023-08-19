import "./DishSection.css";

const DishSection = () => {
  return (
    <div class="container relative mt-40">
      <div className="basis-12/12 lg:flex md:flex sm:block">
        <div className="basis-6/12 2xl:basis-6/12 mb-8 md:mb-0 md:mr-4">
          <img
            alt="masala"
            src="images/backgrounds/dish-1.webp"
            className="w-full"
          />
        </div>
        <div className="basis-6/12 relative 2xl:basis-6/12 md:ml-4">
          <img
            alt="masala"
            src="images/backgrounds/dish-2.webp"
            className="w-full "
          />
        </div>
      </div>
    </div>
  );
};

export default DishSection;
