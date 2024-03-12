"use client";
import React, { useState } from "react";
import { Get_All_Products } from "@/apollo/queries";
import { useMutation, useQuery } from "@apollo/client";
import { useParams, useRouter } from "next/navigation";
import { CREATE_PRODUCT_VARIANTS } from "@/apollo/queries";
import handleImageUpload from "@/utils/upload";
import NavItem from "@/components/Navigation/NavItem";
import NavigationMobile from "@/components/Navigation/NavigationMobile";

const AddVariant = () => {
  const route = useRouter();
  const { id } = useParams();
  const { loading, data, error } = useQuery(Get_All_Products);

  const specificProduct = data?.allProducts.find(
    (prod) => prod.productUrl === id
  );

  if (loading) {
    return <p>Loading...</p>;
  }
  const [createProductVariants] = useMutation(CREATE_PRODUCT_VARIANTS);

  const [newImageFiles, setNewImageFiles] = useState([]);
  const [productVariants, setProductVariants] = useState([]);
  const [product, setProduct] = useState({
    name: specificProduct?.title,
    price: "",
    stock: "",
    imageUrl: [],
    weight: "",
    mainImage: "",
    backImage: "",
    contentImage: "",
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

  console.log("pecificProduct?.id", specificProduct?.id);
  const handleCreateProductVariant = async (e) => {
    e.preventDefault();
    const { price, stock } = product;

    // Check if any of the required fields are blank
    if (!price || !stock) {
      alert("Please fill in all required fields (Price and Stock).");
      return;
    }
    if (price < 0) {
      alert("Price cannot be negative.");
      return;
    }

    // Check if stock is greater than or equal to 1
    if (parseInt(stock) < 1) {
      alert("Stock must be greater than or equal to 1.");
      return;
    }

    console.log("product", product);
    try {
      const resp = await createProductVariants({
        variables: {
          productId: specificProduct?.id,
          imageUrl: [
            product?.mainImage,
            product?.backImage,
            product?.contentImage,
          ],
          price: parseFloat(price),
          stock: parseInt(stock),
          weight: product?.weight,
        },
      });

      if (resp.data) {
        route.push("/dashboard/all-product");
      }
    } catch (err) {
      console.log("err", err.message);
    }
  };

  console.log("product.weight", typeof product.weight);
  return (
    <>
      <div className="navMobile ">
        <NavigationMobile page={"cart"} />
      </div>
      <NavItem page={"cart"} />

      <div className="px-10 pt-24 max-w-5xl mx-auto w-full h-screen">
        <h2 className="text-4xl font-bold mb-4">Add New Product Variant</h2>
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
                onChange={(e) => handleChange(e)}
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
          {product?.weight && (
            <div className="flex gap-4">
              <div className="mb-4">
                <label className="block mb-1">Product Front Image</label>
                <input
                  type="file"
                  name="mainImage"
                  onChange={(e) => handleImageChange(e, "mainImage", product)}
                  className="w-full border rounded px-4 py-2"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1">Product Back Image</label>
                <input
                  type="file"
                  name="backImage"
                  onChange={(e) => handleImageChange(e, "backImage", product)}
                  className="w-full border rounded px-4 py-2"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1">Product Content Image</label>
                <input
                  type="file"
                  name="contentImage"
                  onChange={(e) =>
                    handleImageChange(e, "contentImage", product)
                  }
                  className="w-full border rounded px-4 py-2"
                />
              </div>
            </div>
          )}

          <div className="col-span-2">
            <button
              type="submit"
              onClick={handleCreateProductVariant}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Add New Variant
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddVariant;
