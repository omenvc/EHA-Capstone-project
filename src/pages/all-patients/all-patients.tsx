import { faker } from "@faker-js/faker";
import { Ellipsis, UserPlus } from "lucide-react";
import React from "react";

import type { Patient } from "@/components/patient/types";

import DashboardHeader from "@/components/dashboard/page-header";
import { Button } from "@/components/ui/button";
import CustomDataTable from "@/components/ui/data-table";

const data: Patient[] = [
  {
    name: "MRC Hospital",
    id: 123276827648,
    type: "Insurance",
    address: "Fajaara",
    relationship: "Insurance Provider",
    status: "Pending",
    role: "Patient",
    action: <Ellipsis className="w-4 h-4 text-zinc-500" />,
    avatarUrl: faker.image.avatar(),
  },
  {
    name: "Serrekunda General Hospital",
    id: 234627462732,
    type: "Insurance",
    address: "Kotu",
    relationship: "Mother",
    status: "Inactive",
    role: "Patient",
    action: <Ellipsis className="w-4 h-4 text-zinc-500" />,
    avatarUrl: faker.image.avatar(),
  },
  {
    name: "Action Aid",
    type: "Insurance",
    id: 37627627474,
    address: "Bakau",
    relationship: "Provider",
    status: "Inactive",
    role: "Patient",
    action: <Ellipsis className="w-4 h-4 text-zinc-500" />,
    avatarUrl: faker.image.avatar(),
  },
  {
    name: "Burama Bobb",
    type: "Individual",
    id: 43276723663,
    address: "Brusubi Phase 2",
    relationship: "Son",
    status: "Active",
    role: "Patient",
    action: <Ellipsis className="w-4 h-4 text-zinc-500" />,
    avatarUrl: faker.image.avatar(),
  },
  {
    name: "Alsainey Barry",
    type: "Individual",
    id: 63276746273,
    address: "Fajaara",
    relationship: "Son",
    status: "Active",
    role: "Patient",
    action: <Ellipsis className="w-4 h-4 text-zinc-500" />,
    avatarUrl: faker.image.avatar(),
  },
  {
    name: "Muhammed Touray",
    type: "Insurance",
    id: 328642766437,
    address: "Salagi",
    relationship: "Insurance Provider",
    status: "Active",
    role: "Patient",
    action: <Ellipsis className="w-4 h-4 text-zinc-500" />,
    avatarUrl: faker.image.avatar(),
  },
  {
    name: "Ousainou Jonga",
    type: "Individual",
    id: 3276472364273,
    address: "Old Jeshwang",
    relationship: "Son",
    role: "Patient",
    status: "Inactive",
    action: <Ellipsis className="w-4 h-4 text-zinc-500" />,
    avatarUrl: faker.image.avatar(),
  },
  {
    name: "Chisom Chima",
    type: "Individual",
    id: 462736274673,
    address: "Sukuta",
    relationship: "Father",
    status: "Pending",
    action: <Ellipsis className="w-4 h-4 text-zinc-500" />,
    avatarUrl: faker.image.avatar(),
  },
  {
    name: "Waka Jeng",
    type: "Individual",
    id: 376427346673,
    address: "Banjul",
    relationship: "Uncle",
    status: "Active",
    role: "Patient",
    action: <Ellipsis className="w-4 h-4 text-zinc-500" />,
    avatarUrl: faker.image.avatar(),
  },
  {
    name: "Keweh Jonga",
    type: "Individual",
    id: 23643736277,
    address: "Serrekunda",
    relationship: "Sister",
    role: "Patient",
    status: "Pending",
    action: <Ellipsis className="w-4 h-4 text-zinc-500" />,
    avatarUrl: faker.image.avatar(),
  },
  {
    name: "Haruna A Baldeh",
    type: "Individual",
    id: 4363864538546,
    address: "Kanifing",
    relationship: "Daughter",
    role: "Patient",
    status: "Pending",
    action: <Ellipsis className="w-4 h-4 text-zinc-500" />,
    avatarUrl: faker.image.avatar(),
  },
  {
    name: "Baboucarr Ceesay",
    type: "Individual",
    id: 2362746673,
    address: "Bakau",
    role: "Patient",
    relationship: "Son",
    status: "Inactive",
    action: <Ellipsis className="w-4 h-4 text-zinc-500" />,
    avatarUrl: faker.image.avatar(),
  },
  {
    name: "Khaddija Badjie",
    type: "Individual",
    id: 327642876427,
    address: "Sukuta",
    role: "Patient",
    relationship: "Son",
    status: "Active",
    action: <Ellipsis className="w-4 h-4 text-zinc-500" />,
    avatarUrl: faker.image.avatar(),
  },
];

function AllPatientsPage() {
  const [activeTab, setActiveTab] = React.useState("All patients");
  const breadcrumbs = [{ label: "Patients", href: "#" }, { label: "All patients" }];

  return (
    <div>
      <DashboardHeader
        title="Patients"
        breadcrumbs={breadcrumbs}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />
      <span className="flex justify-between items-center mt-4">
        <Button className="bg-[#fff] p-1">
          <p className="bg-zinc-200 px-2 py-1 rounded">All Patients</p>
        </Button>
        <Button className="bg-[#355CE1] text-[#fff]">
          <UserPlus />
          <p>Add a new patient</p>
        </Button>
      </span>
      <div className="bg-white rounded-lg shadow-sm p-6 mt-4">
        <CustomDataTable users={{ sponsors: [], patients: data, users: [], nurses: [] }} />
      </div>
    </div>
  );
}

export default AllPatientsPage;
