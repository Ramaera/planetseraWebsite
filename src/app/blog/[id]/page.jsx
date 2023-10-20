"use client";
import { useEffect, useState } from "react";
import BlogHeader from "../components/BlogHeader/BlogHeader";
import BlogDetails from "../components/BlogDetails/BlogDetails";
import CategoriesBlog from "../components/BlogSection/CategoriesBlog";
import RecentBlog from "../components/BlogSection/RecentBlog";
import LatestBlog from "../components/BlogSection/LatestBlog";
import Link from "next/link";

const index = () => {
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
          {selected ? (
            <LatestBlog selected={selected} />
          ) : (
            <BlogDetails selected={selected} />
          )}
        </div>
      </div>
    </>
  );
};

export default index;
