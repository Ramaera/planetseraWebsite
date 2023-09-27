const GalleryImageTwo = () => {
  return (
    <div className="basis-12/12 myPhoto">
      <div class="content-overlay"></div>
      <img
        src="images/backgrounds/GalleryImg.webp"
        loading="lazy"
        alt="PlanetsEra spices for every dish"
        title="A blend of perfection PlanetsEra spices for every dish."
        className="2xl:w-[100vw]"
      />

      <div class="absolute top-[0%] flex h-full items-center text-left w-full p-14">
        <h3 class="gallery-heading tracking-[1px] md:tracking-[4px]   w-full ">
          A blend of perfection
        </h3>
      </div>
    </div>
  );
};

export default GalleryImageTwo;
