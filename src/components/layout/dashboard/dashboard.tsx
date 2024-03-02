import { Outlet, useLocation } from "react-router-dom";
import SmartSidebar from "../../common/sidebar/sidebar";
import BodyHeader from "../../common/bodyHeader/header";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const [status, setStatus] = useState(true);

  useEffect(() => {
    if (currentUrl.pathname.startsWith("/profile")) {
      setStatus(false);
    }
  }, []);

  const currentUrl = useLocation();
  console.log(currentUrl);

  return (
    <div className="flex relative " dir="rtl">
      <SmartSidebar />

      <div className="flex flex-col w-[calc(100%-340px)] mr-[340px]">
        <div className="flex flex-col px-4 py-10 ">
          {status && <BodyHeader />}
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
