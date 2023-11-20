"use client";
import AboutHeader from "@/app/about/components/AboutHeader/AboutHeader";
import ReasonsChoose from "@/app/about/components/ReasonsChoose/ReasonsChoose";
import IngredientSection from "@/app/about/components/Ingredients/IngredientSection";
import AdvanceSection from "@/app/about/components/AdvanceTechnology/AdvanceSection";
import ProcessSection from "@/app/about/components/Process/ProcessSection";
import WhyPlanetseraSection from "@/app/about/components/WhyPlanetsera/WhyPlanetseraSection";
import StorySection from "@/app/about/components/Story/StorySection";
import QualitySection from "@/app/about/components/QualityManagement/QualitySection";
import TechnologyPeopleSection from "@/app/about/components/TechnologyPeople/TechnologyPeopleSection";
import Gallery from "@/app/about/components/Gallery/Gallery";
import DiscoverSection from "@/app/about/components/Discover/DiscoverSection";
import DishSection from "@/app/about/components/Dish/DishSection";
import DigitalGallery from "@/app/about/components/Digital/DigitalGallery";
import PlanetseraSection from "@/app/about/components/PlanetseraMasala/PlanetseraSection";
import AboutBannerSection from "@/app/about/components/AboutBanner/AboutBannerSection";
import CompanySection from "@/app/about/components/CompanyGallery/CompanySection";
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
      <script type="application/ld+json">
        {`
{
  "@context": "http://schema.org",
  "@type": "Organization",
  "name": "PlanetsEra",
  "url": "https://www.planetsera.com/",
  "logo": "logo url",
  "description": "Planetsera Masala is a centre for the authentic flavours of India. Today, we are India’s favourite for our spicy masalas and best delicious Spices!",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "H-150",
    "addressLocality": "Sector-63",
    "addressRegion": "Gautam Budh Nagar",
    "postalCode": "201301",
    "addressCountry": "India"
  }
}
`}
      </script>
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
      <link rel="canonical" href="https://www.planetsera.com/about" />
      <meta property="og:url" content="https://www.planetsera.com/about" />
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
      <meta property="twitter:url" content="https://www.planetsera.com/about" />
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
      <StorySection />
      <QualitySection />
      <TechnologyPeopleSection />
      {/* <DiscoverSection /> */}
      {/* <DishSection /> */}

      {/* <PlanetseraSection /> */}
      <IngredientSection />
      <AdvanceSection />
      <ReasonsChoose />
      {/* <DigitalGallery /> */}
      <ProcessSection />
      <WhyPlanetseraSection />
      {/* <AboutBannerSection /> */}
      {/* <CompanySection /> */}
      <Gallery />
    </>
  );
};

export default About;
