"use client";
import React, { useState } from "react";
import NavItem from "@/components/Navigation/NavItem";
import NavigationMobile from "@/components/Navigation/NavigationMobile";
import { Get_All_Products } from "@/apollo/queries";
import { useMutation, useQuery } from "@apollo/client";
import { useParams, useRouter } from "next/navigation";
import { UPDATE_PRODUCT_VARIANTS } from "@/apollo/queries";
import AddVariant from "../../addVariant/[id]/page";
import Link from "next/link";
import handleImageUpload from "@/utils/upload";

const Page = ({ searchParams }) => {
  const route = useRouter();
  const [updateProductVariants] = useMutation(UPDATE_PRODUCT_VARIANTS);

  const [product, setProduct] = useState({
    name: searchParams?.title,
    price: searchParams?.price,
    stock: searchParams?.stock,
    weight: searchParams.weight,
    mainImage: searchParams?.imageUrl[0] || "",
    backImage: searchParams?.imageUrl[1] || "",
    contentImage: searchParams?.imageUrl[2] || "",
  });

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const updatedProduct = { ...product };
    updatedProduct[name] = value;
    setProduct(updatedProduct);
  };

  const handleUpload = async (productName, file) => {
    const imgUrl = await handleImageUpload(file);
  };

  const handleImageChange = async (e, imageType, product) => {
    const imageFile = e.target.files[0];

    // Extract the original file extension
    const fileExtension = imageFile.name.split(".").pop();

    // Determine the product name and append "Bg" if needed
    let productName = product?.name?.replace(/\s/g, "");
    if (imageType === "mainImage" && product.weight === "500") {
      productName += "-500";
    }
    if (imageType === "backImage") {
      productName += "-Back-" + product?.weight;
    }
    if (imageType === "contentImage") {
      productName += "-BackContent-" + product?.weight;
    }

    // Construct a new File object with the desired name and the original extension
    const file = new File([imageFile], `${productName}.${fileExtension}`, {
      type: imageFile.type,
    });

    // Call handleUpload function with the appropriate arguments
    handleUpload(productName, file);

    // Construct the image name for display or storage
    const imageName = `allProductsImg/${productName}.${fileExtension}`;

    // Update the product state with the new image name
    setProduct({ ...product, [imageType]: imageName });
  };

  const handleCreateProductVariant = async (e) => {
    e.preventDefault();
    console.log("product", product);
    try {
      const resp = await updateProductVariants({
        variables: {
          id: parseInt(searchParams?.id),
          imageUrl: [
            product?.mainImage,
            product?.backImage,
            product?.contentImage,
          ],
          price: parseFloat(product?.price),
          stock: parseInt(product?.stock),
          weight: product?.weight,
        },
      });

      if (resp.data) {
        route.push("/all-product");
      }
      // console.log("resp", resp);
    } catch (err) {
      console.log("err", err.message);
    }
  };

  return (
    <>
      <div className="navMobile ">
        <NavigationMobile page={"cart"} />
      </div>
      <NavItem page={"cart"} />

      <div className="px-10 pt-24 max-w-5xl mx-auto w-full h-screen">
        <h2 className="text-4xl font-bold mb-4">Edit Variant Details</h2>
        <div className="bg-slate-100 p-4 mt-5 ">
          <div className="grid grid-cols-2 gap-4">
            <div className="mb-4">
              <label className="block mb-1">Product Name</label>
              <input
                type="text"
                name="name"
                value={product.name}
                disabled
                className="w-full border rounded px-4 py-2"
              />
            </div>

            <div className="mb-4">
              <label className="block mb-1">Product Weight</label>
              <input
                type="number"
                name="weight"
                value={product.weight}
                disabled
                className="w-full border rounded px-4 py-2"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1">Product Stock</label>
              <input
                type="text"
                name="stock"
                value={product.stock}
                onChange={(e) => handleChange(e)}
                className="w-full border rounded px-4 py-2"
              />
            </div>

            <div className="mb-4">
              <label className="block mb-1">Product Price</label>
              <input
                type="text"
                name="price"
                value={product.price}
                onChange={(e) => handleChange(e)}
                className="w-full border rounded px-4 py-2"
              />
            </div>
          </div>
          <div className="flex gap-4">
            <div className="mb-4">
              <label className="block mb-1">Product Front Image</label>
              <input
                type="file"
                name="mainImage"
                onChange={(e) => handleImageChange(e, "mainImage", product)}
                className="w-full border rounded px-4 py-2"
              />
              {product?.mainImage && (
                <img
                  src={`https://planetseraapi.planetsera.com/get-images/${product?.mainImage}`}
                  alt="Product Image Preview"
                  className=" w-20 2xl:w-24 mt-2"
                />
              )}
            </div>
            <div className="mb-4">
              <label className="block mb-1">Product Back Image</label>
              <input
                type="file"
                name="backImage"
                onChange={(e) => handleImageChange(e, "backImage", product)}
                className="w-full border rounded px-4 py-2"
              />
              {product?.backImage && (
                <img
                  src={`https://planetseraapi.planetsera.com/get-images/${product?.backImage}`}
                  alt="Product Image Preview"
                  className=" w-20 2xl:w-24 mt-2"
                />
              )}
            </div>
            <div className="mb-4">
              <label className="block mb-1">Product Content Image</label>
              <input
                type="file"
                name="contentImage"
                onChange={(e) => handleImageChange(e, "contentImage", product)}
                className="w-full border rounded px-4 py-2"
              />
              {product?.contentImage && (
                <img
                  src={`https://planetseraapi.planetsera.com/get-images/${product?.contentImage}`}
                  alt="Product Image Preview"
                  className=" w-20 2xl:w-24 mt-2"
                />
              )}
            </div>
          </div>
          <div className="col-span-2">
            <button
              type="submit"
              onClick={handleCreateProductVariant}
              className="bg-blue-500 text-white px-4 py-2 rounded">
              Update Variant Detail
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
