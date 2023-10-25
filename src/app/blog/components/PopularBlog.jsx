import { useState } from "react";
import BlogData from "./BlogData";
import Slider from "react-slick";
import Link from "next/link";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSelector } from "react-redux";

const PopularBlog = () => {
  const colorMe = useSelector((state) => state.colorUs.color);
  const PopularBlogData = BlogData.filter((item) => item.type === "popular");
  const [slider, setSlider] = useState(null);

  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const nextSlide = () => {
    slider.slickNext();
  };

  const prevSlide = () => {
    slider.slickPrev();
  };

  return (
    <>
      <div className="my-10 lg:mx-12">
        <h3 className="text-[#1E1E1E] text-3xl font-['Montserrat'] font-bold text-center">
          Popular Blog
        </h3>

        <Slider {...settings} ref={(c) => setSlider(c)}>
          {PopularBlogData.map((item) => (
            <div key={item.id} className="my-2  px-4">
              <div className="border-gray-200 border-[1px] rounded-xl px-[8px] py-2 w-full group cursor-pointer">
                <Link href={`/blog/${item.id}`}>
                  <div className="relative rounded-lg overflow-hidden">
                    <img
                      className="rounded-lg sm:group-hover:scale-110 transition duration-700  object-cover"
                      src={item.blogImg}
                      alt="Planetsera Spices"
                      title={item.blogName}
                    />
                  </div>

                  <p className="font-[Montserrat] text-[13px] sm:text-base font-medium text-center">
                    {item?.blogName}
                  </p>
                </Link>
              </div>
            </div>
          ))}
        </Slider>
        <div className="mt-4 flex justify-center">
          <button
            onClick={prevSlide}
            style={{
              background: colorMe,
            }}
            className="px-4 py-2 text-white rounded-3xl sm:hover:font-semibold mr-2 ">
            Prev
          </button>
          <button
            onClick={nextSlide}
            style={{
              background: colorMe,
            }}
            className="px-4 py-2 text-white rounded-3xl sm:hover:font-semibold ">
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default PopularBlog;
