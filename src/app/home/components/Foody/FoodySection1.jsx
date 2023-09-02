import { useSelector } from "react-redux";

const FoodySection1 = () => {
  const colorMe = useSelector((state) => state.colorUs.color);

  return (
    <div className="basis-5/12 py-14 pl-14">
      <div
        data-aos="fade-up"
        className="mb-7"
        data-aos-anchor-placement="top-bottom">
        <h3 className="md:mt-10 text-white text-[35px] font-semibold	leading-[45px] md:leading-[50px] tracking-wide md:w-[90%] xl:w-[80%] p-2 md:p-unset">
          Spices - that are <br />
          true to their taste
        </h3>
        <div className="taste_line mx-2"></div>
      </div>
      <div data-aos="fade-down" data-aos-anchor-placement="top-bottom">
        <p className="text-white text-[16px] font-light leading-[30px] mb-3 p-2 md:p-unset">
          Spices that are true to their original flavors are available for
          indulgence. Our collection captures the very best in pure taste, from
          the golden allure of Haldi to the powerful kick of Mirch and the
          lovely perfume of Dhaniya. Our spices, which are painstakingly sourced
          and prepared, add genuine goodness and purity to your culinary
          experiences while preserving each spice's authentic flavor in every
          serving.
        </p>
      </div>
      <div className="basis-4/12"></div>
      <div class="clearfix"></div>
    </div>
  );
};

export default FoodySection1;
