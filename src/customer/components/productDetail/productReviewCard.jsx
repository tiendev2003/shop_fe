import { Avatar, Box, Grid, Rating } from "@mui/material";
import React from "react";

const ProductReviewCard = () => {
  return (
    <div>
      <Grid container spacing={7} gap={3}>
        <Grid item xs={1}>
          <Box>
            <Avatar
              className="text-white"
              sx={{ width: 56, height: 56, bgcolor: "#9155fd" }}
            >
              Tien
            </Avatar>
          </Box>
        </Grid>
        <Grid item sx={9}>
          <div className="space-y-2">
            <div>
              <p className="font-semibold text-lg">Ram</p>
              <p className="opacity-70">Appril 5, 2023</p>
            </div>
          </div>
          <Rating value={4.5} name="half-rating" readOnly precision={0.5} />
          <p>Nice product , i love this shirt</p>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductReviewCard;
