import { Outlet } from "react-router-dom";
import Navbar from "../../navbar/navbar";

function AuthLayout() {
  return (
    <div>
      <div className="nav">
        <Navbar />
      </div>
      <div className="relative z-0">
        <div className=" transform rotate-177 h-screen"></div>
        <span className="absolute inset-0 bg-white clip-polygon"></span>
      </div>
      <div className="fixed inset-0 flex justify-center items-center">
        <Outlet />
      </div>
    </div>
  );
}
export default AuthLayout;
