import "./IngredientSection.css";
import { useSelector } from "react-redux";

const IngredientSection = () => {
  const colorMe = useSelector((state) => state.colorUs.color);

  const redOne = "/images/backgrounds/redOne.webp";
  const redTwo = "/images/backgrounds/redTwo.webp";
  const redThree = "/images/backgrounds/redThree.webp";
  const redFour = "/images/backgrounds/redFour.webp";
  const redFive = "/images/backgrounds/redFive.webp";
  const redSix = "/images/backgrounds/redSix.webp";

  const yellowOne = "/images/backgrounds/yellowOne.webp";
  const yellowTwo = "/images/backgrounds/yellowTwo.webp";
  const yellowThree = "/images/backgrounds/yellowThree.webp";
  const yellowFour = "/images/backgrounds/yellowFour.webp";
  const yellowFive = "/images/backgrounds/yellowFive.webp";
  const yellowSix = "/images/backgrounds/yellowSix.webp";

  const greenOne = "/images/backgrounds/greenOne.webp";
  const greenTwo = "/images/backgrounds/greenTwo.webp";
  const greenThree = "/images/backgrounds/greenThree.webp";
  const greenFour = "/images/backgrounds/greenFour.webp";
  const greenFive = "/images/backgrounds/greenFive.webp";
  const greenSix = "/images/backgrounds/greenSix.webp";

  return (
    <>
      <div className="container mt-20">
        <div className="basis-12/12 relative">
          <h1
            className="delicious-heading"
            style={{
              webkitTextFillColor: "transparent",
              backgroundImage: `linear-gradient(to right, ${colorMe}, ${
                colorMe + "80"
              })`,
            }}>
            Spices like no other - PlanetsEra Spices
          </h1>
          <div
            className="spices-line 2xl:hidden"
            style={{
              backgroundImage: `linear-gradient(to right, ${colorMe}, ${
                colorMe + "80"
              })`,
            }}></div>
          <p className="delicious-text  md:mb-20">
            Delicious and natural way to enhance your well-being.
          </p>
        </div>
      </div>
      <div className="container lg:flex md:flex sm:block">
        <div className="basis-12/12 lg:flex md:flex sm:block flex-col ingredWid">
          <div className="basis-5/12 flex">
            <div className="w-full basis-2/12">
              <img
                alt="masala"
                src={
                  colorMe === "#ff4f4f"
                    ? redOne
                    : colorMe === "#ffde39"
                    ? yellowOne
                    : greenOne
                }
              />
            </div>

            <div className="w-full basis-10/12 flex flex-col">
              <h1
                className="ingredient-heading mb-2"
                style={{
                  backgroundImage: `linear-gradient(to right, ${colorMe}, ${
                    colorMe + "80"
                  })`,
                }}>
                Premium ingredients
              </h1>
              <p className="ingredient-text">
                PlanetsEra spices are a perfect blend of handpicked and premium
                ingredients.
              </p>
            </div>
          </div>
          <div className="basis-5/12 flex">
            <div className="w-full basis-2/12">
              <img
                alt="masala"
                src={
                  colorMe === "#ff4f4f"
                    ? redTwo
                    : colorMe === "#ffde39"
                    ? yellowTwo
                    : greenTwo
                }
              />
            </div>

            <div className="w-full basis-10/12 flex flex-col">
              <h1
                className="ingredient-heading mb-2"
                style={{
                  backgroundImage: `linear-gradient(to right, ${colorMe}, ${
                    colorMe + "80"
                  })`,
                }}>
                Superior quality
              </h1>
              <p className="ingredient-text">
                Spices with excellent quality and taste.
              </p>
            </div>
          </div>
          <div className="basis-5/12 flex">
            <div className="w-full basis-2/12">
              <img
                alt="masala"
                src={
                  colorMe === "#ff4f4f"
                    ? redThree
                    : colorMe === "#ffde39"
                    ? yellowThree
                    : greenThree
                }
              />
            </div>

            <div className="w-full basis-10/12 flex flex-col">
              <h1
                className="ingredient-heading mb-2"
                style={{
                  backgroundImage: `linear-gradient(to right, ${colorMe}, ${
                    colorMe + "80"
                  })`,
                }}>
                Expertly blended
              </h1>
              <p className="ingredient-text">
                PlanetsEra Spices are finely ground and blended with the use of
                efficiently advanced technology.
              </p>
            </div>
          </div>
        </div>

        <div className="basis-5/12">
          <img
            alt="masala"
            src="images/backgrounds/ingredientsImg.webp"
            className="myImage-main 2xl:m-0"
          />
        </div>

        <div className="basis-5/12 flex flex-col">
          <div className="basis-5/12 flex md:flex-row-reverse md:text-right">
            <div className="w-full basis-2/12">
              <img
                alt="masala"
                src={
                  colorMe === "#ff4f4f"
                    ? redFour
                    : colorMe === "#ffde39"
                    ? yellowFour
                    : greenFour
                }
              />
            </div>

            <div className="w-full basis-10/12 flex flex-col">
              <h1
                className="ingredient-heading mb-2"
                style={{
                  backgroundImage: `linear-gradient(to right, ${colorMe}, ${
                    colorMe + "80"
                  })`,
                }}>
                Organically Grown
              </h1>
              <p className="ingredient-text">
                PlanetsEra spices are grown organically and handpicked to ensure
                hygiene and quality
              </p>
            </div>
          </div>
          <div className="basis-5/12 flex  md:flex-row-reverse md:text-right ">
            <div className="w-full basis-2/12">
              <img
                alt="masala"
                src={
                  colorMe === "#ff4f4f"
                    ? redFive
                    : colorMe === "#ffde39"
                    ? yellowFive
                    : greenFive
                }
              />
            </div>

            <div className="w-full basis-10/12 flex flex-col">
              <h1
                className="ingredient-heading mb-2"
                style={{
                  backgroundImage: `linear-gradient(to right, ${colorMe}, ${
                    colorMe + "80"
                  })`,
                }}>
                Distinctive aroma
              </h1>
              <p className="ingredient-text">
                PlanetsEra Spices have enchanting aroma that brings out the true
                flavor.
              </p>
            </div>
          </div>
          <div className="basis-5/12 flex  md:flex-row-reverse md:text-right ">
            <div className="w-full basis-2/12">
              <img
                alt="masala"
                src={
                  colorMe === "#ff4f4f"
                    ? redSix
                    : colorMe === "#ffde39"
                    ? yellowSix
                    : greenSix
                }
              />
            </div>

            <div className="w-full basis-10/12 flex flex-col">
              <h1
                className="ingredient-heading mb-2"
                style={{
                  backgroundImage: `linear-gradient(to right, ${colorMe}, ${
                    colorMe + "80"
                  })`,
                }}>
                Authentic flavours
              </h1>
              <p className="ingredient-text">
                PlanetsEra spices reflect the taste of India that relish the
                tastebuds.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <img
          alt="masala"
          src="/images/backgrounds/ingredientAB.webp"
          className="mt-10 2xl:w-full"
        />
      </div>
    </>
  );
};

export default IngredientSection;
