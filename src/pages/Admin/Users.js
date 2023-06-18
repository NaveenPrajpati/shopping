import React from "react";
import AdminMenu from "../../components/Layout/AdminMenu";
import Layout from "./../../components/Layout/Layout";

const Users = () => {
  return (
    <Layout title={"Dashboard - All Users"}>
      <div className="flex flex-col sm:flex-row mt-20 mx-10 gap-10">
        <div className="w-[300px]">
            <AdminMenu />
          </div>
          <div className="">
            <h1>All Users</h1>
          </div>
        </div>
      
    </Layout>
  );
};

export default Users;
