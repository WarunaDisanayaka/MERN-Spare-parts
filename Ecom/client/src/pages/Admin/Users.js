import React from "react";
import AdminMenu from "../../components/Layout/AdminMenu";
import Layout from "../../components/Layout/Layout";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const Users = () => {
  const data = [
    { name: 'Jan', value: 100 },
    { name: 'Feb', value: 200 },
    { name: 'Mar', value: 300 },
  ];
  
  return (
    <Layout title={"Dashboard - All Users"}>
      <div className="container-fluid m-5 p-3">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <BarChart width={500} height={300} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
             <XAxis dataKey="name" />
              <YAxis />
            <Tooltip />
         <Legend />
          <Bar dataKey="value" fill="#8884d8" />
      </BarChart>

          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Users;
