import NewsBlogCard from "./NewsBlogCard";
import NewsInfo from "./NewsInfo";

const NewsandBlog = () => {
  return (
    <div className="newsandblog mx-auto relative">
      <NewsInfo />
      <div className="flex flex-row justify-around flex-wrap mt-2  mx-auto">
        <NewsBlogCard />
      </div>
    </div>
  );
};

export default NewsandBlog;
