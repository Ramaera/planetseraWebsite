import "./footer.css";

const SideBar = () => {
  return (
    <>
      <div className="flex sidebar-container bg-black md:h-[250px]">
        <div className="basis-12/12 w-full">
          <img
            alt="sidebar"
            src="/images/backgrounds/aboutSide.webp"
            className="h-96 block w-full mx-auto"
          />
        </div>
      </div>
    </>
  );
};

export default SideBar;
