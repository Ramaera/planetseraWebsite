"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
// import Shipping from "../shipping/page";
import Payment from "../payment/page";
import Address from "../address/page";
import OrderPlaced from "../../orderPlaced/page";
import Link from "next/link";
import { useRouter } from "next/navigation";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useSelector, useDispatch } from "react-redux";

const steps = ["Address ", "Payment "];

export default function HorizontalLinearStepper() {
  const router = useRouter();
  const addressesData = useSelector((state) => state.address);
  const shipmentData = useSelector((state) => state.shipment);
  const paymentData = useSelector((state) => state.payment);

  const [activeStep, setActiveStep] = React.useState(0);
  const [customComponentIndex, setCustomComponentIndex] = React.useState(0);
  const handleNextPage = () => {
    if (activeStep === steps.length - 1) {
      router.push("/orderPlaced");
    } else {
      setActiveStep((prevActiveStep) => {
        // Set the custom component index for the next step
        setCustomComponentIndex(prevActiveStep + 1);
        return prevActiveStep + 1;
      });
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => {
      if (activeStep === 0) {
        router.push("/cart");
      }
      // Reset custom component on going back
      setCustomComponentIndex(prevActiveStep - 1);
      return prevActiveStep - 1;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
    setCustomComponentIndex(null); // Reset the custom component index
  };

  // ... (rest of the code)

  // Render the appropriate custom component based on the customComponentIndex
  let customComponent;
  switch (customComponentIndex) {
    case 0:
      customComponent = <Address />;
      break;
    // case 1:
    //   customComponent = <Shipping />;
    //   break;
    case 1:
      customComponent = <Payment />;
      break;
    // Add more cases for additional custom components if needed
    default:
      customComponent = null;
  }

  return (
    <div className="w-full ">
      <div className="flex">
        {steps.map((label, index) => (
          <Step key={label}>
            <div
              className={`${
                index < activeStep
                  ? "text-red-500"
                  : index === activeStep
                  ? "text-gray-900"
                  : "text-gray-300"
              } sm:pr-10 px-1 sm:text-3xl text-xl flex sm:flex-none sm:font-medium`}>
              {label}
              {index < steps.length - 1 && (
                <ArrowForwardIosIcon className="sm:ml-16 sm:mt-2 mt-1 ml-2 " />
              )}
            </div>
          </Step>
        ))}
      </div>

      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you are finished
          </Typography>
          <div></div>
        </React.Fragment>
      ) : (
        <React.Fragment sx={{ width: "100%" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              pt: 3,
              width: "100%",
              // pl: 4,
            }}>
            <Button
              variant="outlined"
              color="inherit"
              // disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}>
              Back
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button
              variant="outlined"
              onClick={handleNextPage}
              disabled={
                addressesData.selectedAddress == null ||
                activeStep === steps.length - 1
                // shipmentData.shippingMethod == null ||
                // paymentData.selectedPayment == null
              }>
              {activeStep === steps.length - 1 ? "Finish" : "Proceed"}
            </Button>
          </Box>
        </React.Fragment>
      )}
      {customComponent}
    </div>
  );
}
