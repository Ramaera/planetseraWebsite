"use client";
import React, { useEffect, useState } from "react";
import BlogHeader from "@/app/blog/components/BlogHeader/BlogHeader";
import CategoriesBlog from "./components/BlogSection/CategoriesBlog";
import RecentBlog from "./components/BlogSection/RecentBlog";
import LatestBlog from "./components/BlogSection/LatestBlog";

const Blog = () => {
  const [selected, setSelected] = useState("");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <BlogHeader />
      <div className="w-full flex flex-col sm:flex-row mt-10 ">
        <div className="sm:w-3/12 flex flex-col items-center sm:ml-16 order-2 sm:order-1 mx-4 sm:mx-0">
          <CategoriesBlog selected={selected} setSelected={setSelected} />
          <RecentBlog />
        </div>
        <div className="sm:w-9/12 order-1	sm:order-2">
          <LatestBlog selected={selected} />
        </div>
      </div>
    </>
  );
};

export default Blog;
