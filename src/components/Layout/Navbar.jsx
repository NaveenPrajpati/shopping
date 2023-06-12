import React from "react";
import useCategory from "../../hooks/useCategory";
import { NavLink, Link } from "react-router-dom";
import toast from "react-hot-toast";
import { Badge } from "antd";
import { useAuth } from "../../context/auth";
import { useCart } from "../../context/cart";

function Navbar() {
  const categories = useCategory();
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
    <nav className="bg-teal-400 shadow-lg">
      <div className="max-w-6xl mx-auto p-1 flex justify-around items-center">
        {/* <!-- categories button --> */}
        <div className="bg-white px-2 h-10 rounded-md relative text-center group text-2xl font-semibold">
          <p className="">Categories</p>
          <div className="hidden group-hover:block hover:cursor-pointer  p-2 absolute top-10 w-[200px]">
            {categories.map((c) => (
              <Link
                to={`/category/${c.slug}`}
                key={c._id}
                className=" block border-2 rounded-lg text-teal-500 bg-white my-1 border-teal-500"
              >
                {c.name}
              </Link>
            ))}
          </div>
        </div>

        {/* <!-- Primary Navbar items --> */}
        <div className="hidden md:flex items-center space-x-5">
          <a href="" className="text-black border-b-2  font-semibold ">
            Tranding
          </a>
          <a
            href=""
            className="text-white font-semibold hover:text-green-500 transition duration-300"
          >
            Best Selling
          </a>
          <a
            href=""
            className="text-white font-semibold hover:text-green-500 transition duration-300"
          >
            Deal Of Day
          </a>
          <a
            href="/allproducts"
            className="text-white font-semibold hover:text-green-500 transition duration-300"
          >
            All Products
          </a>
          <a
            href=""
            className="text-white font-semibold hover:text-green-500 transition duration-300"
          >
            FAQ
          </a>
        </div>

        {/* <!-- Secondary Navbar items --> */}
        <ul className="flex items-center justify-center gap-2">
          {!auth?.user ? (
            <div className="flex gap-2 items-center">
              <NavLink
                to="/register"
                className="text-white text-lg font-semibold "
              >
                Register
              </NavLink>

              <NavLink
                to="/login"
                className="text-white text-lg font-semibold "
              >
                Login
              </NavLink>
            </div>
          ) : (
            <div className="group h-8 relative p-1">
              <p className="text-white text-lg font-semibold">
                {" "}
                {auth?.user?.name}
              </p>
              <ul className="hidden group-hover:block absolute top-8 p-2 space-y-1 bg-white">
                <li>
                  <NavLink
                    to={`/dashboard/${auth?.user?.role === 1 ? "admin" : "user"
                      }`}
                    className=""
                  >
                    Dashboard
                  </NavLink>
                </li>
                <li>
                  <NavLink onClick={handleLogout} to="/login" className="">
                    Logout
                  </NavLink>
                </li>
              </ul>
            </div>
          )}
          <li className="">
            <NavLink
              to="/cart"
              className="text-white text-lg font-semibold flex"
              style={{ border: "none" }}
            >
              Cart
              {cart?.length > 0 && (
                <div className="w-5 h-5 rounded-full bg-blue-600 text-sm text-center text-white -translate-y-1 -translate-x-1">
                  {cart?.length}
                </div>
              )}
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
