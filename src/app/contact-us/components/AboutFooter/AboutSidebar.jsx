import "./AboutFooter.css";

const AboutSideBar = () => {
  return (
    <>
      <div className="flex sidebar-container bg-black md:h-[250px]">
        <div className="basis-12/12 w-full">
          <img
            alt="masala"
            src="/images/backgrounds/contact_side.webp"
            className="h-96 block w-full mx-auto"
          />
        </div>
      </div>
    </>
  );
};

export default AboutSideBar;
