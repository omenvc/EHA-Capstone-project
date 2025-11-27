import React from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Breadcrumb = { label: string; href?: string };

type TabItem = {
  label: string;
  value: string;
};

type DashboardHeaderProps = {
  title?: string;
  breadcrumbs?: Breadcrumb[];
  tabs?: TabItem[];
  activeTab?: string;
  onTabChange?: (tab: string) => void;
  buttonLabel?: string;
  onButtonClick?: () => void;
};

const DashboardHeader: React.FC<DashboardHeaderProps> = ({
  title = "Dashboard",
  breadcrumbs = [],
  tabs = [],
  activeTab,
  onTabChange,
  buttonLabel,
  onButtonClick,
}) => {
  return (
    <div className="space-y-4">
      <h1 className="text-xl sm:text-2xl font-bold">{title}</h1>

      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 sm:gap-4">
        {/* Breadcrumbs */}
        {breadcrumbs.length > 0 && (
          <nav className="text-xs sm:text-sm text-muted-foreground flex flex-wrap items-center gap-1 sm:gap-1">
            {breadcrumbs.map((crumb, index) => (
              <span key={index} className="flex items-center gap-1">
                {crumb.href
                  ? (
                      <a
                        href={crumb.href}
                        className="hover:text-blue-700 text-primary whitespace-nowrap"
                      >
                        {crumb.label}
                      </a>
                    )
                  : (
                      <span className="whitespace-nowrap">{crumb.label}</span>
                    )}
                {index < breadcrumbs.length - 1 && (
                  <span className="mx-1 sm:mx-2 text-gray-900">{">"}</span>
                )}
              </span>
            ))}
          </nav>
        )}

        {buttonLabel && onButtonClick && (
          <Button 
            onClick={onButtonClick} 
            className="bg-primary text-white w-full sm:w-auto"
          >
            {buttonLabel}
          </Button>
        )}
      </div>

      {/* Custom Tabs */}
      {tabs.length > 0 && activeTab && onTabChange && (
        <div className="flex gap-4 bg-white text-sm font-medium mb-6 p-2 rounded-lg">
          {tabs.map(({ label, value }) => (
            <button
              key={value}
              onClick={() => onTabChange(value)}
              className={cn(
                " transition-colors",
                activeTab === value
                  ? " text-primary bg-gray-100 p-1 rounded-md"
                  : " text-muted-foreground hover:text-foreground",
              )}
            >
              {label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default DashboardHeader;
