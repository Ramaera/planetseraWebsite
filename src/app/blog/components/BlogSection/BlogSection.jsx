"use client";
import React, { useEffect, useState } from "react";
import CategoriesBlog from "./CategoriesBlog";
import LatestBlog from "./LatestBlog";
import RecentBlog from "./RecentBlog";

const BlogSection = () => {
  const [selected, setSelected] = useState("");
  return (
    <>
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

export default BlogSection;
