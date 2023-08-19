"use client";
import AboutHeader from "./components/AboutHeader/AboutHeader";
import DiscoverSection from "./components/Discover/DiscoverSection";
import DishSection from "./components/Dish/DishSection";
import DigitalGallery from "./components/Digital/DigitalGallery";
import PlanetseraSection from "./components/PlanetseraMasala/PlanetseraSection";
import IngredientSection from "./components/Ingredients/IngredientSection";
import AdvanceSection from "./components/AdvanceTechnology/AdvanceSection";
import ProcessSection from "./components/Process/ProcessSection";
import WhyPlanetseraSection from "./components/WhyPlanetsera/WhyPlanetseraSection";
import AboutBannerSection from "./components/AboutBanner/AboutBannerSection";
import StorySection from "./components/Story/StorySection";
import QualitySection from "./components/QualityManagement/QualitySection";
import TechnologyPeopleSection from "./components/TechnologyPeople/TechnologyPeopleSection";
import CompanySection from "./components/CompanyGallery/CompanySection";
import Footer from "./components/Footer/Footer";

const About = () => {
  return (
    <>
      <AboutHeader />
      <DiscoverSection />
      <DishSection />
      <DigitalGallery />
      <PlanetseraSection />
      <IngredientSection />
      <AdvanceSection />
      <ProcessSection />
      <WhyPlanetseraSection />
      <AboutBannerSection />
      <StorySection />
      <QualitySection />
      <TechnologyPeopleSection />
      <CompanySection />
      <Footer page="about" />
    </>
  );
};

export default About;
