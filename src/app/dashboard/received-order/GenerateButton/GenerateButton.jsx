import React from "react";
import Link from "next/link";
import axios from "axios";
import toast from "react-hot-toast";
import "react-toastify/dist/ReactToastify.css";

const GenerateButton = (shipmentId, orderIds) => {
  const handleGenerateManifest = async () => {
    if (shipmentId) {
      console.log("shipmentId----", shipmentId);
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
          await handlePrintManifest(orderIds);
          const data = res?.data;
          console.log("GenerateManifest", data);
        }
      } catch (error) {
        console.error("Error GenerateManifest:", error);
        toast.error(error?.message || "An error occurred");
      }
    }
  };

  const handlePrintManifest = async (orderIds) => {
    if (orderIds) {
      console.log("orderIds---", orderIds);
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
          const data = res?.data?.manifest_url;
          const manifestUrl = URL.createObjectURL(
            new Blob([data], { type: "application/pdf" })
          );
          window.open(manifestUrl);
          //   setManifestUrl(data);
          console.log("PrintManifest", data);
        }
      } catch (error) {
        console.error("Error PrintManifest:", error);
      }
    }
  };

  const handleGenerateLabel = async (shipmentId, e) => {
    e.preventDefault();
    if (shipmentId) {
      console.log("shipmentId", shipmentId);
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
          const labelUrl = URL.createObjectURL(
            new Blob([data], { type: "application/pdf" })
          );
          window.open(labelUrl);
          //   setLabelUrl(data);
          console.log("res?.data", data);
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
      console.log("orderIds", orderIds);
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
          const invoiceUrl = URL.createObjectURL(
            new Blob([data], { type: "application/pdf" })
          );
          window.open(invoiceUrl);
          //   setInvoiceUrl(data);
          console.log("res?.data", data);
        }
      } catch (error) {
        console.error("Error:", error);
        toast.error(error?.message || "An error occurred");
      }
    }
  };

  return (
    <div>
      {/* <Link href={manifestUrl}> */}
      <button
        className="bg-red-400  text-white px-4 py-2 rounded-xl"
        onClick={handleGenerateManifest}>
        Generate Manifest
      </button>
      {/* </Link> */}
      {/* <Link href={labelUrl}> */}
      <button
        className="bg-red-400  text-white px-4 py-2 rounded-xl my-1"
        onClick={(e) => handleGenerateLabel(shipmentId, e)}>
        Generate Label
      </button>
      {/* </Link> */}
      {/* <Link href={invoiceUrl}> */}
      <button
        className="bg-red-400  text-white px-4 py-2 rounded-xl"
        onClick={() => handleGenerateInvoice(orderIds)}>
        Generate Invoice
      </button>
      {/* </Link> */}
    </div>
  );
};

export default GenerateButton;
