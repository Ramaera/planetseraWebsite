"use client";
import { useEffect } from "react";
import BlogDetails from "../components/BlogDetails/BlogDetails";

const index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <BlogDetails />
    </>
  );
};

export default index;
