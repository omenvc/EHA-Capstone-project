import * as Tabs from "@radix-ui/react-tabs";
import clsx from "clsx";
import React from "react";

type Tab = {
  label: string;
  value: string;
  content: React.ReactNode;
};

type CustomTabsProps = {
  tabs: Tab[];
  defaultValue?: string;
  className?: string;
};

export const CustomTabs: React.FC<CustomTabsProps> = ({
  tabs,
  defaultValue,
  className,
}) => {
  return (
    <Tabs.Root
      className={clsx("w-full", className)}
      defaultValue={defaultValue || tabs[0].value}
    >
      <Tabs.List className="flex border-b border-gray-200">
        {tabs.map(tab => (
          <Tabs.Trigger
            key={tab.value}
            value={tab.value}
            className={clsx(
              "py-2 px-4 text-sm font-medium text-gray-500 data-[state=active]:text-purple-600 data-[state=active]:border-b-2 data-[state=active]:border-purple-600 focus:outline-none",
            )}
          >
            {tab.label}
          </Tabs.Trigger>
        ))}
      </Tabs.List>

      {tabs.map(tab => (
        <Tabs.Content
          key={tab.value}
          value={tab.value}
          className="py-4 focus:outline-none"
        >
          {tab.content}
        </Tabs.Content>
      ))}
    </Tabs.Root>
  );
};
