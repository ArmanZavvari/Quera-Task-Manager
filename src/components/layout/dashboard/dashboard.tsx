import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex">
      <div className="flex-initial flex-1 ">
        <Outlet />
      </div>
      <div className="flex-initial w-[340px] h-[1024px]">Side Bar</div>
    </div>
  );
};

export default Dashboard;
