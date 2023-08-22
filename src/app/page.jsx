import Header from "./home/components/Header/Header";
import SectionMain from "./home/components/SectionMain/SectionMain";
import FoodySection from "./home/components/Foody/FoodySection";
import TechnologySection from "./home/components/Technology/TechnologySection";
import SolutionSection from "./home/components/SolutionSection/SolutionSection";
import ExperienceSection from "./home/components/Experience/ExperienceSection";
import MasalaGrid from "./home/components/MasalaGrid/MasalaGrid";
import Recipes from "./home/components/Recipes/Recipes";
import SpiceandHealth from "./home/components/SpiceandHealth/SpiceandHealth";
import HandPicked from "./home/components/HandpickedSpices/HandPicked";
import NewsandBlog from "./home/components/NewsandBlog/NewsandBlog";
import Spices from "./home/components/Spices/Spices";
import Review from "./home/components/Review/Review";
import Footer from "@/components/Footer/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <SectionMain />
      <FoodySection />
      <TechnologySection />
      <SolutionSection />
      <ExperienceSection />
      <MasalaGrid />
      <Recipes />
      <SpiceandHealth />
      <HandPicked />
      <NewsandBlog />
      <Spices />
      <Review />
      <Footer page={"home"} />
      {/*
       */}
    </>
  );
};

export default Home;
