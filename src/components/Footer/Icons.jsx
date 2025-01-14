"use client";

import React from "react";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";

const Icons = () => {
  return (
    <div className="icons flex w-40 text-center justify-evenly items-start">
      <a href="https://www.instagram.com/planetseraspices/" target="_blank">
        <Instagram style={{ color: "white" }} />
      </a>
      <a href="https://www.facebook.com/planetseraspices" target="_blank">
        <Facebook style={{ color: "white" }} />
      </a>
      <a href="https://twitter.com/Planetseraspice" target="_blank">
        <Twitter style={{ color: "white" }} />
      </a>
    </div>
  );
};

export default Icons;
