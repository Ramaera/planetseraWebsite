import BlogData from "./blog/components/BlogData";
import axios from "axios";

const URL = "https://www.planetsera.com";

export default async function sitemap() {
  const allProducts = await axios.get(
    // "http://localhost:6770/rest-get-all-products/allProducts",
    "http://planetseraapi.planetsera.com/rest-get-all-products/allProducts",

    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  //   console.log("allProducts-------->>>>>", allProducts.data);
  const products = allProducts.data.map((product) => ({
    url: `${URL}/product/${product?.productUrl}`,
    lastModified: product.updatedAt,
  }));

  const posts = BlogData.map((data) => {
    const originalDate = new Date(data.blogDate);

    const formattedDate = originalDate.toISOString();

    return {
      url: `${URL}/blog/${data.id}`,
      lastModified: formattedDate,
    };
  });

  const routes = [
    "",
    "/shop",
    "/blog",
    "/product",
    "/about",
    "/contact-us",
  ].map((route) => ({
    url: `${URL}${route}`,
    lastModified: new Date().toISOString(),
  }));

  return [...routes, ...posts, ...products];
}
