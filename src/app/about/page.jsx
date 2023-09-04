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
import Footer from "@/components/Footer/Footer";
import Head from "next/head";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Head />
      <title>
        Know About Planetsera's Online Foods Spices Store | Planetsera
      </title>
      <meta name="text" content="planetsera" />
      <meta
        name="title"
        content="Know About Planetsera's Online Foods Spices Store | Planetsera"
      />
      <meta
        name="description"
        content="The spices from Planetsera Foods are produced using fresh ingredients, cool grinding technology, and zip-lock packaging. Learn more about Planetsera and how our spices are made without adulteration."
      />
      <meta
        name="keywords"
        content="sabji masala , mix masala powder , sabji masala powder , sabzi masala , best sabji masala , vegetable masala powder , red chilli , red chilli powder , chili powder , lal mirch powder , mirch powder , garam masala , garam masala ingredients , whole garam masala , black pepper powder , pepper powder , kali mirch powder , black chilies , coriander powder , dhaniya powder , dhania powder , whole coriander , dried coriander , turmeric powder , haldi powder , turmeric uses , organic turmeric powder , turmeric powder benefits , haldi packet , chaat masala , masala spices , chaat masala ingredients , chaat masala powder , masala chat , spices online , amchur powder , masala powder , amchoor powder , mango powder , cumin powder , food spices , jeera powder , masala powder , jeera powder price , spice powder , food spices , meat masala , meat masala ingredients"
      />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://www.planetsera.com/About" />
      <meta property="og:url" content="https://www.planetsera.com/About" />
      <meta property="og:type" content="website" />
      <meta
        property="og:title"
        content="Know About Planetsera's Online Foods Spices Store | Planetsera"
      />
      <meta
        property="og:description"
        content="The spices from Planetsera Foods are produced using fresh ingredients, cool grinding technology, and zip-lock packaging. Learn more about Planetsera and how our spices are made without adulteration."
      />
      <meta
        name="og_site_name"
        property="og:site_name"
        content="planetsera.com"
      />
      <meta property="og:image" content="banner image url" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="627" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="planetsera.com" />
      <meta property="twitter:url" content="https://www.planetsera.com/About" />
      <meta
        name="twitter:title"
        content="Know About Planetsera's Online Foods Spices Store | Planetsera"
      />
      <meta
        name="twitter:description"
        content="The spices from Planetsera Foods are produced using fresh ingredients, cool grinding technology, and zip-lock packaging. Learn more about Planetsera and how our spices are made without adulteration."
      />
      <meta name="twitter:image" content="banner image url" />

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
    </>
  );
};

export default About;
