import React, { useState, Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import BIMLOGO from "../../assets/svgs/bim_logo.svg";
import MobileMenu from "./MobileMenu";
import { navigate } from "gatsby";
import { FaChevronDown, FaUser, FaEye } from "react-icons/fa";
import "./profile.css";

interface HeaderProps {
  fullWidth?: Boolean;
  noMenu?: Boolean;
}

const DropdownMenu = () => (
  <div className="flex items-center">
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-md">
          <FaChevronDown />
          <span>Actions</span>
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="px-1 py-1">
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? "bg-brand-500 text-white" : "text-gray-900"
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm gap-2`}
                  onClick={() => navigate("/user/login")}
                >
                  <FaUser />
                  Logout
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? "bg-brand-500 text-white" : "text-gray-900"
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm gap-2`}
                  onClick={() => navigate("/viewer")}
                >
                  <FaEye />
                  Viewer
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  </div>
);

const ProfileHeader: React.FC<HeaderProps> = (props) => {
  const { fullWidth, noMenu } = props;
  const [openMenu, setOpenMenu] = useState(false);

  const menuHandleClick = () => {
    setOpenMenu(!openMenu);
  };

  const closeMobileMenu = () => {
    setOpenMenu(false);
  };

  return (
    <div style={{ position: "relative" }}>
      <header
        className="btn_header mx-auto"
        style={{ maxWidth: fullWidth ? "100%" : "1280px" }}
      >
        <div
          className="flex flex-row items-center justify-between cursor-pointer"
          style={{ height: "6vh" }}
          onClick={() => navigate("/")}
        >
          <BIMLOGO style={{ height: "60px", width: "140px" }} />
        </div>

        <DropdownMenu />
      </header>
    </div>
  );
};

export default ProfileHeader;
