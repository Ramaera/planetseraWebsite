import { useSelector } from "react-redux";

const FoodySection1 = () => {
  const colorMe = useSelector((state) => state.colorUs.color);

  return (
    <div className="basis-5/12 py-14 pl-14">
      <div
        data-aos="fade-up"
        className="mb-7"
        data-aos-anchor-placement="top-bottom">
        <h3 className="md:mt-4 text-white text-[35px] font-semibold	leading-[45px] md:leading-[50px] tracking-wide md:w-[90%] xl:w-[80%] p-2 md:p-unset">
          Spices - that are <br />
          true to their taste
        </h3>
        <div className="taste_line mx-2"></div>
      </div>
      <div data-aos="fade-down" data-aos-anchor-placement="top-bottom">
        <p className="text-white text-[16px] font-normal leading-[30px] mb-3 p-2 md:p-unset">
          There is an amazing variety of spices at PlanetSera that really do
          taste the way they say they do. Because we care about quality, we make
          sure that every spice, from fragrant cumin to hot chilli, is carefully
          chosen and made. We know that the quality and accuracy of the spices
          you use are very important to the food you make. You can be sure that
          every spice from PlanetSera will give you the exact tastes and smells
          you want. Check out our carefully chosen collection of spices to make
          your food taste better and enjoy the real flavour of every cooking
          masterpiece. PlantSera is a place where spices come to life.
        </p>
      </div>
      <div className="basis-4/12"></div>
      <div class="clearfix"></div>
    </div>
  );
};

export default FoodySection1;
