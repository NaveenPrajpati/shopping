import React from "react";
import { NavLink } from "react-router-dom";
const AdminMenu = () => {
  return (
    
     
        <div className="text-center border">
          <h4 className="bg-black text-white p-2">Admin Panel</h4>
          <NavLink
            to="/dashboard/admin/create-category"
            className="block bg-gray-400 mb-2 p-1 rounded-lg mx-2 text-white font-semibold hover:bg-purple-600"
          >
            Create Category
          </NavLink>
          <NavLink
            to="/dashboard/admin/create-product"
            className="block bg-gray-400 mb-2 p-1 rounded-lg mx-2 text-white font-semibold hover:bg-purple-600"
          >
            Create Product
          </NavLink>
          <NavLink
            to="/dashboard/admin/products"
            className="block bg-gray-400 mb-2 p-1 rounded-lg mx-2 text-white font-semibold hover:bg-purple-600"
          >
            Products
          </NavLink>
          <NavLink
            to="/dashboard/admin/orders"
            className="block bg-gray-400 mb-2 p-1 rounded-lg mx-2 text-white font-semibold hover:bg-purple-600"
          >
            Orders
          </NavLink>
          <NavLink
            to="/dashboard/admin/users"
            className="block bg-gray-400 mb-2 p-1 rounded-lg mx-2 text-white font-semibold hover:bg-purple-600"
          >
            Users
          </NavLink>
        </div>

  
  );
};

export default AdminMenu;
