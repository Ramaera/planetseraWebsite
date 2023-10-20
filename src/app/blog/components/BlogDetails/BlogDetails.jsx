"use client";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import BlogData from "../BlogData/BlogData";

const BlogDetails = () => {
  const { id } = useParams();
  const specificBlog = BlogData.find((list) => list.id === id);
  if (!specificBlog) return notFound();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="mr-16 ml-10 mb-4 justify-items-center flex items-center flex-col border-gray-200 border-[1px] rounded-xl p-1 sm:p-4 ">
        <div className="flex items-center  justify-center rounded-xl w-full">
          <img
            className="rounded-md w-full"
            loading="lazy"
            src={specificBlog.blogImg}
            alt="Planetsera Spices"
            title={specificBlog.blogName}
          />
        </div>
        <div className="mt-2">
          <h4 className="font-[Montserrat] text-[13.5px] font-semibold sm:text-3xl ">
            {specificBlog?.blogName}
          </h4>
          <p className="my-3">{specificBlog?.blogDetail}</p>
        </div>
        <div className="max-w-4xl mx-auto">
          {specificBlog?.blogDescription?.map((item, index) => (
            <div key={index} className="my-2">
              <h5 className="font-semibold sm:text-xl">{item.blogList}</h5>
              <p className="text-gray-700 mb-4">{item.blogListAbout}</p>
              {item.blogListAbout2 && (
                <p className="text-gray-700 mb-4">{item.blogListAbout2}</p>
              )}
              {item.blogListAbout3 && (
                <p className="text-gray-700 mb-4">{item.blogListAbout3}</p>
              )}
              {item.blogListAbout4 && (
                <p className="text-gray-700 mb-4">{item.blogListAbout}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BlogDetails;
