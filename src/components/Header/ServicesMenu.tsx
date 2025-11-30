import React, { useState, useContext } from "react";
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
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  XMarkIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { GlobalDispatchContext } from "../../context/GlobalContextProvider";

const services = [
  {
    category: "Geospatial Solutions",
    items: [
      {
        name: "Drone Survey",
        href: "/services/drone-survey",
        icon: SparklesIcon,
      },
      {
        name: "LiDAR Scan",
        href: "/services/scan-to-bim",
        icon: SparklesIcon,
      },
    ],
  },
  {
    category: "Digital Modelling",
    href: "/services/3d",
    items: [
      {
        name: "CAD Drawings",
        href: "/services/cad-services",
        icon: SparklesIcon,
      },
      {
        name: "BIM for Architecture",
        href: "/services/bim-architecture",
        icon: CursorArrowRaysIcon,
      },
      {
        name: "BIM for Structure",
        href: "/services/bim-structure",
        icon: CursorArrowRaysIcon,
      },
      {
        name: "BIM for MEP",
        href: "/services/bim-mep",
        icon: CursorArrowRaysIcon,
      },
      {
        name: "BIM Coordination",
        href: "/services/bim/",
        icon: CursorArrowRaysIcon,
      },
      {
        name: "4D BIM",
        href: "/services/4d-bim",
        icon: CursorArrowRaysIcon,
      },
      {
        name: "5D BIM",
        href: "/services/5d-bim",
        icon: CursorArrowRaysIcon,
      },
      {
        name: "6D BIM",
        href: "/services/6d-bim",
        icon: CursorArrowRaysIcon,
      },
      {
        name: "Scan to BIM",
        href: "/services/scan-to-bim",
        icon: FingerPrintIcon,
      },
      {
        name: "Revit Services",
        href: "/services/revit-services",
        icon: FingerPrintIcon,
      },
    ],
  },
  {
    category: "Digital Consultancy",
    href: "/services/consulting",
    items: [
      {
        name: "BIM Implementation",
        href: "/services/3d/consultancy",
        icon: ChartPieIcon,
      },
      {
        name: "Integrated Digital Delivery",
        href: "/services/idd",
        icon: ChartPieIcon,
      },
      {
        name: "CORENET X",
        href: "/services/corenetx-bim",
        icon: ChartPieIcon,
      },
    ],
  },
];

const products = [
  {
    category: "Modelling & Drafting",
    items: [
      {
        name: "Microstation",
        href: "/software/microstation",
        icon: SparklesIcon,
      },
      {
        name: "OpenBuildings Designer",
        href: "/software/openbuildings-bim",
        icon: SparklesIcon,
      },
      {
        name: "OpenRoads Designer",
        href: "/software/openroads-designer",
        icon: SparklesIcon,
      },
      {
        name: "OpenPlant Modeller",
        href: "/software/openplant",
        icon: SparklesIcon,
      },
    ],
  },
  {
    category: "Engineering Analysis",
    items: [
      {
        name: "Plaxis 2D",
        href: "/software/plaxis-2d",
        icon: CursorArrowRaysIcon,
      },
      {
        name: "Plaxis 3D",
        href: "/software/plaxis-3d",
        icon: CursorArrowRaysIcon,
      },
      {
        name: "STAAD.Pro",
        href: "/software/staad-pro",
        icon: CursorArrowRaysIcon,
      },
    ],
  },
  {
    category: "Solutions",
    items: [
      {
        name: "Integrated Digital Delivery",
        href: "/software/projectwise",
        icon: SparklesIcon,
      },
      {
        name: "IFC Viewer",
        href: "/software/ifc-viewer",
        icon: FingerPrintIcon,
      },
      {
        name: "4D Construction",
        href: "/software/synchro-4d",
        icon: CursorArrowRaysIcon,
      },
    ],
  },
];

const company = [
  {
    name: "About",
    description:
      "Bimeco is the leading BIM services provider in Singapore",
    href: "/about",
    icon: ChartPieIcon,
  },
  {
    name: "Portfolio",
    description: "Our expertise in BIM-based project delivery",
    href: "/portfolio#timeline",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Careers",
    description: "Join the Bimeco team",
    href: "/career",
    icon: FingerPrintIcon,
  },
  {
    name: "Blog",
    description: "Learn more about BIM implementation",
    href: "/blog",
    icon: FingerPrintIcon,
  },
];

