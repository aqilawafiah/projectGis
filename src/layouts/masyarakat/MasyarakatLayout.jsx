import React from "react";
import MasyarakatNavbar from "./MasyarakatNavbar";
import "./masyarakat.css";

const MasyarakatLayout = ({ children }) => {
  return (
    <>
      <MasyarakatNavbar />
      <main>{children}</main>
    </>
  );
};

export default MasyarakatLayout;
