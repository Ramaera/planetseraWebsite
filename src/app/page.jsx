"use client";
import { useEffect, useState } from "react";
import Header from "@/app/home/components/Header/Header";
import SectionMain from "@/app/home/components/SectionMain/SectionMain";
import FoodySection from "@/app/home/components/Foody/FoodySection";
import TechnologySection from "@/app/home/components/Technology/TechnologySection";
import SolutionSection from "@/app/home/components/SolutionSection/SolutionSection";
import ExperienceSection from "@/app/home/components/Experience/ExperienceSection";
import MasalaGrid from "@/app/home/components/MasalaGrid/MasalaGrid";
import Recipes from "@/app/home/components/Recipes/Recipes";
import SpiceandHealth from "@/app/home/components/SpiceandHealth/SpiceandHealth";
import HandPicked from "@/app/home/components/HandpickedSpices/HandPicked";
import NewsandBlog from "@/app/home/components/NewsandBlog/NewsandBlog";
import Spices from "@/app/home/components/Spices/Spices";
import Review from "@/app/home/components/Review/Review";
import Head from "next/head";
import { fetchData } from "@/api";

const Home = () => {
  // const [dataProduct, setDataProduct] = useState([]);
  useEffect(() => {
    const fetchDataAndNavigate = async () => {
      const accessToken = await localStorage.getItem("accessToken");
      if (accessToken) {
        try {
          const data = await fetchData();
          // setDataProduct(data);
        } catch (error) {
          // Handle error
        }
      }
    };

    fetchDataAndNavigate();
  }, []);

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
        Buy Best Spices From Affordable Online Spices Store | planetsera
      </title>
      <meta name="text" content="planetsera" />
      <meta
        name="title"
        content="Buy Best Spices From Affordable Online Spices Store | planetsera"
      />
      <meta
        name="description"
        content="Planetsera Masala is a centre for the authentic flavours of India. Today, we are India’s favourite for our spicy masalas and best delicious Spices!"
      />
      <meta
        name="keywords"
        content="sabji masala , mix masala powder , sabji masala powder , sabzi masala , best sabji masala , vegetable masala powder , red chilli , red chilli powder , chili powder , lal mirch powder , mirch powder , garam masala , garam masala ingredients , whole garam masala , black pepper powder , pepper powder , kali mirch powder , black chilies , coriander powder , dhaniya powder , dhania powder , whole coriander , dried coriander , turmeric powder , haldi powder , turmeric uses , organic turmeric powder , turmeric powder benefits , haldi packet , chaat masala , masala spices , chaat masala ingredients , chaat masala powder , masala chat , spices online , amchur powder , masala powder , amchoor powder , mango powder , cumin powder , food spices , jeera powder , masala powder , jeera powder price , spice powder , food spices , meat masala , meat masala ingredients"
      />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://www.planetsera.com" />
      <meta property="og:url" content="https://www.planetsera.com" />
      <meta property="og:type" content="website" />
      <meta
        property="og:title"
        content="Buy Best Spices From Affordable Online Spices Store | planetsera"
      />
      <meta
        property="og:description"
        content="Planetsera Masala is a centre for the authentic flavours of India. Today, we are India’s favourite for our spicy masalas and best delicious Spices!"
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
      <meta property="twitter:url" content="https://www.planetsera.com" />
      <meta
        name="twitter:title"
        content="Buy Best Spices From Affordable Online Spices Store | planetsera"
      />
      <meta
        name="twitter:description"
        content="Planetsera Masala is a centre for the authentic flavours of India. Today, we are India’s favourite for our spicy masalas and best delicious Spices!"
      />
      <meta name="twitter:image" content="banner image url" />

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
    </>
  );
};

export default Home;
