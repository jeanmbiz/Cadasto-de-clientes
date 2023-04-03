import React, { useContext } from "react";
import CustomerList from "../../components/CustomerList/CustomerList";
import Header from "../../components/Header/Header";
import MainDashboard from "../../components/MainDashboard/MainDashboard";
import ModalAddCustomer from "../../components/ModalAddCustomer/ModalAddCustomer";
import { DashboardContext } from "../../Providers/Contexts/DashboardContext";
import ModalEditProfile from "../../components/ModalEditProfile/ModalEditProfile";

const Dashboard = () => {
  const { showModalAddCustomer, showModalEditProfile } =
    useContext(DashboardContext);

  return (
    <div>
      <Header />
      <MainDashboard />
      <CustomerList />
      {showModalAddCustomer && <ModalAddCustomer />}
      {showModalEditProfile && <ModalEditProfile />}
    </div>
  );
};

export default Dashboard;
