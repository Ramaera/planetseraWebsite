"use client";
import React, { useEffect } from "react";
import BlogHeader from "@/app/blog/components/BlogHeader/BlogHeader";
import BlogSection from "./components/BlogSection/BlogSection";

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <BlogHeader />
      <BlogSection />
    </>
  );
};

export default Blog;
