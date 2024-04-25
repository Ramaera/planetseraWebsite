import BlogData from "./blog/components/BlogData";
import axios from "axios";

const URL = "https://www.planetsera.com";

export default async function sitemap() {
  const allProducts = await axios.get(
    "http://localhost:6770/rest-get-all-products/allProducts",
    // "http://planetseraapi.planetsera.com/rest-get-all-products/allProducts",

    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  //   console.log("allProducts-------->>>>>", allProducts.data);
  const products = allProducts.data.map((product) => ({
    url: `${URL}/product/${product?.productUrl}`,
    lastModified: product.updatedAt.slice(0, 10),
  }));

  const posts = BlogData.map((data) => ({
    url: `${URL}/blog/${data.id}`,
    lastModified: data.blogDate,
  }));

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
