import { BedDouble, Handshake, Users } from "lucide-react";
import { useState } from "react";

import ActivitySummaryCard from "@/components/dashboard/activity-summary-card";
import { EncountersChart } from "@/components/dashboard/encounters-chart";
import FinancialChart from "@/components/dashboard/financial-chart";
import { GenderBarChart } from "@/components/dashboard/gender-bar-chart";
import { GenderPieChart } from "@/components/dashboard/gender-pie-chart";
import DashboardHeader from "@/components/dashboard/page-header";
import { SearchSection } from "@/components/dashboard/search-section";
import SubscriptionChart from "@/components/dashboard/subscription-chart";
import { SummaryCard } from "@/components/dashboard/summary-card";

function DashboardHome() {
  const [activeTab, setActiveTab] = useState<"overview" | "activity">(
    "overview",
  );

  return (
    <div className="h-full">
      <DashboardHeader
        title="Welcome Back"
        tabs={[
          { label: "Overview", value: "overview" },
          { label: "Activity & Payments", value: "activity" },
        ]}
        breadcrumbs={[
          { label: "Home", href: "/dashboard/home" },
          { label: "Overview", href: "/dashboard/home" },
        ]}
        activeTab={activeTab}
        onTabChange={tab => setActiveTab(tab as "overview" | "activity")}
      />

      {activeTab === "overview"
        ? (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <SummaryCard
                  title="Total Nurses"
                  value={18}
                  icon={<Users />}
                  subText="-3 This Year"
                  subTextColor="text-red-600"
                />
                <SummaryCard
                  title="Total Patients"
                  value={14}
                  icon={<BedDouble />}
                  subText="+19 This Year"
                  subTextColor="text-green-600"
                />
                <SummaryCard
                  title="Total Sponsors"
                  value={11}
                  icon={<BedDouble />}
                  subText="Same as last year"
                  subTextColor="text-muted-foreground"
                />
                <SummaryCard
                  title="Total Earned"
                  value="D55,233"
                  icon={<Handshake />}
                  subText="+23K This Year"
                  subTextColor="text-green-600"
                />
              </div>

              <div className="flex flex-col lg:flex-row gap-5 py-6">
                <div className="w-full lg:w-1/3">
                  <SearchSection />
                </div>
                <div className="w-full lg:w-2/3">
                  <EncountersChart />
                </div>
              </div>
            </>
          )
        : (
            <div className="text-sm text-muted-foreground">
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <ActivitySummaryCard
                    title="Rx WOW Pass ($93.50)"
                    value="D55"
                    subText="From 17 Subscribers"
                    icon={<Handshake />}
                  />
                  <ActivitySummaryCard
                    title="WOW Basic ($165/year)"
                    value="D14"
                    subText="From 7 Subscribers"
                    icon={<Handshake />}
                  />
                  <ActivitySummaryCard
                    title="WOW Premium ($330/year)"
                    value="D18"
                    subText="From 5 Subscribers"
                    icon={<Handshake />}
                  />
                  <ActivitySummaryCard
                    title="WOW Assurance Plan ($800)"
                    value="D5"
                    subText="From 2 Subscribers"
                    icon={<Handshake />}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-6">
                  <SubscriptionChart />
                  <FinancialChart />
                  <div className="flex flex-col gap-4 min-h-[500px]">
                    <GenderPieChart />
                    <GenderBarChart />
                  </div>
                </div>
              </>
            </div>
          )}
    </div>
  );
}

export default DashboardHome;
