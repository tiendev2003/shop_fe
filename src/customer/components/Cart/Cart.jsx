import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Button, IconButton } from "@mui/material";
import React from "react";
import CartItem from "./CartItem";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate=useNavigate();
  const handleCheckout=()=>{
    navigate("/checkout?step=2")
  }
  return (
    <div>
      <div className=" lg:grid grid-cols-3 lg:px-16 relative">
        <div className="col-span-2">
          {[1, 1, 1, 1].map((item) => (
            <CartItem />
          ))}
        </div>

        <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0">
          <div className="border">
            <p className="uppercase font-bold opacity-60 pb-4">Price details</p>
            <hr />
            <div className="space-y-3 font-semibold">
              <div className=" flex justify-between pt-3 text-black">
                <span>Price</span>
                <span>$132</span>
              </div>
              <div className=" flex justify-between pt-3 ">
                <span>Discount</span>
                <span className="text-green-600">$132</span>
              </div>
              <div className=" flex justify-between pt-3 ">
                <span>Delivery</span>
                <span className="text-green-600">free</span>
              </div>
              <div className=" flex justify-between pt-3  font-bold">
                <span>Total Amount</span>
                <span className="text-green-600">$132</span>
              </div>
            </div>
            <Button
              variant="contained"
              className="w-full mt-5"
              sx={{ px: "2.5rem", py: "0.7rem", bgcolor: "#9155fd" }}
            >
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
