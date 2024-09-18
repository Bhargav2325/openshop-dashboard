import React from "react";
import DashboardGrid from "./DashboardGrid";
import TransactionChart from "./TransactionChart";
import BuyerProfileChart from "./BuyerProfileChart";
import RecentsOrder from "./RecentsOrder";
import PopularProducts from "./PopularProducts";

const Dashboard = () => {
  return (
    <div className="flex flex-col gap-4">
      <DashboardGrid />
      <div className="flex flex-row gap-4 w-full">
        <TransactionChart />
        <BuyerProfileChart />
      </div>
      <div className="flex flex-row gap-4 w-full">
        <RecentsOrder />
        <PopularProducts />
      </div>
    </div>
  );
};

export default Dashboard;
