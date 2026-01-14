import React from "react";
import {
  Sidebar,
  SidebarItem,
  SidebarItemGroup,
  SidebarItems,
} from "flowbite-react";
import {
  HiChartPie,
  HiInbox,
  HiShoppingBag,
  HiUser,
} from "react-icons/hi";
import { BiBuoy } from "react-icons/bi";
import { Link, useLocation } from "react-router-dom";

function AdminSideBar() {
  const { pathname } = useLocation();

  const itemClass = (path) =>
    pathname === path
      ? "bg-blue-600 text-white rounded-lg transition-all"
      : "text-gray-700 hover:bg-blue-100 rounded-lg transition-all";

  return (
    <aside className="fixed top-24 left-4 w-56 h-[calc(100vh-7rem)] bg-white rounded-3xl shadow-xl border border-gray-200">
      <Sidebar className="h-full bg-transparent">
        <SidebarItems className="flex flex-col justify-between h-full px-3">

          {/* MAIN */}
          <div>
            <h2 className="text-xl font-semibold text-gray-100 px-3 mb-6">
              Admin Panel
            </h2>

            <SidebarItemGroup>
              <SidebarItem
                as={Link}
                to="/admin-home"
                icon={HiChartPie}
                className={itemClass("/admin-dashboard")}
              >
                Dashboard
              </SidebarItem>

              <SidebarItem
                as={Link}
                to="/admin-users"
                icon={HiUser}
                className={itemClass("/admin-users")}
              >
                Users
              </SidebarItem>

              <SidebarItem
                as={Link}
                to="/admin-providers"
                icon={HiShoppingBag}
                className={itemClass("/admin-providers")}
              >
                Providers
              </SidebarItem>

              <SidebarItem
                as={Link}
                to="/admin-booking"
                icon={HiInbox}
                className={itemClass("/admin-booking")}
              >
                Bookings
              </SidebarItem>
            </SidebarItemGroup>
          </div>

          {/* FOOTER */}
          

        </SidebarItems>
      </Sidebar>
    </aside>
  );
}

export default AdminSideBar;
