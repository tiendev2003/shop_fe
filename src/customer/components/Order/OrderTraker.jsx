import { Step, StepLabel, Stepper } from "@mui/material";
import React from "react";

const steps = [
  "Placed",
  "Order Confirmed",

  "Shipped",
  "Out For Delivery",
  "Delivered",
];
const OrderTraker = ({ activeStep }) => {
  return (
    // <div className="w-full">
    //   <Stepper activeStep={activeStep} alternativeLabel>
    //     {steps.map((label) =>
    //       <Stepper sx={{ color: "#9155FD", fontSize: "44" }}>{label}</Stepper>
    //     )}
    //   </Stepper>
    // </div>
    <div className="w-full">
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          return (
            <Step key={index}>
              <StepLabel>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
    </div>
  );
};

export default OrderTraker;
