"use client";
import ContactUsHeader from "@/app/contact-us/components/ContractUsHeader/ContractUsHeader";
import ContactUsCentre from "@/app/contact-us/components/ContactUsCentre/ContactUsCentre";
import Head from "next/head";
import { useEffect } from "react";
import ProfileHeader from "./components/ProfileHeader/ProfileHeader";
import ProfileCentre from "./components/ProfileCentre/ProfileCenter";

const ContactUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Head />

      {/* <ContactUsHeader /> */}
      <ProfileHeader />
      <ProfileCentre />
      {/* <ContactUsCentre /> */}
    </>
  );
};

export default ContactUs;
