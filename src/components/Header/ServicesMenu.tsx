import React, { useState } from "react";
import { Link, navigate } from "gatsby";
import BIMLOGO from "../../assets/svgs/bim_logo.svg";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import navigationData from "./navigation.json";

// Shared nav class for consistent typography (used for all nav items as buttons)
const navItemClass = "text-sm font-semibold leading-6 text-gray-900 hover:underline hover:decoration-[#FBDA05] hover:decoration-2 hover:underline-offset-4 transition-all bg-transparent border-none cursor-pointer";

// Helper Components
const MenuItem = ({ item }: { item: { name: string; href: string } }) => (
  <Link
    to={item.href}
    className="block text-sm font-medium text-gray-600 hover:text-gray-900"
  >
    <div className="flex items-center hover:bg-blue-50 px-2 py-1 rounded-md transition">
      <span>{item.name}</span>
    </div>
  </Link>
);

const MenuCategory = ({
  category,
  items,
  twoColumn = false,
}: {
  category?: string;
  items: Array<{ name: string; href: string }>;
  twoColumn?: boolean;
}) => {
  // Split items into two columns (column-first order)
  const midpoint = Math.ceil(items.length / 2);
  const leftColumn = items.slice(0, midpoint);
  const rightColumn = items.slice(midpoint);

  const renderItem = (item: { name: string; href: string }) => (
    <MenuItem key={item.name} item={item} />
  );

  return (
    <div>
      {category && (
        <h3 className="text-lg font-semibold text-gray-900 mb-3 pb-2 border-b-2">
          {category}
        </h3>
      )}
      {twoColumn ? (
        <div className="flex gap-x-12">
          <div className="space-y-1">
            {leftColumn.map(renderItem)}
          </div>
          <div className="space-y-1">
            {rightColumn.map(renderItem)}
          </div>
        </div>
      ) : (
        <div className="space-y-3">{items.map(renderItem)}</div>
      )}
    </div>
  );
};

const MobileDisclosureSection = ({
  title,
  categories,
  onClose,
  cls,
}: {
  title: string;
  categories: Array<{ category: string; items: Array<{ name: string; href: string }> }>;
  onClose: () => void;
  cls: (...classes: string[]) => string;
}) => (
  <Disclosure as="div" className="-mx-3">
    {({ open }) => (
      <>
        <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold text-gray-900 hover:bg-blue-50">
          {title}
          <ChevronDownIcon
            className={cls(open ? "rotate-180" : "", "h-5 w-5")}
          />
        </Disclosure.Button>
        <Disclosure.Panel className="space-y-1">
          {categories.map((c) => (
            <div key={c.category} className="px-3 py-1">
              <h4 className="text-sm font-semibold text-gray-900">
                {c.category}
              </h4>
              {c.items.map((it) => (
                <Disclosure.Button
                  key={it.name}
                  as={Link}
                  to={it.href}
                  onClick={onClose}
                  className="block rounded-lg py-1 pl-6 pr-3 text-sm leading-7 text-gray-500 hover:bg-blue-50"
                >
                  <div className="flex items-center">{it.name}</div>
                </Disclosure.Button>
              ))}
            </div>
          ))}
        </Disclosure.Panel>
      </>
    )}
  </Disclosure>
);

export default function HeaderNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Get navigation data from JSON file
  const { mainNav, services } = navigationData;

  // Simple class name helper
  const cls = (...classes: string[]) =>
    classes.filter(Boolean).join(" ");

  return (
    <>
      {/* Main Header */}
      <header className="sticky top-0 z-20 bg-white shadow-sm">
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <Link to="/" aria-label="Home">
              <BIMLOGO className="h-10 lg:h-14 w-auto" />
            </Link>
          </div>

          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" />
            </button>
          </div>

          <PopoverGroup className="hidden lg:flex lg:gap-x-12 lg:justify-center lg:flex-1">
            {mainNav.map((navItem) => (
              navItem.hasMegaMenu ? (
                // Services Mega Menu
                <Popover key={navItem.label}>
                  <PopoverButton className={`inline-flex items-center gap-x-1 ${navItemClass} focus:outline-none`}>
                    {navItem.label}
                    <ChevronDownIcon
                      className="h-5 w-5"
                      aria-hidden="true"
                    />
                  </PopoverButton>
                  <PopoverPanel className="absolute inset-x-0 top-full z-10 bg-white shadow-lg ring-1 ring-gray-900/5">
                    <div className="flex justify-center px-6 pt-4 pb-10 lg:px-8">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 max-w-8xl">
                        {/* Digital Modelling - 2 columns (first category with most items) */}
                        <MenuCategory
                          category={services[0].category}
                          items={services[0].items}
                          twoColumn
                        />

                        {/* Geospatial Solutions - 1 column */}
                        <MenuCategory
                          category={services[1].category}
                          items={services[1].items}
                        />

                        {/* Consultancy - 1 column */}
                        <MenuCategory
                          category={services[2].category}
                          items={services[2].items}
                        />
                      </div>
                    </div>
                  </PopoverPanel>
                </Popover>
              ) : (
                // Regular nav item as button (for consistent styling)
                <button
                  key={navItem.label}
                  type="button"
                  className={`${navItemClass} focus:outline-none`}
                  onClick={() => navigate(navItem.href)}
                >
                  {navItem.label}
                </button>
              )
            ))}
          </PopoverGroup>

          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link
              to="/contact/"
              className="transition-all hover:opacity-80 text-sm md:text-base text-black font-medium rounded-md bg-[#FBDA05] py-[12px] px-4 md:px-[25px]"
            >
              Contact Us
            </Link>
          </div>
        </nav>

        {/* Mobile Menu */}
        <Dialog
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-10 bg-gray-900/20" />
          <DialogPanel className="fixed inset-y-0 right-0 z-20 w-full sm:w-auto sm:max-w-sm overflow-y-auto bg-white px-6 py-6 sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link to="/" aria-label="Home">
                <BIMLOGO className="h-10 w-auto" />
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-900 hover:text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {mainNav.map((navItem) => (
                    navItem.hasMegaMenu ? (
                      // Services Disclosure for mobile
                      <MobileDisclosureSection
                        key={navItem.label}
                        title={navItem.label}
                        categories={services}
                        onClose={() => setMobileMenuOpen(false)}
                        cls={cls}
                      />
                    ) : (
                      // Regular mobile nav link
                      <Link
                        key={navItem.label}
                        to={navItem.href}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-blue-50"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {navItem.label}
                      </Link>
                    )
                  ))}

                  <div className="mt-6">
                    <Link
                      to="/contact/"
                      className="block w-full text-center text-sm md:text-base text-black font-semibold rounded-md bg-[#FBDA05] py-[12px] px-4"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
    </>
  );
}
