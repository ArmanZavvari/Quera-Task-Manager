import { Outlet } from "react-router-dom";
import SmartSidebar from "../../common/sidebar/sidebar";
import BodyHeader from "../../common/bodyHeader/header";

const Dashboard = () => {
  return (
    <div className="flex relative " dir="rtl">
      <SmartSidebar />

      <div className="flex flex-col w-[calc(100%-340px)] mr-[340px]">
        <div className="flex flex-col px-4 py-10 ">
          <BodyHeader />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
