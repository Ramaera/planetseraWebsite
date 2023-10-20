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
      <div className="w-full flex flex-row mt-10">
        <div className="w-3/12 flex flex-col items-center ml-16">
          <CategoriesBlog selected={selected} setSelected={setSelected} />
          <RecentBlog />
        </div>
        <div className="w-9/12">
          <LatestBlog selected={selected} />
        </div>
      </div>
    </>
  );
};

export default Blog;
