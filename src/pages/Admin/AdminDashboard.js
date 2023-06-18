import React from "react";
import AdminMenu from "../../components/Layout/AdminMenu";
import Layout from "./../../components/Layout/Layout";
import { useAuth } from "../../context/auth";
const AdminDashboard = () => {
  const [auth] = useAuth();
  return (
    <Layout title={'admin dashbord'}>
  
        <div className="flex flex-col sm:flex-row mt-20 mx-10 gap-10">
          
          <div className="w-[300px]">
            <AdminMenu />
          </div>
     
            <div className=" font-semibold">
              <h3> Admin Name : {auth?.user?.name}</h3>
              <h3> Admin Email : {auth?.user?.email}</h3>
              <h3> Admin Contact : {auth?.user?.phone}</h3>
            </div>
       
        </div>

    </Layout>
  );
};

export default AdminDashboard;
