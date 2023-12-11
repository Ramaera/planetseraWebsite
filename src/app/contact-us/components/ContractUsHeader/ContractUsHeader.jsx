import "@/public/styles/contactUsHeader.css";
import NavigationMobile from "@/components/Navigation/NavigationMobile";
import NavItem from "@/components/Navigation/NavItem";

const ContactUsHeader = () => {
  const image = "/images/backgrounds/Headerimage.webp";
  return (
    <>
      <div className="navMobile ">
        <NavigationMobile />
      </div>
      {<NavItem page={"contactUs"} />}
      <div
        className="bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <div className="basis-12/12 flex justify-end ml-auto items-baseline detailContainer "></div>

        <h1 className="text-white text-center pt-16 md:py-[20vh]  md:mx-4 mx-4 contactText text-2xl md:text-6xl ">
          Spice up your life - contact us with any inquiries or requests.
        </h1>
        <div className="">
          <img
            alt="contact us bg"
            src="images/backgrounds/Frame.webp"
            className="bloc mx-auto contact_img"
          />
          <p className="text-center md:text-6xl text-2xl mt-[-5vh] md:mt-[-19vh] md:tracking-[18px] tracking-[4px] font-light 2xl:mt-[-18vh] 2xl:mx-[20vh] ">
            Contact Us
          </p>
        </div>
      </div>
    </>
  );
};
export default ContactUsHeader;
