const GalleryImageFive = () => {
  return (
    <div className="basis-12/12 relative myPhoto">
      <div class="content-overlay"></div>
      <img
        src="images/backgrounds/gallery-3.webp"
        loading="lazy"
        alt="Nutmeg"
        title="Nutmeg"
        className="2xl:w-[100vw]"
      />
      <div class="gallery-content">
        <h3 class="gallery-text tracking-[4px]">Nutmeg</h3>
      </div>
    </div>
  );
};

export default GalleryImageFive;
