import "./GallerySection.css";
import GalleryImageTwo from "./GalleryImageTwo";
import GalleryImageThree from "./GalleryImageThree";
import GalleryImageFive from "./GalleryImageFive";
import GalleryImageSix from "./GalleryImageSix";

const GallerySection = () => {
  return (
    <div className="container  px-6">
      <div className="recycleImg">
        <img alt="recycle" src="images/backgrounds/recycleInfo.webp" />
      </div>
      <div className="basis-12/12 flex justify-center w-full ">
        <div className="">
          <div class="content md:mx-4 md:my-2">
            <a>
              <GalleryImageTwo />
            </a>
          </div>
          <div class="content md:mx-4 md:my-2">
            <a>
              <GalleryImageThree />
            </a>
          </div>
        </div>

        <div className="">
          <div class="content md:mx-4 md:my-2">
            <a>
              <GalleryImageFive />
            </a>
          </div>

          <div class="content md:mx-4 md:my-2">
            <a>
              <GalleryImageSix />
            </a>
          </div>
        </div>
      </div>
      <div className="variousSpicesImg">
        <img alt="masala" src="images/backgrounds/various-spices.webp" />
      </div>
    </div>
  );
};

export default GallerySection;
