import React from "react";
import MainCarousel from "../../components/HomeCarousel/MainCarousel";
import HomeSectionCard from "../../components/HomeSectionCard/HomeSectionCard";
import HomeSectionCarousel from "../../components/HomeSectionCarousel/HomeSectionCarousel";
import { mens_kurta } from "../../../Data/men_kurta";
import Footer from "../../components/Footer/Footer";

const HomePage = () => {
  return (
    <div>
      <MainCarousel />
      <div className="space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10">
        <HomeSectionCarousel data={mens_kurta} sectionName={"Men"} />
        <HomeSectionCarousel data={mens_kurta} sectionName={"Women"} />
      </div>
    </div>
  );
};

export default HomePage;
