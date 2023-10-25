"use client";
import React, { useEffect, useState } from "react";
import LatestBlog from "./components/LatestBlog";

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <LatestBlog />
    </>
  );
};

export default Blog;
