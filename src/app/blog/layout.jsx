"use client";
import { useRouter } from "next/navigation";
import BlogHeader from "./components/BlogHeader";
import CategoriesBlog from "./components/CategoriesBlog";
import RecentBlog from "./components/RecentBlog";
import Breadcrumbs from "@/components/Breadcrumb";
import PopularBlog from "./components/PopularBlog";

const BlogLayout = ({ children }) => {
  return (
    <>
      <BlogHeader />
      <Breadcrumbs capitalizeLinks />
      <div className="w-full flex flex-col sm:flex-row mt-6 sm:mt-10">
        {/* left side */}
        <div className="sm:w-3/12 flex flex-col items-center sm:ml-16 order-2 sm:order-1 mx-4 sm:mx-0 sm:sticky sm:top-[85px] sm:h-full scroll-smooth	">
          {/* <CategoriesBlog /> */}
          <RecentBlog />
        </div>
        {/* right side */}
        <div className="sm:w-9/12 order-1 sm:order-2">{children}</div>
      </div>
      <PopularBlog />
    </>
  );
};

export default BlogLayout;