const other = [
  {
    name: "Contact",
    description: "Get in touch with us",
    href: "/contact",
    icon: FingerPrintIcon,
  },
];

// Helper Components
const MenuItem = ({ item }) => (
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
  items: Array<{ name: string; href: string; icon?: any }>;
  twoColumn?: boolean;
}) => {
  // Split items into two columns (column-first order)
  const midpoint = Math.ceil(items.length / 2);
  const leftColumn = items.slice(0, midpoint);
  const rightColumn = items.slice(midpoint);

  const renderItem = (item: { name: string; href: string }) =>
    item.href?.startsWith("http") ? (
      <a
        key={item.name}
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className="block text-sm font-medium text-gray-600 hover:text-gray-900"
      >
        <div className="flex items-center hover:bg-blue-50 px-2 py-1 rounded-md transition">
          <span>{item.name}</span>
        </div>
      </a>
    ) : (
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
              {c.items.map((it) =>
                it.href?.startsWith("http") ? (
                  <Disclosure.Button
                    key={it.name}
                    as="a"
                    href={it.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-lg py-1 pl-6 pr-3 text-sm leading-7 text-gray-500 hover:bg-blue-50"
                  >
                    <div className="flex items-center">{it.name}</div>
                  </Disclosure.Button>
                ) : (
                  <Disclosure.Button
                    key={it.name}
                    as={Link}
                    to={it.href}
                    onClick={onClose}
                    className="block rounded-lg py-1 pl-6 pr-3 text-sm leading-7 text-gray-500 hover:bg-blue-50"
                  >
                    <div className="flex items-center">{it.name}</div>
                  </Disclosure.Button>
                )
              )}
            </div>
          ))}
        </Disclosure.Panel>
      </>
    )}
  </Disclosure>
);

