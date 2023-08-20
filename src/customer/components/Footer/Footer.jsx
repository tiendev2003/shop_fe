import { Button, Grid, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <div>
      <Grid
        className="bg-black  text-white text-center mt-10"
        container
        sx={{
          bgcolor: "black",
          color: "white",
          py:3,
        }}
      >
        <Grid item sx={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Company
          </Typography>{" "}
          <div>
            <Button gutterButtom className="pb-4" variant="h6">
              Blog
            </Button>
          </div>
          <div>
            <Button gutterButtom className="pb-4" variant="h6">
              Press
            </Button>
          </div>
          <div>
            <Button gutterButtom className="pb-4" variant="h6">
              Jobs
            </Button>
          </div>
          <div>
            <Button gutterButtom className="pb-4" variant="h6">
              Partners
            </Button>
          </div>
        </Grid>
        <Grid item sx={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Solutions
          </Typography>{" "}
          <div>
            <Button gutterButtom className="pb-4" variant="h6">
              Blog
            </Button>
          </div>
          <div>
            <Button gutterButtom className="pb-4" variant="h6">
              Press
            </Button>
          </div>
          <div>
            <Button gutterButtom className="pb-4" variant="h6">
              Jobs
            </Button>
          </div>
          <div>
            <Button gutterButtom className="pb-4" variant="h6">
              Partners
            </Button>
          </div>
        </Grid>
        <Grid item sx={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Documentation
          </Typography>{" "}
          <div>
            <Button gutterButtom className="pb-4" variant="h6">
              Blog
            </Button>
          </div>
          <div>
            <Button gutterButtom className="pb-4" variant="h6">
              Press
            </Button>
          </div>
          <div>
            <Button gutterButtom className="pb-4" variant="h6">
              Jobs
            </Button>
          </div>
          <div>
            <Button gutterButtom className="pb-4" variant="h6">
              Partners
            </Button>
          </div>
        </Grid>
        <Grid item sx={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Legal
          </Typography>{" "}
          <div>
            <Button gutterButtom className="pb-4" variant="h6">
              Blog
            </Button>
          </div>
          <div>
            <Button gutterButtom className="pb-4" variant="h6">
              Press
            </Button>
          </div>
          <div>
            <Button gutterButtom className="pb-4" variant="h6">
              Jobs
            </Button>
          </div>
          <div>
            <Button gutterButtom className="pb-4" variant="h6">
              Partners
            </Button>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
