const GalleryImageThree = () => {
  return (
    <div className="basis-12/12 relative myPhoto">
      <div class="content-overlay"></div>
      <img
        src="images/backgrounds/gallery-2.webp"
        loading="lazy"
        alt="Cardamom"
        title="Cardamom"
        className="2xl:w-[100vw]"
      />
      <div class="gallery-content">
        <h3 class="gallery-text tracking-[4px]">Cardamom</h3>
      </div>
    </div>
  );
};

export default GalleryImageThree;
