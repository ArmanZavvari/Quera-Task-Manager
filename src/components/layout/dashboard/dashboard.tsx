import { Outlet, useLocation } from "react-router-dom";
import SmartSidebar from "../../common/sidebar/sidebar";
import { useEffect, useState } from "react";

const Dashboard = () => {
  return (
    <div className="flex" dir="rtl">
      <div className="flex-initial w-[340px] h-[100vh]">
        <SmartSidebar />
      </div>
      <div className="flex-initial flex-1 ">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
