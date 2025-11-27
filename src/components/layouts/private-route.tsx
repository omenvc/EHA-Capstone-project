import { Navigate, Outlet } from "react-router-dom";

import { isAuthenticated } from "@/utils/auth";

import DashboardNavbar from "./dashboard-navbar";

function PrivateRoute() {
  if (!isAuthenticated()) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="w-full h-full overflow-x-hidden">
      <DashboardNavbar />
      <div className="px-10 py-5">
        <Outlet />
      </div>
    </div>
  );
}

export default PrivateRoute;
