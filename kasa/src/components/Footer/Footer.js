import React from "react";

import "./footer.css";
import logofooter from "../../assets/kasa-footer.png";

const Footer = () => {
  return (
    <footer>
      <img src={logofooter} alt="logo kasa footer" />
      <p>© 2023 Kasa. All rights reserved</p>
    </footer>
  );
};

export default Footer;
