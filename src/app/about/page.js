import Navbar from "@/components/Navbar";
import React from "react";
import Footer from "@/components/Footer";
import Top from "@/app/about/Top";

export default function page() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Top/>
      <Footer/>
    </div>
  );
}
