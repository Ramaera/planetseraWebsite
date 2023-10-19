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
      <div>{specificBlog?.blogName}</div>
    </>
  );
};

export default BlogDetails;
