"use client";
import ContactUsHeader from "@/app/contact-us/components/ContractUsHeader/ContractUsHeader";
import ContactUsCentre from "@/app/contact-us/components/ContactUsCentre/ContactUsCentre";
import Head from "next/head";
import { useEffect } from "react";

const ContactUs = () => {
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
      <link rel="canonical" href="https://www.planetsera.com/contact-us" />

      <meta property="og:url" content="https://www.planetsera.com/contact-us" />
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
        content="https://www.planetsera.com/contact-us"
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
