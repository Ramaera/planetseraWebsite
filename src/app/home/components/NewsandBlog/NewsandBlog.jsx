import Cards from "./Cards";
import "./newsandblog.css";
import NewsInfo from "./NewsInfo";
import { NewsData } from "./Newsdata";
const newsCards = NewsData.map((item) => {
  return (
    <div className="">
      <Cards item={item} />
    </div>
  );
});
const NewsandBlog = () => {
  return (
    <div className="newsandblog mx-auto relative">
      <NewsInfo />
      <div className="flex flex-row justify-around flex-wrap mt-2 md:mt-12 mx-auto">
        {newsCards}
      </div>
    </div>
  );
};

export default NewsandBlog;
