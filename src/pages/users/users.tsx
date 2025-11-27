import { faker } from "@faker-js/faker";
import { Ellipsis } from "lucide-react";
import React from "react";

import type { User } from "@/components/patient/types";

import DashboardHeader from "@/components/dashboard/page-header";
// import { Button } from "@/components/ui/button";
import CustomDataTable from "@/components/ui/data-table";
// import { Input } from "@/components/ui/input";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";

import AddUser from "./add-user-modal";
// import { UserCard } from "./user-card";

const breadcrumbs = [{ label: "Users", href: "#" }, { label: "All Users" }];
const tabs = [
  { label: "All Users", value: "all" },
  { label: "Reports", value: "reports" },
];

// Generate fake user list

function UserList() {
  const [activeTab, setActiveTab] = React.useState("all");
  const [userModal, setUserModal] = React.useState(false);

  const handleAddUser = () => {
    if (!userModal) {
      setUserModal(true);
    }
  };

  const data: User[] = [
    {
      name: "MRC Hospital",
      id: 123276827648,
      type: "Insurance",
      address: "Fajaara",
      status: "Pending",
      action: <Ellipsis className="w-4 h-4 text-zinc-500" />,
      avatarUrl: faker.image.avatar(),
      role: "Sponsor",
    },
    {
      name: "Serrekunda General Hospital",
      id: 234627462732,
      type: "Insurance",
      address: "Kotu",
      status: "Inactive",
      action: <Ellipsis className="w-4 h-4 text-zinc-500" />,
      avatarUrl: faker.image.avatar(),
      role: "Patient",
    },
    {
      name: "Action Aid",
      type: "Insurance",
      id: 37627627474,
      address: "Bakau",
      status: "Inactive",
      action: <Ellipsis className="w-4 h-4 text-zinc-500" />,
      avatarUrl: faker.image.avatar(),
      role: "Sponsor",
    },
    {
      name: "Burama Bobb",
      type: "Individual",
      id: 43276723663,
      address: "Brusubi Phase 2",
      status: "Active",
      action: <Ellipsis className="w-4 h-4 text-zinc-500" />,
      avatarUrl: faker.image.avatar(),
      role: "Patient",
    },
    {
      name: "Alsainey Barry",
      type: "Individual",
      id: 63276746273,
      address: "Fajaara",
      status: "Active",
      action: <Ellipsis className="w-4 h-4 text-zinc-500" />,
      avatarUrl: faker.image.avatar(),
      role: "Nurse",
    },
    {
      name: "Muhammed Touray",
      type: "Insurance",
      id: 328642766437,
      address: "Salagi",
      status: "Active",
      action: <Ellipsis className="w-4 h-4 text-zinc-500" />,
      avatarUrl: faker.image.avatar(),
      role: "Sponsor",
    },
    {
      name: "Ousainou Jonga",
      type: "Individual",
      id: 3276472364273,
      address: "Old Jeshwang",
      status: "Inactive",
      action: <Ellipsis className="w-4 h-4 text-zinc-500" />,
      avatarUrl: faker.image.avatar(),
      role: "Patient",
    },
    {
      name: "Chisom Chima",
      type: "Individual",
      id: 462736274673,
      address: "Sukuta",
      status: "Pending",
      action: <Ellipsis className="w-4 h-4 text-zinc-500" />,
      avatarUrl: faker.image.avatar(),
      role: "Nurse",
    },
    {
      name: "Waka Jeng",
      type: "Individual",
      id: 376427346673,
      address: "Banjul",
      status: "Active",
      action: <Ellipsis className="w-4 h-4 text-zinc-500" />,
      avatarUrl: faker.image.avatar(),
      role: "Patient",
    },
    {
      name: "Keweh Jonga",
      type: "Individual",
      id: 23643736277,
      address: "Serrekunda",
      status: "Pending",
      action: <Ellipsis className="w-4 h-4 text-zinc-500" />,
      avatarUrl: faker.image.avatar(),
      role: "Sponsor",
    },
    {
      name: "Haruna A Baldeh",
      type: "Individual",
      id: 4363864538546,
      address: "Kanifing",
      status: "Pending",
      action: <Ellipsis className="w-4 h-4 text-zinc-500" />,
      avatarUrl: faker.image.avatar(),
      role: "Nurse",
    },
    {
      name: "Baboucarr Ceesay",
      type: "Individual",
      id: 2362746673,
      address: "Bakau",
      status: "Inactive",
      action: <Ellipsis className="w-4 h-4 text-zinc-500" />,
      avatarUrl: faker.image.avatar(),
      role: "Patient",
    },
    {
      name: "Khaddija Badjie",
      type: "Individual",
      id: 327642876427,
      address: "Sukuta",
      status: "Active",
      action: <Ellipsis className="w-4 h-4 text-zinc-500" />,
      avatarUrl: faker.image.avatar(),
      role: "Sponsor",
    },
  ];
  return (
    <div className="space-y-6">
      <DashboardHeader
        title="Users"
        breadcrumbs={breadcrumbs}
        tabs={tabs}
        activeTab={activeTab}
        onTabChange={setActiveTab}
        buttonLabel="Add a new User"
        onButtonClick={handleAddUser}
      />
      {userModal && <AddUser closeModal={() => setUserModal(false)} />}
      <div className="bg-[#fff] rounded-lg shadow-sm p-6">
        <CustomDataTable users={{ users: data, patients: [], nurses: [], sponsors: [] }} />
      </div>
    </div>
  );
}

export default UserList;
