import React from "react";
import AppRating from "../components/AppRating";
import BrandLove from "../components/BrandLove";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import CredExperience from "../components/CredExperience";
import CredSecurity from "../components/CredSecurity";
import CredStory from "../components/CredStory";
import FeelSpecial from "../components/FeelSpecial";
import HeroSection from "../components/HeroSection";
import MobileScroll from "../components/MobileScroll";
import ProductShowCase from "../components/ProductShowCase";
import WindowPeak from "../components/WindowPeak";

const HomePage = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <ProductShowCase />
      <FeelSpecial />
      <BrandLove />
      <CredExperience />
      <MobileScroll />
      <div className="non-mobile">
        <WindowPeak />
      </div>
      <CredSecurity />
      <CredStory />
      <AppRating />
      <Footer />
    </div>
  );
};

export default HomePage;
