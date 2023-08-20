import React, { useState } from "react";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import AliceCarousel from "react-alice-carousel";
import { Button } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { mens_kurta } from "../../../Data/men_kurta";
const HomeSectionCarousel = ({ data, sectionName }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5.5 },
  };
  const sliderPrev = () => setActiveIndex(activeIndex - 1);
  const sliderNext = () => setActiveIndex(activeIndex + 1);
  const syncActiveIndex = ({ item }) => setActiveIndex(item);
  const itemss = data
    .slice(0, 10)
    .map((item) => <HomeSectionCard product={item} />);
  return (
    <div className="  border">
      <h2 className="text-2xl font-extrabold text-gray-800 py-5">
        {sectionName}
      </h2>
      <div className="relative p-5">
        <AliceCarousel
          responsive={responsive}
          items={itemss}
          disableButtonsControls
          autoPlay
          autoPlayInterval={1000}
          onSlideChanged={syncActiveIndex}
          activeIndex={activeIndex}
        />
        {activeIndex !== itemss.length - 5 && (
          <Button
            variant="contained"
            className="z-50 bg-white"
            aria-label="next"
            sx={{
              position: "absolute",
              bgcolor: "white",

              transform: "translateX(50%) rotate(90deg)",
              top: "8rem",
              right: "0rem",
            }}
            onClick={sliderNext}
          >
            <KeyboardArrowLeftIcon
              sx={{ transform: "rotate(90deg)", color: "black" }}
            />
          </Button>
        )}
        {activeIndex !== 0 && (
          <Button
            variant="contained"
            className="z-50 bg-white"
            aria-label="next"
            onClick={sliderPrev}
            sx={{
              position: "absolute",
              bgcolor: "white",
              transform: "translateX(-50%) rotate(-90deg)",
              top: "8rem",
              left: "0rem",
            }}
          >
            <KeyboardArrowLeftIcon
              sx={{ transform: "rotate(90deg)", color: "black" }}
            />
          </Button>
        )}
      </div>
    </div>
  );
};

export default HomeSectionCarousel;
