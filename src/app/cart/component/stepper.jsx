// "use client";
// import * as React from "react";
// import Box from "@mui/material/Box";
// import Stepper from "@mui/material/Stepper";
// import Step from "@mui/material/Step";
// import StepLabel from "@mui/material/StepLabel";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
// import Shipping from "../shipping/page";
// import Payment from "../payment/page";
// import Address from "../address/page";
// import OrderPlaced from "../orderPlaced/page";

// const steps = ["Address", "Shipping", "Payment"];

// export default function HorizontalLinearStepper() {
//   const [activeStep, setActiveStep] = React.useState(0);
//   const [customComponentIndex, setCustomComponentIndex] = React.useState(0);

//   const handleNext = () => {
//     setActiveStep((prevActiveStep) => {
//       // Set the custom component index for the next step
//       setCustomComponentIndex(prevActiveStep + 1);
//       return prevActiveStep + 1;
//     });
//   };

//   const handleBack = () => {
//     setActiveStep((prevActiveStep) => {
//       // Reset custom component on going back
//       setCustomComponentIndex(prevActiveStep - 1);
//       return prevActiveStep - 1;
//     });
//   };

//   const handleReset = () => {
//     setActiveStep(0);
//     setCustomComponentIndex(null); // Reset the custom component index
//   };

//   // ... (rest of the code)

//   // Render the appropriate custom component based on the customComponentIndex
//   let customComponent;
//   switch (customComponentIndex) {
//     case 0:
//       customComponent = <Address />;
//       break;
//     case 1:
//       customComponent = <Shipping />;
//       break;
//     case 2:
//       customComponent = <Payment />;
//       break;
//     // Add more cases for additional custom components if needed
//     default:
//       customComponent = null;
//   }

//   return (
//     <Box sx={{ width: "100%" }}>
//       <Stepper activeStep={activeStep}>
//         {steps.map((label, index) => (
//           <Step key={label}>
//             <StepLabel>{label}</StepLabel>
//           </Step>
//         ))}
//       </Stepper>
//       {activeStep === steps.length ? (
//         <React.Fragment>
//           <Typography sx={{ mt: 2, mb: 1 }}>
//             All steps completed - you are finished
//           </Typography>
//           <div>
//             <OrderPlaced />
//           </div>
//         </React.Fragment>
//       ) : (
//         <React.Fragment>
//           <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
//           <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
//             <Button
//               color="inherit"
//               disabled={activeStep === 0}
//               onClick={handleBack}
//               sx={{ mr: 1 }}
//             >
//               Back
//             </Button>
//             <Box sx={{ flex: "1 1 auto" }} />
//             <Button onClick={handleNext}>
//               {activeStep === steps.length - 1 ? "Finish" : "Next"}
//             </Button>
//           </Box>
//         </React.Fragment>
//       )}
//       {customComponent}
//     </Box>
//   );
// }
"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Shipping from "../shipping/page";
import Payment from "../payment/page";
import Address from "../address/page";
import OrderPlaced from "../../orderPlaced/page";
import Link from "next/link";
import { useRouter } from "next/navigation";

const steps = ["Address", "Shipping", "Payment"];

export default function HorizontalLinearStepper() {
  const router = useRouter();

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
    case 1:
      customComponent = <Shipping />;
      break;
    case 2:
      customComponent = <Payment />;
      break;
    // Add more cases for additional custom components if needed
    default:
      customComponent = null;
  }

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you are finished
          </Typography>
          <div></div>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleNextPage}>
              {activeStep === steps.length - 1 ? "Finish" : "Next"}
            </Button>
          </Box>
        </React.Fragment>
      )}
      {customComponent}
    </Box>
  );
}
