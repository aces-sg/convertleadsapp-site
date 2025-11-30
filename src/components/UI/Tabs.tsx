import React, { FC, Fragment } from "react";
import { Tab as HeadlessTab } from "@headlessui/react";
import classNames from "classnames";

interface TabsProps {
  tabs: Array<{
    title: string;
    content: React.ReactNode;
  }>;
  defaultIndex?: number;
  onChange?: (index: number) => void;
}

const Tabs: FC<TabsProps> = ({ tabs, defaultIndex = 0, onChange }) => {
  return (
    <HeadlessTab.Group defaultIndex={defaultIndex} onChange={onChange}>
      <HeadlessTab.List className="flex space-x-1 rounded-xl bg-gray-100 p-1">
        {tabs.map((tab, index) => (
          <HeadlessTab
            key={index}
            as={Fragment}
          >
            {({ selected }) => (
              <button
                className={classNames(
                  "w-full rounded-lg py-2.5 px-4 text-sm font-medium leading-5 transition-colors",
                  "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-brand-400 ring-white ring-opacity-60",
                  selected
                    ? "bg-white text-brand-700 shadow"
                    : "text-gray-700 hover:bg-white/[0.12] hover:text-gray-900"
                )}
              >
                {tab.title}
              </button>
            )}
          </HeadlessTab>
        ))}
      </HeadlessTab.List>
      <HeadlessTab.Panels className="mt-4">
        {tabs.map((tab, index) => (
          <HeadlessTab.Panel key={index} className="rounded-xl bg-white p-3">
            {tab.content}
          </HeadlessTab.Panel>
        ))}
      </HeadlessTab.Panels>
    </HeadlessTab.Group>
  );
};

// Individual Tab and TabPanel exports for more flexibility
export const Tab = HeadlessTab;
export const TabList = HeadlessTab.List;
export const TabPanel = HeadlessTab.Panel;
export const TabPanels = HeadlessTab.Panels;
export const TabGroup = HeadlessTab.Group;

export default Tabs;
