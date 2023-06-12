import React from "react";


import { Toaster } from "react-hot-toast";
import Header from "./Header";
import Navbar from "./Navbar";
import { Helmet } from "react-helmet-async";
const Layout = ({ children, title, description, keywords, author }) => {
  return (
    <div className="">
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>
      <Header />
    <Navbar/>
      <div className="">
        <Toaster />
        {children}
      </div>
      
    </div>
  );
};

Layout.defaultProps = {
  title: "Ecommerce app-shop now",
  description: "mern stack project",
  keywords: "mern,react,node,mongodb",
  author: "naveen",
};

export default Layout;