export default function HeaderNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dispatch = useContext(GlobalDispatchContext);

  const handleContact = () =>
    dispatch({
      type: "TOGGLE_CONTACT",
      payload: { show: true, message: "" },
    });

  // Simple class name helper
  const cls = (...classes: string[]) =>
    classes.filter(Boolean).join(" ");

  return (
    <>
      {/* Top Bar */}
      <div
        id="secondary-menu"
        className="bg-gray-100 border-b border-gray-200"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-2 flex justify-end items-center gap-4">
          <button
            type="button"
            className="text-sm font-medium text-gray-700 hover:text-gray-900 hover:underline hover:decoration-[#FBDA05] hover:decoration-2 hover:underline-offset-4 transition-all"
            onClick={() => navigate("https://viewer.bim.com.sg")}
          >
            IFC Viewer
          </button>
          <button
            type="button"
            className="text-sm font-medium text-gray-700 hover:text-gray-900 hover:underline hover:decoration-[#FBDA05] hover:decoration-2 hover:underline-offset-4 transition-all"
            onClick={() =>
              navigate("https://viewer.bim.com.sg/projects/create")
            }
          >
            File Upload
          </button>
          <button
            type="button"
            className="text-sm font-medium text-gray-700 hover:text-gray-900 hover:underline hover:decoration-[#FBDA05] hover:decoration-2 hover:underline-offset-4 transition-all"
            onClick={() => navigate("/user/login")}
          >
            Login
          </button>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-20 bg-white shadow-sm">
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <Link to="/" aria-label="Bimeco">
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
            {/* Services */}
            <Popover>
              <PopoverButton className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 hover:underline hover:decoration-[#FBDA05] hover:decoration-2 hover:underline-offset-4 transition-all focus:outline-none">
                Services
                <ChevronDownIcon
                  className="h-5 w-5"
                  aria-hidden="true"
                />
              </PopoverButton>
              <PopoverPanel className="absolute inset-x-0 top-full z-10 bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="flex justify-center px-6 pt-4 pb-10 lg:px-8">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-16 max-w-8xl">
                    {/* Digital Modelling - 2 columns */}
                    <MenuCategory
                      category={services[1].category}
                      items={services[1].items}
                      twoColumn
                    />

                    {/* Geospatial Solutions - 1 column */}
                    <MenuCategory
                      category={services[0].category}
                      items={services[0].items}
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

            {/* Software */}
            <Popover>
              <PopoverButton className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 hover:underline hover:decoration-[#FBDA05] hover:decoration-2 hover:underline-offset-4 transition-all focus:outline-none">
                Software
                <ChevronDownIcon
                  className="h-5 w-5"
                  aria-hidden="true"
                />
              </PopoverButton>
              <PopoverPanel className="absolute inset-x-0 top-full z-10 bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="flex justify-center px-6 pt-4 pb-10 lg:px-8">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl w-full">
                    {products.map((category) => (
                      <MenuCategory
                        key={category.category}
                        category={category.category}
                        items={category.items}
                      />
                    ))}
                  </div>
                </div>
              </PopoverPanel>
            </Popover>

            {/* Company */}
            <Popover>
              <PopoverButton className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 hover:underline hover:decoration-[#FBDA05] hover:decoration-2 hover:underline-offset-4 transition-all focus:outline-none">
                Company
                <ChevronDownIcon
                  className="h-5 w-5"
                  aria-hidden="true"
                />
              </PopoverButton>
              <PopoverPanel className="absolute inset-x-0 top-full z-10 bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="flex justify-center px-6 pt-4 pb-10 lg:px-8">
                  <div className="grid grid-cols-4 gap-x-2 xl:gap-x-4 max-w-5xl w-full">
                    {company.map((item) => (
                      <div
                        key={item.name}
                        className="group relative rounded-lg p-6 text-sm leading-6 hover:bg-gray-50"
                      >
                        <Link
                          to={item.href}
                          className="mt-6 block font-semibold text-gray-900"
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </Link>
                        <p className="mt-1 text-gray-600">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </PopoverPanel>
            </Popover>

            {other.map(({ name, href }) => (
              <Link
                key={name}
                className="text-sm font-semibold leading-6 text-gray-900 hover:underline hover:decoration-[#FBDA05] hover:decoration-2 hover:underline-offset-4 transition-all"
                to={href}
              >
                {name}
              </Link>
            ))}
          </PopoverGroup>

          <div
            id="cta"
            className="hidden lg:flex lg:flex-1 lg:justify-end gap-4"
          >
            <button
              type="button"
              className="transition-all hover:opacity-80 text-sm md:text-base text-black font-medium rounded-md bg-main-primary py-[12px] px-4 md:px-[25px]"
              onClick={() => navigate("/find-specialist")}
            >
              Find a BIM Specialist
            </button>
          </div>
        </nav>

        <Dialog
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-10 bg-gray-900/20" />
          <DialogPanel className="fixed inset-y-0 right-0 z-20 w-full sm:w-auto sm:max-w-sm overflow-y-auto bg-white px-6 py-6 sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link to="/" aria-label="Bimeco">
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
                  <MobileDisclosureSection
                    title="Services"
                    categories={services}
                    onClose={() => setMobileMenuOpen(false)}
                    cls={cls}
                  />

                  <MobileDisclosureSection
                    title="Software"
                    categories={products}
                    onClose={() => setMobileMenuOpen(false)}
                    cls={cls}
                  />

                  <Disclosure as="div" className="-mx-3">
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold text-gray-900 hover:bg-blue-50">
                          Company
                          <ChevronDownIcon
                            className={cls(
                              open ? "rotate-180" : "",
                              "h-5 w-5"
                            )}
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className="mt-2 space-y-2">
                          {company.map((it) => (
                            <Disclosure.Button
                              key={it.name}
                              as={Link}
                              to={it.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold text-gray-900 hover:bg-blue-50"
                            >
                              {it.name}
                            </Disclosure.Button>
                          ))}
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>

                  <Link
                    to="/contact"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-blue-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Contact
                  </Link>
                  <div className="mt-6">
                    <button
                      type="button"
                      className="w-full text-sm md:text-base text-black font-semibold rounded-md bg-[#FBDA05] py-[12px] px-4 md:px-[25px]"
                      onClick={() => navigate("/user/login")}
                    >
                      Login
                    </button>
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
