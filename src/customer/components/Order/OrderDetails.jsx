import React from "react";
import AddressCard from "../Address/AddressCard";
import OrderTraker from "./OrderTraker";
import { Box, Grid } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import StarBorderIcon from "@mui/icons-material/StarBorder";
const OrderDetails = () => {
  return (
    <div className="px-5 lg:px-20">
      <AddressCard />
      <div>
        <h1 className="font-semibold text-xl py-10"> Dilivery Address</h1>
      </div>
      <div className="py-20">
        <OrderTraker activeStep={3} />
      </div>
      <Grid container className="space-x-5">
        <Grid
          item
          container
          className="shadow-xl rounded-md p-5 border"
          sx={{ alignItems: "center", justifyContent: "space-between" }}
        >
          <Grid item xs={6}>
            <div className="flex items-center space-x-4">
              <img
                className="w-[5rem] h-[5rem] object-cover object-top"
                src="https://rukminim1.flixcart.com/image/612/612/l5h2xe80/kurta/x/6/n/xl-kast-tile-green-majestic-man-original-imagg4z33hu4kzpv.jpeg?q=70"
              />
              <div className="space-y-2 ml-5">
                <p className="font-semibold">Men SLim MidRize Black Jeans</p>
                <p className="space-x-5 opacity-50   text-xs font-semibold">
                  <span>Colors: pink Size : M</span>
                </p>
                <p> Seller : Linaria</p>
                <p>$1312</p>
              </div>
            </div>
          </Grid>
          <Grid item>
            <Box sx={{ color: deepPurple[500] }}>
              <StarBorderIcon sx={{ fontSize: "2rem" }} className="px-2" />
              <span>Rate & Review Product</span>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default OrderDetails;
