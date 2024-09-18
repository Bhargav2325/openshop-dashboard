import {
  Popover,
  Transition,
  PopoverButton,
  Menu,
  MenuButton,
} from "@headlessui/react";
import classNames from "classnames";
import React, { Fragment } from "react";
import {
  HiOutlineBell,
  HiOutlineChatAlt,
  HiOutlineSearch,
  HiOutlineUser,
  HiOutlineCog,
  HiOutlineLogout,
} from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  // let user = JSON.parse(localStorage.getItem("user-info"));
  const logOut = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div className="bg-neutral-900 h-20 w-full flex justify-between items-center border-b border-gray-200">
      <div className="relative">
        <HiOutlineSearch
          size={20}
          className="text-gray-400 absolute top-1/2 left-3 cursor-pointer -translate-y-1/2"
        />
        <input
          type="text"
          placeholder="Search..."
          className="text-sm focus:outline-none active:outline-none h-10 w-[24rem] border border-gray-300 px-4 pr-4 pl-11 rounded-[5px]"
        />
      </div>
      <div className="flex items-center gap-2 mr-2  ">
        {localStorage.getItem("user_info") ? null : (
          <div className="text-white hover:bg-neutral-800/5 py-1 px-2 rounded-sm cursor-pointer">
            <a href="/login" className="text-white no-underline">
              Sign In
            </a>
          </div>
        )}
        <Popover className="relative">
          {({ open }) => (
            <>
              <PopoverButton
                className={classNames(
                  open && "bg-neutral-800",
                  "p-1.5 rounded-sm inline-flex items-center text-white hover:text-opacity-100 focus:outline-none active:bg-neutral-900",
                )}
              >
                <HiOutlineChatAlt size={24} className=" cursor-pointer" />
              </PopoverButton>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveForm="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute right-0 z-10 mt-5 w-80">
                  <div className="bg-white flex flex-col rounded-sm shadow-md ring-1 ring-black ring-opacity-5 px-2 py-2.5">
                    <strong className="text-gray-700 font-medium">
                      Message
                    </strong>
                    <div className="mt-2 py-1 text-sm">
                      This is Messages Panel.
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>
        <Popover className="relative">
          {({ open }) => (
            <>
              <PopoverButton
                className={classNames(
                  open && "bg-neutral-800",
                  "p-1.5 rounded-sm inline-flex items-center text-white hover:text-opacity-100 focus:outline-none active:bg-neutral-900",
                )}
              >
                <HiOutlineBell size={24} className="cursor-pointer" />
              </PopoverButton>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveForm="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute right-0 mt-5 z-10 w-80">
                  <div className="bg-white flex flex-col rounded-sm shadow-md ring-1 ring-black ring-opacity-5 px-2 py-2.5">
                    <strong className="text-gray-700 font-medium">
                      Notifications
                    </strong>
                    <div className="mt-2 py-1 text-sm">
                      This is Notification Panel.
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>
        {localStorage.getItem("user_info") ? (
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <MenuButton className="ml-2 inline-flex rounded-full focus:outline-none focus:ring-2 focus:ring-neutral-400">
                <span className="sr-only">Open User Menu</span>
                <div
                  className="h-10 w-10 rounded-full bg-cover bg-no-repeat bg-center"
                  style={{
                    backgroundImage:
                      'url("https://www.disneyplusinformer.com/wp-content/uploads/2021/06/Luca-Profile-Avatars-3.png")',
                  }}
                >
                  <span className="sr-only">Hugh Jackson</span>
                </div>
              </MenuButton>
            </div>
            <Transition
              as={Fragment}
              enter-active-class="transition duration-100 ease-out"
              enter-from-class="transform scale-95 opacity-0"
              enter-to-class="transform scale-100 opacity-100"
              leave-active-class="transition duration-75 ease-in"
              leave-from-class="transform scale-100 opacity-100"
              leave-to-class="transform scale-95 opacity-0"
            >
              <Menu.Items className="origin-top-right z-10 py-2 absolute right-0 mt-4 w-48 rounded-md shadow-sm p-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                <Menu.Item className="flex flex-col">
                  {({ active }) => (
                    <div
                      className={classNames(
                        active && "bg-gray-100",
                        "text-gray-700 focus:bg-gray-200 cursor-pointer rounded-sm px-4 py-2",
                      )}
                      onClick={() => navigate("/profile")}
                    >
                      <div className="flex items-center gap-2">
                        <HiOutlineUser size={20} />
                        <span>Your Profile</span>
                      </div>
                    </div>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <div
                      className={classNames(
                        active && "bg-gray-100",
                        "text-gray-700 focus:bg-gray-200 cursor-pointer rounded-sm px-4 py-2",
                      )}
                      onClick={() => navigate("/setting ")}
                    >
                      <div className="flex items-center gap-2">
                        <HiOutlineCog size={20} />
                        <span>Settings</span>
                      </div>
                    </div>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <div
                      className={classNames(
                        active && "bg-gray-100",
                        "text-gray-700 focus:bg-gray-200 cursor-pointer rounded-sm px-4 py-2",
                      )}
                      onClick={() => navigate("")}
                    >
                      <div onClick={logOut} className="flex items-center gap-2">
                        <HiOutlineLogout size={20} />
                        <span>Sign Out</span>
                      </div>
                    </div>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </Menu>
        ) : null}
      </div>
    </div>
  );
};

export default Header;
