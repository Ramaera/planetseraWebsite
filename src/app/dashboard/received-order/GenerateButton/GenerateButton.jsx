import React from "react";
import Link from "next/link";
import axios from "axios";
import toast from "react-hot-toast";
import "react-toastify/dist/ReactToastify.css";

const GenerateButton = ({ shipmentId, orderIds }) => {
  const handleGenerateManifest = async () => {
    if (shipmentId) {
      // console.log("shipmentId----", shipmentId);
      const postData = {
        shipment_id: [shipmentId],
      };
      try {
        const res = await axios.post(
          "https://apiv2.shiprocket.in/v1/external/manifests/generate",
          postData,
          {
            headers: {
              Authorization: `Bearer ${process.env.NEXT_PUBLIC_SHIPROCKET_TOKEN}`,
              "Content-Type": "application/json",
            },
          }
        );
        if (res?.data) {
          toast.success("Generated Manifest Successfully");
          // await handlePrintManifest(orderIds);
          // const data = res?.data;
          // console.log("GenerateManifest", data);
        }
      } catch (error) {
        console.error("Error GenerateManifest:", error?.message);
        toast.error(error?.response?.data?.message || "An error occurred");
      }
    }
  };

  const handleGenerateLabel = async (shipmentId, e) => {
    e.preventDefault();
    if (shipmentId) {
      // console.log("shipmentId", shipmentId);
      const postData = {
        shipment_id: [shipmentId],
      };
      try {
        const res = await axios.post(
          "https://apiv2.shiprocket.in/v1/external/courier/generate/label",
          postData,
          {
            headers: {
              Authorization: `Bearer ${process.env.NEXT_PUBLIC_SHIPROCKET_TOKEN}`,
              "Content-Type": "application/json",
            },
          }
        );
        if (res?.data) {
          toast.success("Downloaded Label");
          const data = res?.data?.label_url;
          window.open(data, "_blank");
          //   setLabelUrl(data);
          // console.log("res?.data", data);
        }
        return "success";
      } catch (error) {
        console.error("Error:", error);
        toast.error(error?.message || "An error occurred");
      }
    }
  };

  const handleGenerateInvoice = async (orderIds) => {
    if (orderIds) {
      // console.log("orderIds", orderIds);
      const postData = {
        ids: [orderIds],
      };
      try {
        const res = await axios.post(
          "https://apiv2.shiprocket.in/v1/external/orders/print/invoice",
          postData,
          {
            headers: {
              Authorization: `Bearer ${process.env.NEXT_PUBLIC_SHIPROCKET_TOKEN}`,
              "Content-Type": "application/json",
            },
          }
        );
        if (res?.data) {
          toast.success("Downloaded Invoice");
          const data = res?.data?.invoice_url;
          window.open(data, "_blank");
          // window.open(data);
          //   setInvoiceUrl(data);
          // console.log("res?.data invoice", data);
        }
      } catch (error) {
        console.error("Error:", error);
        toast.error(error?.message || "An error occurred");
      }
    }
  };

  const handlePrintManifest = async (orderIds) => {
    // e.preventDefault();
    if (orderIds) {
      // console.log("orderIds--->>", orderIds);
      const postData = {
        order_ids: [orderIds],
      };
      try {
        const res = await axios.post(
          "https://apiv2.shiprocket.in/v1/external/manifests/print",
          postData,
          {
            headers: {
              Authorization: `Bearer ${process.env.NEXT_PUBLIC_SHIPROCKET_TOKEN}`,
              "Content-Type": "application/json",
            },
          }
        );
        if (res?.data) {
          toast.success("Downloaded Manifest");
          const data = res?.data?.manifest_url;
          window.open(data, "_blank");
          console.log("PrintManifest", res);
        }
      } catch (error) {
        console.error("Error PrintManifest:", error);
        toast.error(error?.response?.data?.message || "An error occurred");
      }
    }
  };

  return (
    <div>
      <button
        className="bg-red-400  text-white px-4 py-2 rounded-xl"
        onClick={handleGenerateManifest}
      >
        Generate Manifest
      </button>

      <button
        className="bg-red-400  text-white px-4 py-2 rounded-xl mt-1"
        onClick={() => handlePrintManifest(orderIds)}
      >
        Download Manifest
      </button>

      <button
        className="bg-red-400  text-white px-4 py-2 rounded-xl my-1"
        onClick={(e) => handleGenerateLabel(shipmentId, e)}
      >
        Download Label
      </button>

      <button
        className="bg-red-400  text-white px-4 py-2 rounded-xl"
        onClick={() => handleGenerateInvoice(orderIds)}
      >
        Download Invoice
      </button>
    </div>
  );
};

export default GenerateButton;
