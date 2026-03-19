import { Outlet } from "react-router";
import { ProfileDrawer } from "./ProfileDrawer";

export function Layout() {
  return (
    <div className="min-h-screen bg-gray-50">
      <ProfileDrawer />
      <Outlet />
    </div>
  );
}
