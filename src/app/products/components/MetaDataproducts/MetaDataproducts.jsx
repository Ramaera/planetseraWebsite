"use client";
import { usePathname, useRouter } from "next/navigation";
import Head from "next/head";

const MetaDataproducts = () => {
  const router = useRouter();
  const currentRoute = usePathname();
  return (
    <>
      <Head />
      {/* {currentRoute === "/products/red-chilli-powder" && (
        <>
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
          <meta
            property="twitter:url"
            content="https://www.planetsera.com/About"
          />
          <meta
            name="twitter:title"
            content="Know About Planetsera's Online Foods Spices Store | Planetsera"
          />
          <meta
            name="twitter:description"
            content="The spices from Planetsera Foods are produced using fresh ingredients, cool grinding technology, and zip-lock packaging. Learn more about Planetsera and how our spices are made without adulteration."
          />
          <meta name="twitter:image" content="banner image url" />
        </>
      )} */}

      {currentRoute === "/products/black-pepper-powder" && (
        <>
          <title>
            Buy Black Pepper Powder Online | Shop Kali Mirch Powder | Planetsera
          </title>
          <meta name="text" content="planetsera" />
          <meta
            name="title"
            content="Shop Kali Mirch Powder | Buy Black Pepper Powder Online  | Planetsera"
          />
          <meta name="description" content="Page description." />
          <meta name="keywords" content="" />
          <meta name="robots" content="index, follow" />
          <link rel="canonical" href="Current Page Url" />

          <meta property="og:url" content="Current Page Url" />
          <meta property="og:type" content="website" />
          <meta
            property="og:title"
            content="Buy Black Pepper Powder Online | Shop Kali Mirch Powder | Planetsera"
          />
          <meta property="og:description" content="Page description." />
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
          <meta property="twitter:url" content="Current Page Urlt" />
          <meta
            name="twitter:title"
            content="Shop Kali Mirch Powder | Buy Black Pepper Powder Online  | Planetsera"
          />
          <meta name="twitter:description" content="Page description." />
          <meta name="twitter:image" content="banner image url" />
        </>
      )}
    </>
  );
};

export default MetaDataproducts;
