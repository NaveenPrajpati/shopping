import React from 'react'
import useCategory from '../../hooks/useCategory';
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

								{/* <!-- Website Logo --> */}
								<select name="" id="" className='p-2 rounded-lg outline-none font-semibold'>
									<option value=""> <Link
										className="text-white text-lg font-semibold "
										to={"/categories"}
									>
										Categories
									</Link></option>
									{categories?.map((c, index) => (
										<option key={index} className="text-center my-2">
											<Link
												className="text-blue-700  font-semibold "
												to={`/category/${c.slug}`}
											>
												{c.name}
											</Link>
										</option>
									))}
								</select>

							{/* <!-- Primary Navbar items --> */}
							<div className="hidden md:flex items-center space-x-5">
								<a href="" className="text-black border-b-2  font-semibold ">Tranding</a>
								<a href="" className="text-white font-semibold hover:text-green-500 transition duration-300">Best Selling</a>
								<a href="" className="text-white font-semibold hover:text-green-500 transition duration-300">Deal Of Day</a>
								<a href="" className="text-white font-semibold hover:text-green-500 transition duration-300">FAQ</a>
							</div>
					
						{/* <!-- Secondary Navbar items --> */}
						<ul className="flex items-center justify-center gap-2">


              {!auth?.user ? (
                <>
                
                    <NavLink to="/register" className="text-white text-lg font-semibold ">
                      Register
                    </NavLink>
                 
                  
                    <NavLink to="/login" className="text-white text-lg font-semibold ">
                      Login
                    </NavLink>
                
                </>
              ) : (
                <>
                  <li className="">
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
	
	)
}

export default Navbar