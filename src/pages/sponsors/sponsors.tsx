import { faker } from "@faker-js/faker";
import { Ellipsis } from "lucide-react";
import React from "react";

import type { Sponsor } from "@/components/patient/types";

import DashboardHeader from "@/components/dashboard/page-header";
import CustomDataTable from "@/components/ui/data-table";

import AddUser from "../users/add-user-modal";

const breadcrumbs = [
  { label: "Home", href: "/dashboard/home" },
  { label: "Sponsors" },
];

// Generate fake sponsor list
const generateSponsors = (): Sponsor[] => [
  {
    name: "MRC Hospital",
    id: 123276827648,
    type: "Insurance",
    address: "Fajaara",
    relationship: "Insurance Provider",
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
    relationship: "Insurance Provider",
    status: "Inactive",
    action: <Ellipsis className="w-4 h-4 text-zinc-500" />,
    avatarUrl: faker.image.avatar(),
    role: "Sponsor",
  },
  {
    name: "Action Aid",
    type: "Insurance",
    id: 37627627474,
    address: "Bakau",
    relationship: "Provider",
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
    relationship: "Individual Sponsor",
    status: "Active",
    action: <Ellipsis className="w-4 h-4 text-zinc-500" />,
    avatarUrl: faker.image.avatar(),
    role: "Sponsor",
  },
  {
    name: "Alsainey Barry",
    type: "Individual",
    id: 63276746273,
    address: "Fajaara",
    relationship: "Individual Sponsor",
    status: "Active",
    action: <Ellipsis className="w-4 h-4 text-zinc-500" />,
    avatarUrl: faker.image.avatar(),
    role: "Sponsor",
  },
  {
    name: "Muhammed Touray",
    type: "Insurance",
    id: 328642766437,
    address: "Salagi",
    relationship: "Insurance Provider",
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
    relationship: "Individual Sponsor",
    status: "Inactive",
    action: <Ellipsis className="w-4 h-4 text-zinc-500" />,
    avatarUrl: faker.image.avatar(),
    role: "Sponsor",
  },
  {
    name: "Keweh Jonga",
    type: "Individual",
    id: 23643736277,
    address: "Serrekunda",
    relationship: "Individual Sponsor",
    status: "Pending",
    action: <Ellipsis className="w-4 h-4 text-zinc-500" />,
    avatarUrl: faker.image.avatar(),
    role: "Sponsor",
  },
  {
    name: "Khaddija Badjie",
    type: "Individual",
    id: 327642876427,
    address: "Sukuta",
    relationship: "Individual Sponsor",
    status: "Active",
    action: <Ellipsis className="w-4 h-4 text-zinc-500" />,
    avatarUrl: faker.image.avatar(),
    role: "Sponsor",
  },
];

function SponsorsPage() {
  const [userModal, setUserModal] = React.useState(false);
  const sponsors = React.useMemo(() => generateSponsors(), []);

  const handleAddUser = () => {
    if (!userModal) {
      setUserModal(true);
    }
  };

  return (
    <div className="space-y-6">
      <DashboardHeader
        title="Sponsors"
        breadcrumbs={breadcrumbs}
        buttonLabel="Add a new Sponsor"
        onButtonClick={handleAddUser}
      />
      {userModal && <AddUser closeModal={() => setUserModal(false)} />}
      <div className="bg-[#fff] rounded-lg shadow-sm p-4 md:p-6">
        <CustomDataTable
          users={{ sponsors, patients: [], nurses: [], users: [] }}
        />
      </div>
    </div>
  );
}

export default SponsorsPage;

