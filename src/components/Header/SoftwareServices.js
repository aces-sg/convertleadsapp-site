import React, { useState, useContext } from "react";
import { Link } from "gatsby";
import BIMLOGO from "../../assets/svgs/Logo.svg";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { GlobalDispatchContext } from "../../context/GlobalContextProvider";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dispatch = useContext(GlobalDispatchContext);

  const handleContact = () => {
    dispatch({
      type: "TOGGLE_CONTACT",
      payload: {
        contactLayer: true,
      },
    });
  };
  const Navigation = [
    {
      label: "Product",
      link: "#",
    },
    {
      label: "Features",
      link: "#",
    },
    {
      label: "Marketplace",
      link: "#",
    },
    {
      label: "Company",
      link: "#",
    },
  ];

  return (
    <header className="relative isolate z-10 bg-black">
      <nav
        className="mx-auto flex max-w-7xl items-center gap-5 justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1 max-w-fit lg:mr-10">
          <Link to="/">
            <span className="sr-only">Bimeco</span>
            <BIMLOGO className="h-14 w-auto align-center" />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-100"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <div className="hidden lg:flex lg:gap-x-12">
          {Navigation.map((item) => (
            <Link
              key={item.label}
              to={item.link}
              className="text-[16px] font-[500] leading-6 text-white bg-gray-900"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center gap-6">
          <a
            href="/user/login"
            className="text-[16px] font-[500] leading-6 text-white"
          >
            Log in <span aria-hidden="true">&rarr;</span>
          </a>
          <button
            type="button"
            className="transition-all duration-300 ease-in-out hover:opacity-80 text-sm md:text-base text-black font-medium capitalize rounded-md shadow-shadow-sm bg-main-primary py-[13px] px-4 md:px-[25px]"
            onClick={() => navigate("/#bim-packages")}
          >
            Start free trial
          </button>
        </div>
      </nav>
      <Dialog
        className="lg:hidden "
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="false" />
            </button>
          </div>

          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6 bg-gray-900 grid gap-6">
                {Navigation.map((item) => (
                  <Link
                    key={item.label}
                    to={item.link}
                    className="text-[16px] font-[500] leading-6 text-white bg-gray-900"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
              <div className="py-6">
                <a
                  href="/user/login"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-gray-50"
                >
                  Log in
                </a>
                <button
                  type="button"
                  className="transition-all duration-300 ease-in-out hover:opacity-80 text-sm md:text-base text-black font-medium capitalize rounded-md shadow-shadow-sm bg-main-primary py-[13px] px-4 md:px-[25px]"
                  onClick={() => navigate("/#bim-packages")}
                >
                  Our Packages
                </button>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
