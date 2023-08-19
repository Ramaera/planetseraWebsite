"use client";
import NavItem from "@/components/Navigation/NavItem";
import NavigationMobile from "@/components/Navigation/NavigationMobile";
import EarnSection from "./components/EarnSection/EarnSection";
import Footer from "./components/Footer/Footer";

const Earn = () => {
  return (
    <>
      <NavItem page={"earn"} />
      <NavigationMobile />
      <EarnSection />
      <Footer />
    </>
  );
};

export default Earn;
