"use client";
import { useEffect, useState } from "react";
import BlogData from "../BlogData/BlogData";
import Link from "next/link";

const LatestBlog = ({ selected }) => {
  const [displayCount, setDisplayCount] = useState(4);
  // console.log("selectedCategory", selected);
  const LatestBlogData = selected
    ? BlogData.filter((list) => list.category === selected)
    : BlogData;

  const loadMore = () => {
    setDisplayCount(displayCount + 4);
  };

  useEffect(() => {
    if (selected || selected === "") {
      setDisplayCount(4);
    }
  }, [selected]);

  return (
    <>
      <div>
        <div className=" sm:text-left  flex flex-col  justify-center items-center">
          <h4 className="text-[#1E1E1E] text-2xl sm:text-4xl font-['Montserrat'] font-bold text-center">
            Our Latest Blog
          </h4>
        </div>
        <div className="flex w-full" id="shop">
          <div className="flex p-2 md:p-6 flex-wrap w-full">
            {LatestBlogData.slice(0, displayCount).map((item) => {
              if (!item) {
                return null;
              }
              return (
                <>
                  <div className=" m-2 w-[47%]  justify-items-center flex items-center flex-col border-gray-200 border-[1px] rounded-xl p-1 sm:p-3">
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
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
        {displayCount < LatestBlogData.length && (
          <div className="text-center w-full">
            <button
              className="mt-4 p-2 bg-blue-500 text-white rounded-md"
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
