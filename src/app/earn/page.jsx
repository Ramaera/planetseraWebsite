"use client";
import NavItem from "@/components/Navigation/NavItem";
import NavigationMobile from "@/components/Navigation/NavigationMobile";
import EarnSection from "./components/EarnSection/EarnSection";
import Footer from "@/components/Footer/Footer";

const Earn = () => {
  return (
    <>
      <NavItem page={"products"} />
      <NavigationMobile page={"products"} />
      <EarnSection />
    </>
  );
};

export default Earn;
