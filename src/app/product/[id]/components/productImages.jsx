import { useEffect, useState } from "react";
import ImageMagnifier from "../../components/ProductDetailsInfo/ImageMagnifier";
import Icon from "../../components/ProductDetailsInfo/Icon";
import { Snackbar } from "@mui/material";
import MuiAlert from "@mui/material/Alert";
const ProductImages = ({ specificVariant, selectedButton }) => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(true);
    navigator.clipboard.writeText(window.location.toString());
  };

  // console.log("--->>>>", specificVariant);
  const [selectedMainImage, setSelectedMainImage] = useState(
    specificVariant?.imageUrl[0]
  );

  useEffect(() => {
    setSelectedMainImage(specificVariant?.imageUrl[0]);
  }, [specificVariant]);

  return (
    <>
      <div className="flex flex-col sm:flex-row">
        <div className="relative flex flex-row sm:flex-col justify-evenly  sm:w-1/3 p-2 2xl:px-10 order-2 sm:order-1">
          {specificVariant?.imageUrl?.map((img) => (
            <div
              //   className={` ${
              //     selectedMainImage ===
              //     (selectedButton === "50gram"
              //       ? specificProduct?.ProductMasala
              //       : selectedButton === "100gram"
              //       ? specificProduct?.ProductMasala100g
              //       : selectedButton === "500gram"
              //       ? specificProduct?.ProductMasala500g
              //       : specificProduct?.ProductMasala)
              //       ? "border-blue-500	 border-[1.5px] rounded-md p-1 cursor-pointer"
              //       : "border-slate-200	 border-[1.5px] rounded-md p-1 cursor-pointer"
              //   }`}
              onClick={() => {
                setSelectedMainImage(img);
              }}>
              <img
                src={`https://planetseraapi.planetsera.com/get-images/${img}`}
                className="w-10 sm:w-full"
                alt="Spices Front"
              />
            </div>
          ))}
        </div>

        <div className="relative border-solid border-2 rounded-xl flex items-center justify-center p-4 sm:p-8 md:mx-0 mx-2 order-1 sm:order-2">
          <div
            // style={{
            //   background: specificProduct.bgColor,
            // }}
            className="border-solid border-2 rounded-xl md:border-0 p-6">
            <ImageMagnifier
              src={`https://planetseraapi.planetsera.com/get-images/${selectedMainImage}`}
              alt="PlanetsEra Spices"
              //   title={specificProduct.title}
            />
          </div>
          <div
            onClick={handleClick}
            className="absolute md:scale-100 scale-75  top-0 right-0 2xl:top-8 md:top-4 2xl:mt-[-1rem] md:right-4 xl:right-6  ">
            <Icon color={"red"} />
            <Snackbar
              open={open}
              onClose={() => setOpen(false)}
              autoHideDuration={2000}
              sx={{ width: "150px" }}>
              <MuiAlert
                severity="success"
                className="mb-[-10px] md:mb-[-20px]"
                sx={{
                  width: "100%",
                  marginLeft: "-100px",
                }}>
                Link Copied!
              </MuiAlert>
            </Snackbar>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductImages;
