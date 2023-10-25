"use client";
import { useSelector } from "react-redux";
import BlogData from "./BlogData";
import Link from "next/link";

const RecentBlog = () => {
  const RecentBlogData = BlogData.map((list) => {
    if (list.type === "RecentBlog") {
      return list;
    }
  });

  return (
    <>
      <div className="mt-4">
        <h3 className="text-[#1E1E1E] text-2xl font-['Montserrat'] font-bold text-left">
          Recent Blog
        </h3>

        <div className="flex w-full" id="shop">
          <div className="flex  justify-evenly py-2 flex-wrap w-full">
            {RecentBlogData.map((item) => {
              if (!item) {
                return;
              }
              return (
                <>
                  <div className="my-2 justify-items-center flex items-center flex-row border-gray-200 border-[1px] rounded-xl px-[8px] py-2 w-full">
                    <div className=" flex items-center justify-center  w-1/2">
                      <Link href={`/blog/${item.id}`}>
                        <img
                          className="rounded-lg"
                          loading="lazy"
                          src={item.blogImg}
                          alt="Planetsera Spices"
                          title={item.blogName}
                        />
                      </Link>
                    </div>
                    <div className="w-1/2 ml-2 h-full">
                      <span className="border-[0.5px] rounded-2xl p-1 text-[11px] bg-gray-300">
                        {item?.category}
                      </span>
                      <Link href={`/blog/${item.id}`}>
                        <p className="font-[Montserrat] text-[13px]">
                          {item?.blogName}
                        </p>
                      </Link>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default RecentBlog;
