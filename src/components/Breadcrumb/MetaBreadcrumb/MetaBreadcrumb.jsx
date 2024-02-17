"use client";
import { usePathname, useRouter } from "next/navigation";
import Head from "next/head";

export const MetaBreadcrumb = () => {
  const router = useRouter();
  const currentRoute = usePathname();
  return (
    <>
      <Head />
      {/*-----------------------Schema for Metacrumb coriander-powder--------------------------------------------------- */}
      {currentRoute === "/product/coriander-powder" && (
        <>
          <script type="application/ld+json">
            {`
{
  "@context": "https://schema.org/", 
  "@type": "BreadcrumbList", 
  "itemListElement": [{
    "@type": "ListItem", 
    "position": 1, 
    "name": "Home",
    "item": "https://www.planetsera.com/"  
  },{
    "@type": "ListItem", 
    "position": 2, 
    "name": "Product",
    "item": "https://www.planetsera.com/product"  
  },{
    "@type": "ListItem", 
    "position": 3, 
    "name": "Coriander Powder",
    "item": "https://www.planetsera.com/product/coriander-powder"  
  }]
}
`}
          </script>
        </>
      )}
    </>
  );
};
