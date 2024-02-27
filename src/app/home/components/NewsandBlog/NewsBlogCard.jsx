"use client";
import { useSelector } from "react-redux";
import BlogData from "@/app/blog/components/BlogData";
import Link from "next/link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import BuynowBtn from "@/components/BuynowBtn/index";

const NewsBlogCard = () => {
  const colorMe = useSelector((state) => state.colorUs.color);
  const BlogNewsData = BlogData;

  return (
    <div className="flex w-full">
      <div className="flex p-2 md:p-6 flex-wrap w-full justify-center ">
        {BlogNewsData?.slice(0, 3).map((item, index) => {
          if (!item) {
            return null;
          }
          return (
            <>
              <div
                key={index}
                className={`m-2 sm:w-[30%]  justify-items-center flex items-center flex-col border-gray-200 border-[1px] rounded-xl p-1 sm:p-3 group cursor-pointer`}>
                <div className="flex rounded-xl w-full relative overflow-hidden">
                  <Link href={`/blog/${item.id}`}>
                    <img
                      className="rounded-md sm:group-hover:scale-110 transition duration-700 "
                      loading="lazy"
                      src={item.blogImg}
                      alt="Planetsera Blog"
                      title={item.blogName}
                    />
                  </Link>
                </div>
                <div className="mt-2">
                  <Link href={`/blog/${item.id}`}>
                    <h5 className="font-[Montserrat] text-[13.5px] font-semibold sm:text-xl 2xl:text-2xl">
                      {item?.blogName}
                    </h5>
                    {/* {console.log(item.blogHeading)} */}
                    <p>{item?.blogHeading} . . . .</p>

                    <h6 className="mt-2 text-gray-600 font-semibold">
                      Read More
                      <ArrowForwardIcon style={{ color: `${colorMe}` }} />
                    </h6>
                  </Link>
                </div>
              </div>
            </>
          );
        })}
        <div>
          <BuynowBtn
            link="/blog"
            text={"More Blogs"}
            sectionClass="responsiveBtn"
          />
        </div>
      </div>
    </div>
  );
};

export default NewsBlogCard;
