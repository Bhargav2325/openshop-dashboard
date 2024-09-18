import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcBullish } from "react-icons/fc";
import {
  DASHBOARD_SIDEBAR_LINKS,
  DASHBOARD_SIDEBAR_BOTTOM_LINKS,
} from "../lib/consts/Navigation";
import classNames from "classnames";
import { HiOutlineLogout } from "react-icons/hi";

const linkClasses =
  "flex items-center gap-2 font-light px-3 py-2 hover:no-underline hover:bg-neutral-600 focus:bg-neutral-700 rounded-sm text-base";

const Sidebar = () => {
  const navigate = useNavigate();

  // let user = JSON.parse(localStorage.getItem("user-info"));
  const logOut = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div className="bg-neutral-900 w-60 p-3 text-white flex flex-col">
      <div className="flex items-center gap-2 px-1 py-3">
        <FcBullish fontSize={24} />
        <span className="text-neutral-100 text-lg">OpenShop</span>
      </div>
      <div className="flex-1 flex mt-5 flex-col gap-0.5 ">
        {DASHBOARD_SIDEBAR_LINKS.map((item) => (
          <SidebarLink key={item.key} item={item} />
        ))}
      </div>
      <div className="flex-col flex gap-0.5  border-t border-neutral-700">
        {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((item) => (
          <SidebarLink key={item.key} item={item} />
        ))}
        {localStorage.getItem("user_info") ? (
          <div
            onClick={logOut}
            className={classNames("text-red-500 cursor-pointer", linkClasses)}
          >
            <span className="text-xl">
              <HiOutlineLogout />
            </span>
            Logout
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Sidebar;
const SidebarLink = ({ item }) => {
  const { pathname } = useLocation();

  return (
    <Link
      to={item.path}
      className={classNames(
        pathname === item.path
          ? "text-white bg-neutral-600"
          : "text-neutral-400",
        linkClasses,
      )}
    >
      <span className="text-xl">{item.icon}</span>
      {item.label}
    </Link>
  );
};
