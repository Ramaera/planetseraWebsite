import "./MasalaGallery.css";
import Slider from "infinite-react-carousel";
import BuynowBtn from "../../../../components/BuynowBtn";

const settings = {
  autoplay: true,
  autoplaySpeed: 3000,
  dots: true,
};

const MasalaGallery = () => {
  const masala1 = "/images/backgrounds/ourproduct-1.webp";
  const masala2 = "/images/backgrounds/ourproduct-2.webp";
  const masala3 = "/images/backgrounds/ourproduct-3.webp";
  const masala4 = "/images/backgrounds/ourproduct-4.webp";

  return (
    <>
      <div className="md:hidden my-8 pl-2">
        <Slider {...settings}>
          <div>
            <img
              alt="masala"
              loading="lazy"
              src={masala1}
              className=" mx-auto h-1/2"
            />
            <h3 className="text-center invention-text">Sabji Masala</h3>
            <BuynowBtn link={`/products/sabji-masala`} text={"Buy Now"} />
          </div>
          <div>
            <img
              alt="masala"
              loading="lazy"
              src={masala2}
              className=" mx-auto h-1/2"
            />
            <h3 className="text-center invention-text">Chat Masala</h3>

            <BuynowBtn link={`/products/chat-masala`} text={"Buy Now"} />
          </div>
          <div>
            <img
              alt="masala"
              loading="lazy"
              src={masala3}
              className=" mx-auto h-1/2"
            />
            <h3 className="text-center invention-text">Amchur Masala</h3>
            <BuynowBtn link={`/products/amchur-powder`} text={"Buy Now"} />
          </div>
          <div>
            <img
              alt="masala"
              loading="lazy"
              src={masala4}
              className=" mx-auto h-1/2"
            />
            <h3 className="text-center invention-text">Garam Masala</h3>

            <BuynowBtn link={`/products/garam-masala`} text={"Buy Now"} />
          </div>
        </Slider>
      </div>
      <div className="md:flex hidden  justify-evenly mb-32 md:mb-20">
        <div>
          <img alt="masala" loading="lazy" src={masala1} width={"360px"} />
          <h3 className="text-center invention-text">Sabji Masala</h3>

          <BuynowBtn link={`/products/sabji-masala`} text={"Buy Now"} />
        </div>
        <div>
          <img alt="masala" loading="lazy" src={masala2} width={"360px"} />
          <h3 className="text-center invention-text">Chat Masala</h3>

          <BuynowBtn link={`/products/chat-masala`} text={"Buy Now"} />
        </div>
        <div>
          <img alt="masala" loading="lazy" width={"360px"} src={masala3} />
          <h3 className="text-center invention-text">Amchur Masala</h3>
          <BuynowBtn link={`/products/amchur-powder`} text={"Buy Now"} />
        </div>
        <div>
          <img alt="masala" loading="lazy" src={masala4} width={"360px"} />
          <h3 className="text-center invention-text">Garam Masala</h3>
          <BuynowBtn link={`/products/garam-masala`} text={"Buy Now"} />
        </div>
      </div>
    </>
  );
};
export default MasalaGallery;
