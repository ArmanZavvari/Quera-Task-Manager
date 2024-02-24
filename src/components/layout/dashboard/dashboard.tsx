import { Outlet } from "react-router-dom";
import SmartSidebar from "../../common/sidebar/sidebar";

const Dashboard = () => {
  return (
    <div className="flex" dir="rtl">
      <div className="flex-initial flex-1 ">
        <Outlet />
      </div>
      <div className="flex-initial w-[340px] h-[100vh]">
        <SmartSidebar />
      </div>
    </div>
  );
};

export default Dashboard;
