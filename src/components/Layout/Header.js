import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useAuth } from "../../context/auth";
import toast from "react-hot-toast";
import SearchInput from "../Form/SearchInput";
import useCategory from "../../hooks/useCategory";
import { useCart } from "../../context/cart";
import { Badge } from "antd";
import {AiOutlineShoppingCart} from 'react-icons/ai'

const Header = () => {
  const [auth, setAuth] = useAuth();
  const [cart] = useCart();
 

  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    toast.success("Logout Successfully");
  };
  return (
   
      <nav className="bg-teal-400 px-4  ">
        
          
          <div className="flex justify-between items-center px-2" id="navbarTogglerDemo01">
            <Link to="/" className="text-xl font-semibold flex items-center gap-1">
              <AiOutlineShoppingCart className="text-slate-500 text-2xl font-bold"/> Ecommerce App
            </Link>
            <div>
              <SearchInput />
              </div>
            <ul className="flex items-center gap-2">
              
             
             

              {!auth?.user ? (
                <>
                  <li className="">
                    <NavLink to="/register" className="text-white text-lg font-semibold ">
                      Register
                    </NavLink>
                  </li>
                  <li className="">
                    <NavLink to="/login" className="text-white text-lg font-semibold ">
                      Login
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li className="">
                  <Link className="bg-white p-2 rounded-lg font-semibold">Become seller</Link>
                    <NavLink
                      className="text-white text-lg font-semibold"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      style={{ border: "none" }}
                    >
                      {auth?.user?.name}
                    </NavLink>
                    <ul className="dropdown-menu">
                      <li>
                        <NavLink
                          to={`/dashboard/${auth?.user?.role===1 ? "admin":"user"
                            }`}
                          className="dropdown-item"
                        >
                          Dashboard
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          onClick={handleLogout}
                          to="/login"
                          className="dropdown-item"
                        >
                          Logout
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                </>
              )}
              <li className="">
                <NavLink to="/cart" className="text-white text-lg font-semibold flex" style={{border:'none'}}>
                    Cart 
                    {cart?.length>0 && <div className="w-5 h-5 rounded-full bg-blue-600 text-sm text-center text-white -translate-y-1 -translate-x-1">{cart?.length}</div>}
               
                </NavLink>
              </li>
            </ul>
          </div>
       
      </nav>
 
  );
};

export default Header;
