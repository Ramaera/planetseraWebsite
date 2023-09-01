import { useSelector } from "react-redux";

const FoodySection1 = () => {
  const colorMe = useSelector((state) => state.colorUs.color);

  return (
    <div className="basis-5/12 py-14 pl-14">
      <div
        data-aos="fade-up"
        className="mb-7"
        data-aos-anchor-placement="top-bottom">
        <h3 className="md:mt-16 text-white text-[35px] font-normal	leading-[45px] md:leading-[50px] tracking-wide md:w-[90%] xl:w-[80%] p-2 md:p-unset">
          Spices - that are <br />
          true to their taste
        </h3>
        <div className="taste_line mx-2"></div>
      </div>
      <div data-aos="fade-down" data-aos-anchor-placement="top-bottom">
        <p className="text-white text-[16px] font-light leading-[30px] mb-3 p-2 md:p-unset">
          With no artificial preservatives, we ensure that Planetsera spices are
          produced with the essence of nature and are true to their taste.
          Caring for your health and requirements, we utilize the most advanced
          technologies for the production of these spices, so that we do not
          keep you waiting to eat your favourite dishes served with the homely
          touch of the finely ground spices.
        </p>
      </div>
      <div className="basis-4/12"></div>
      <div class="clearfix"></div>
    </div>
  );
};

export default FoodySection1;
