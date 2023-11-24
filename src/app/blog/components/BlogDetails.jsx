"use client";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import BlogData from "./BlogData";
import { useSelector } from "react-redux";

const BlogDetails = () => {
  const { id } = useParams();
  const specificBlog = BlogData.find((list) => list.id === id);
  if (!specificBlog) return;

  const colorMe = useSelector((state) => state.colorUs.color);
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);

  return (
    <>
      <div className="mx-4 sm:mr-16 sm:ml-10 mb-4 justify-items-center flex items-center flex-col border-gray-200 border-[1px] rounded-xl p-1 sm:p-4 ">
        <div className="flex items-center  justify-center rounded-xl w-full">
          <img
            className="rounded-md w-full  "
            loading="lazy"
            src={specificBlog.blogImg}
            alt="Planetsera Spices"
            title={specificBlog.blogName}
          />
        </div>
        <div className="justify-start flex w-full mt-4 mb-2">
          <h3
            className="rounded-2xl py-1 px-3 text-white"
            style={{ background: `${colorMe}` }}
          >
            {specificBlog?.blogDate}
          </h3>
        </div>
        <div className="mt-2">
          <h4 className="font-[Montserrat] font-semibold sm:text-3xl ">
            {specificBlog?.blogName}
          </h4>
          <p className="my-3">{specificBlog?.blogDetail}</p>
        </div>
        <div className="max-w-4xl 2xl:max-w-full mx-auto">
          {specificBlog?.blogDescription?.map((item, index) => (
            <div key={index} className="my-2">
              <h5 className="font-semibold sm:text-xl">{item.blogList}</h5>
              <h6 className="text-gray-700 mb-4">{item.blogListAbout}</h6>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BlogDetails;
