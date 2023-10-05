import React from "react";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const RootLayout = ({ children }) => {
  return (
    <html>
      <body className="m-2 md:mx-auto md:max-w-2xl">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
