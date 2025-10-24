import React from "react";
import { Navbar } from "../Navbar";
import { Mainsection } from "../Mainsection";
import { Products } from "../Products";
import { WhyChoose } from "../WhyChoose";
import { Footer } from "../Footer";

export default function Homepage() {
  return (
    <>
      <Navbar />
      <Mainsection />
      <Products />
      <WhyChoose />
      <Footer />
    </>
  );
}
