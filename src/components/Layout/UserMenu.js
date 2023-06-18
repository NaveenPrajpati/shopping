import React from "react";
import { NavLink } from "react-router-dom";
const UserMenu = () => {
  return (

     
      <div className="text-center border">
          <h4 className="bg-black text-white p-2">Dashboard</h4>
          <NavLink
            to="/dashboard/user/profile"
            className="block bg-gray-400 mb-2 p-1 rounded-lg mx-2 text-white font-semibold hover:bg-purple-600"
          >
            Profile
          </NavLink>
          <NavLink
            to="/dashboard/user/orders"
            className="block bg-gray-400 mb-2 p-1 rounded-lg mx-2 text-white font-semibold hover:bg-purple-600"
          >
            Orders
          </NavLink>
        </div>
     
 
  );
};

export default UserMenu;
