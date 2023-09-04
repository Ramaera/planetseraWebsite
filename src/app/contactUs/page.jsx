"use client";
import ContactUsHeader from "./components/ContractUsHeader/ContractUsHeader";
import ContactUsCentre from "./components/ContactUsCentre/ContactUsCentre";
import AboutFooter from "./components/AboutFooter/AboutFooter";
import Head from "next/head";
import { useEffect } from "react";

const ContactUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Head />
      <title>
        Contact Us | The Best online Spices Brand in India | Planetsera
      </title>
      <meta name="text" content="planetsera" />
      <meta
        name="title"
        content="Contact Us | the Best online Spices Brand in India | Planetsera"
      />
      <meta
        name="description"
        content="Contact us related to any query about Masala & Spices We at Planetsera Spices best masala & Spices online Store in India"
      />
      <meta name="keywords" content="Page Keyword" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://www.planetsera.com/ContactUsl" />

      <meta property="og:url" content="https://www.planetsera.com/ContactUs" />
      <meta property="og:type" content="website" />
      <meta
        property="og:title"
        content="/Contact Us | the Best online Spices Brand in India | Planetsera"
      />
      <meta
        property="og:description"
        content="Contact us related to any query about Masala & Spices We at Planetsera Spices best masala & Spices online Store in India"
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
      <meta
        property="twitter:url"
        content="https://www.planetsera.com/ContactUs"
      />
      <meta
        name="twitter:title"
        content="Contact Us | the Best online Spices Brand in India | Planetsera"
      />
      <meta
        name="twitter:description"
        content="Contact us related to any query about Masala & Spices We at Planetsera Spices best masala & Spices online Store in India"
      />
      <meta name="twitter:image" content="banner image url" />
      <ContactUsHeader />
      <ContactUsCentre />
    </>
  );
};

export default ContactUs;
