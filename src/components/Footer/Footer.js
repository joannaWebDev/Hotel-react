import React, { Component } from "react";
import { render } from "react-dom";

import styles from "./footer.css";

const Footer = ({ footer }) => {
  const liMap = () => {
    return footer.map(liFooter => <li key={liFooter}>{liFooter}</li>);
  };
  return <ul className="footerUl">{liMap()}</ul>;
};

export default Footer;
