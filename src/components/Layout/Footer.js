import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="p-1 bg-gradient-to-b bg-black">
      <h1 className="text-white text-2xl w-fit mx-auto">All Right Reserved &copy;Naveen</h1>
      <p className="text-white font-semibold mx-auto w-fit">
        <Link to="/about">About </Link>|<Link to="/contact"> Contact </Link>|
        <Link to="/policy"> Privacy Policy</Link>
      </p>
    </div>
  );
};

export default Footer;
