import React from "react";

import { Button } from "./button";

type Tabs = {
  name: string;
  href: string;
};

type ButtonTabsProps = {
  tabs: Tabs[];
  activeTab: string;
  onTabChange: (tab: string) => void;
};

const NavigationTabs: React.FC<ButtonTabsProps> = ({ tabs, activeTab, onTabChange }) => {
  return (
    <span className="flex justify-between gap-2 bg-zinc-200 px-2 py-1 w-fit rounded flex-wrap">
      {tabs.map((tab: Tabs) => (
        <Button
          key={tab.href}
          onClick={() => onTabChange(tab.href)}
          className={`cursor-pointer  ${activeTab === tab.href ? "bg-[#fff] text-black font-semibold" : "border-transparent text-zinc-600 hove:text-[355CE1]"}`}
        >
          {tab.name}
        </Button>
      ))}
    </span>
  );
};

export default NavigationTabs;
