import About from "@/components/About";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Help from "@/components/Help";
import Navbar from "@/components/Navbar";
import React from "react";
import Services from "@/components/Services";

export default function page() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      {/* <Solutions/> */}
      <Services/>
      <Help />
      <Footer />
    </>
  );
}
