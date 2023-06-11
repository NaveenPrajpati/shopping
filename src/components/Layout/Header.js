import React from "react";
import { Link } from "react-router-dom";
import SearchInput from "../Form/SearchInput";

import {AiOutlineShoppingCart} from 'react-icons/ai'

const Header = () => {

 


  return (
   
      <nav className="bg-white px-4  ">
        
          
          <div className="flex justify-between items-center px-2" id="navbarTogglerDemo01">
            <Link to="/" className="text-xl font-semibold flex items-center gap-1">
              <AiOutlineShoppingCart className="text-slate-500 text-2xl font-bold"/> Ecommerce App
            </Link>
            <div>
              <SearchInput />
              </div>

              <Link className="bg-teal-400 text-white p-2 rounded-lg font-semibold">Become seller</Link>

           
          </div>
       
      </nav>
 
  );
};

export default Header;
