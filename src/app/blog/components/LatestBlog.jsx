"use client";
import { useEffect, useRef, useState } from "react";
import BlogData from "./BlogData";
import Link from "next/link";
import { useSelector } from "react-redux";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const LatestBlog = () => {
  const colorMe = useSelector((state) => state.colorUs.color);
  const [displayCount, setDisplayCount] = useState(4);
  const LatestBlogData = BlogData;
  const contentRef = useRef();

  const isClient = typeof window !== "undefined";

  const loadMore = () => {
    setDisplayCount(displayCount + 4);
    if (isClient && window.innerWidth <= 768) {
      contentRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    setDisplayCount(4);
  }, []);

  return (
    <>
      <div>
        <div className=" sm:text-left  flex flex-col  justify-center items-center">
          <h3 className="text-[#1E1E1E] text-2xl sm:text-4xl font-['Montserrat'] font-bold text-center">
            Our Latest Blog
          </h3>
        </div>
        <div className="flex w-full" id="shop">
          <div className="flex p-2 md:p-6 flex-wrap w-full">
            {LatestBlogData.slice(0, displayCount).map((item, index) => {
              if (!item) {
                return null;
              }
              return (
                <>
                  <div
                    key={index}
                    className={`m-2 sm:w-[47%]  justify-items-center flex items-center flex-col border-gray-200 border-[1px] rounded-xl p-1 sm:p-3 `}>
                    <div className="flex items-center  justify-center rounded-xl  w-full">
                      <Link href={`/blog/${item.id}`}>
                        <img
                          className="rounded-md"
                          loading="lazy"
                          src={item.blogImg}
                          alt="Planetsera Spices"
                          title={item.blogName}
                        />
                      </Link>
                    </div>
                    <div className="mt-2">
                      <Link href={`/blog/${item.id}`}>
                        <h5 className="font-[Montserrat] text-[13.5px] font-semibold sm:text-xl 2xl:text-2xl">
                          {item?.blogName}
                        </h5>
                      </Link>
                      <p>{item?.blogDetail}</p>
                      <Link href={`/blog/${item.id}`}>
                        <h6 className="mt-2 text-gray-600 font-semibold">
                          Read More
                          <ArrowForwardIcon style={{ color: `${colorMe}` }} />
                        </h6>
                      </Link>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
        {displayCount < LatestBlogData.length && (
          <div
            ref={contentRef}
            className="text-center w-full mb-6 sm:mb-6 sm:mt-4">
            <button
              style={{
                background: ` ${colorMe}`,
              }}
              className="py-3 px-6 text-white rounded-md hover:font-medium"
              onClick={loadMore}>
              Load More
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default LatestBlog;
