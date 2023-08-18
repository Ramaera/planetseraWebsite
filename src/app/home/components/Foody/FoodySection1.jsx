import { useSelector } from "react-redux";

const FoodySection1 = () => {
  const colorMe = useSelector((state) => state.colorUs.color);

  return (
    <div className="basis-5/12 p-14">
      <div data-aos="fade-up" data-aos-anchor-placement="top-bottom">
        <h3 className="mt-28 mb-7 text-white text-[40px] font-medium	leading-[45px] md:leading-[56px] tracking-[0.07em]">
          Spices - that are true to their taste
        </h3>
        <div className="taste_line"></div>
      </div>
      <div data-aos="fade-down" data-aos-anchor-placement="top-bottom">
        <p className="text-white text-[18px] font-light leading-[30px] mb-3">
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
