import { Outlet } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar";

import Navbar from "../Navbar/Navbar";
import AppSidebar from "../AppSideabr/AppSidebar";

const Layout = () => {
  return (
    <SidebarProvider>
      {/* <div className="flex h-screen w-screen "> */}

      <div className="flex h-dvh w-full overflow-hidden">
        <div className="w-64  h-full hidden md:block">
          <AppSidebar />
        </div>
        <div className="flex flex-col flex-1 border  ">
          <div className=" h-16 ">
            <Navbar />
          </div>
          <div className="flex-1  p-4 overflow-y-auto  ">
            <Outlet />
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Layout;
