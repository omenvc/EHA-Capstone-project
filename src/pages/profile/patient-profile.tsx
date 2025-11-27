import type { LucideIcon } from "lucide-react";

import { faker } from "@faker-js/faker";
import {
  Calendar,
  ChevronLeft,
  ChevronRight,
  Circle,
  Droplet,
  Ellipsis,
  FlaskConical,
  Home,
  MoveVertical,
  Pen,
  PersonStanding,
  Search,
  StethoscopeIcon,
  TrendingUp,
  UserPlus,
} from "lucide-react";
import React, { useState } from "react";

import type { Medication, Sponsor } from "@/components/patient/types";

import MedicationCard from "@/components/patient/medication-card";
import MedicationDetails from "@/components/patient/medication-details";
// import SponsorTable from "@/components/patient/sponsor-table";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import CircularProgress from "@/components/ui/circular-progress";
import CustomDataTable from "@/components/ui/data-table";
import NavigationTabs from "@/components/ui/navigation-tabs";

import PatientDetails from "../../components/patient/patient-details";
import AddUser from "../users/add-user-modal";

const medicationData: Medication[] = [
  {
    name: "ACTRAPID",
    type: "Capsule",
    dosage: "Amaryle 1 mg",
    startDate: "6 Jan 2025",
    taken: 145,
    missed: 20,
    strenght: "1mg",
    quantity: "2 Boxes (for 3 Months)",
    status: "Discontinued",
    endDate: "6 March 2025",
  },
  {
    name: "WAKACID",
    type: "Syrup",
    dosage: "Amaryle 1 mg",
    startDate: "6 Jan 2025",
    taken: 145,
    missed: 20,
    strenght: "1mg",
    quantity: "2 Boxes (for 3 Months)",
    status: "Active",
    endDate: "6 March 2025",
  },
  {
    name: "BABOUDOL",
    type: "Tablet",
    dosage: "Amaryle 1 mg",
    startDate: "6 Jan 2025",
    taken: 145,
    missed: 20,
    strenght: "1mg",
    quantity: "2 Boxes (for 3 Months)",
    status: "Discontinued",
    endDate: "6 March 2025",
  },
  {
    name: "EDRISIL",
    type: "Capsule",
    dosage: "Amaryle 1 mg",
    startDate: "6 Jan 2025",
    taken: 145,
    missed: 20,
    strenght: "1mg",
    quantity: "2 Boxes (for 3 Months)",
    status: "Active",
    endDate: "6 March 2025",
  },
  {
    name: "EDRISIL",
    type: "Capsule",
    dosage: "Amaryle 1 mg",
    startDate: "6 Jan 2025",
    taken: 145,
    missed: 20,
    strenght: "1mg",
    quantity: "2 Boxes (for 3 Months)",
    status: "Discontinued",
    endDate: "6 March 2025",
  },
  {
    name: "EDRISIL",
    type: "Capsule",
    dosage: "Amaryle 1 mg",
    startDate: "6 Jan 2025",
    taken: 145,
    missed: 20,
    strenght: "1mg",
    quantity: "2 Boxes (for 3 Months)",
    status: "Active",
    endDate: "6 March 2025",
  },
  {
    name: "EDRISIL",
    type: "Capsule",
    dosage: "Amaryle 1 mg",
    startDate: "6 Jan 2025",
    taken: 145,
    missed: 20,
    strenght: "1mg",
    quantity: "2 Boxes (for 3 Months)",
    status: "Discontinued",
    endDate: "6 March 2025",
  },
  {
    name: "EDRISIL",
    type: "Capsule",
    dosage: "Amaryle 1 mg",
    startDate: "6 Jan 2025",
    taken: 145,
    missed: 20,
    strenght: "1mg",
    quantity: "2 Boxes (for 3 Months)",
    status: "Active",
    endDate: "6 March 2025",
  },
  {
    name: "EDRISIL",
    type: "Capsule",
    dosage: "Amaryle 1 mg",
    startDate: "6 Jan 2025",
    taken: 145,
    missed: 20,
    strenght: "1mg",
    quantity: "2 Boxes (for 3 Months)",
    status: "Discontinued",
    endDate: "6 March 2025",
  },
  {
    name: "EDRISIL",
    type: "Capsule",
    dosage: "Amaryle 1 mg",
    startDate: "6 Jan 2025",
    taken: 145,
    missed: 20,
    strenght: "1mg",
    quantity: "2 Boxes (for 3 Months)",
    status: "Active",
    endDate: "6 March 2025",
  },
  {
    name: "EDRISIL",
    type: "Capsule",
    dosage: "Amaryle 1 mg",
    startDate: "6 Jan 2025",
    taken: 145,
    missed: 20,
    strenght: "1mg",
    quantity: "2 Boxes (for 3 Months)",
    status: "Active",
    endDate: "6 March 2025",
  },
  {
    name: "EDRISIL",
    type: "Capsule",
    dosage: "Amaryle 1 mg",
    startDate: "6 Jan 2025",
    taken: 145,
    missed: 20,
    strenght: "1mg",
    quantity: "2 Boxes (for 3 Months)",
    status: "Discontinued",
    endDate: "6 March 2025",
  },
  {
    name: "EDRISIL",
    type: "Capsule",
    dosage: "Amaryle 1 mg",
    startDate: "6 Jan 2025",
    taken: 145,
    missed: 20,
    strenght: "1mg",
    quantity: "2 Boxes (for 3 Months)",
    status: "Active",
    endDate: "6 March 2025",
  },
  {
    name: "EDRISIL",
    type: "Capsule",
    dosage: "Amaryle 1 mg",
    startDate: "6 Jan 2025",
    taken: 145,
    missed: 20,
    strenght: "1mg",
    quantity: "2 Boxes (for 3 Months)",
    status: "Discontinued",
    endDate: "6 March 2025",
  },
  {
    name: "EDRISIL",
    type: "Capsule",
    dosage: "Amaryle 1 mg",
    startDate: "6 Jan 2025",
    taken: 145,
    missed: 20,
    strenght: "1mg",
    quantity: "2 Boxes (for 3 Months)",
    status: "Active",
    endDate: "6 March 2025",
  },
  {
    name: "EDRISIL",
    type: "Capsule",
    dosage: "Amaryle 1 mg",
    startDate: "6 Jan 2025",
    taken: 145,
    missed: 20,
    strenght: "1mg",
    quantity: "2 Boxes (for 3 Months)",
    status: "Discontinued",
    endDate: "6 March 2025",
  },
  {
    name: "EDRISIL",
    type: "Capsule",
    dosage: "Amaryle 1 mg",
    startDate: "6 Jan 2025",
    taken: 145,
    missed: 20,
    strenght: "1mg",
    quantity: "2 Boxes (for 3 Months)",
    status: "Active",
    endDate: "6 March 2025",
  },
  {
    name: "EDRISIL",
    type: "Capsule",
    dosage: "Amaryle 1 mg",
    startDate: "6 Jan 2025",
    taken: 145,
    missed: 20,
    strenght: "1mg",
    quantity: "2 Boxes (for 3 Months)",
    status: "Discontinued",
    endDate: "6 March 2025",
  },
];

const data: Sponsor[] = [
  {
    name: "MRC Hospital",
    id: 123276827648,
    type: "Insurance",
    address: "Fajaara",
    relationship: "Insurance Provider",
    role: "Sponsor",
    status: "Pending",
    action: <Ellipsis className="w-4 h-4 text-zinc-500" />,
    avatarUrl: faker.image.avatar(),
  },
  {
    name: "Serrekunda General Hospital",
    id: 234627462732,
    type: "Insurance",
    address: "Kotu",
    role: "Sponsor",
    relationship: "Mother",
    status: "Inactive",
    action: <Ellipsis className="w-4 h-4 text-zinc-500" />,
    avatarUrl: faker.image.avatar(),
  },
  {
    name: "Action Aid",
    type: "Insurance",
    id: 37627627474,
    address: "Bakau",
    relationship: "Provider",
    role: "Sponsor",
    status: "Inactive",
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
    role: "Sponsor",
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
    role: "Sponsor",
    action: <Ellipsis className="w-4 h-4 text-zinc-500" />,
    avatarUrl: faker.image.avatar(),
  },
  {
    name: "Muhammed Touray",
    type: "Insurance",
    id: 328642766437,
    address: "Salagi",
    relationship: "Insurance Provider",
    role: "Sponsor",
    status: "Active",
    action: <Ellipsis className="w-4 h-4 text-zinc-500" />,
    avatarUrl: faker.image.avatar(),
  },
  {
    name: "Ousainou Jonga",
    type: "Individual",
    id: 3276472364273,
    address: "Old Jeshwang",
    relationship: "Son",
    status: "Inactive",
    role: "Sponsor",
    action: <Ellipsis className="w-4 h-4 text-zinc-500" />,
    avatarUrl: faker.image.avatar(),
  },
  {
    name: "Chisom Chima",
    type: "Individual",
    id: 462736274673,
    address: "Sukuta",
    relationship: "Father",
    role: "Sponsor",
    status: "Pending",
    action: <Ellipsis className="w-4 h-4 text-zinc-500" />,
    avatarUrl: faker.image.avatar(),
  },
  {
    name: "Waka Jeng",
    type: "Individual",
    id: 376427346673,
    address: "Banjul",
    role: "Sponsor",
    relationship: "Uncle",
    status: "Active",
    action: <Ellipsis className="w-4 h-4 text-zinc-500" />,
    avatarUrl: faker.image.avatar(),
  },
  {
    name: "Keweh Jonga",
    type: "Individual",
    id: 23643736277,
    address: "Serrekunda",
    role: "Sponsor",
    relationship: "Sister",
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
    role: "Sponsor",
    status: "Pending",
    action: <Ellipsis className="w-4 h-4 text-zinc-500" />,
    avatarUrl: faker.image.avatar(),
  },
  {
    name: "Baboucarr Ceesay",
    type: "Individual",
    id: 2362746673,
    address: "Bakau",
    role: "Sponsor",
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
    role: "Sponsor",
    relationship: "Son",
    status: "Active",
    action: <Ellipsis className="w-4 h-4 text-zinc-500" />,
    avatarUrl: faker.image.avatar(),
  },
];

type AppointmentsProps = {
  id: number;
  date?: string;
  day?: string;
  label: string;
  detail: string;
  time: string;
  icon: LucideIcon;
};

const PatientProfile: React.FC = () => {
  const patientAppointments: AppointmentsProps[] = [
    {
      id: 1,
      date: "28",
      day: "Friday, June",
      label: "Home Visitation",
      detail: "Patient: Musa Bojang",
      time: "9 AM - 10:30 AM",
      icon: StethoscopeIcon,
    },
    {
      id: 2,
      date: "16",
      day: "Tuesday, July",
      label: "Home Visitation",
      detail: "Patient: Musa Bojang",
      time: "9 AM - 10:30 AM",
      icon: FlaskConical,
    },
    {
      id: 3,
      label: "Home Visitation",
      detail: "Patient: Musa Bojang",
      time: "9 AM - 10:30 AM",
      icon: StethoscopeIcon,
    },
  ];

  const AppointmentHistoryTabs = [
    { name: "Upcoming", href: "upcoming" },
    { name: "Past", href: "past" },
  ];

  const ButtonTabs = [
    { name: "Patient profile", href: "patient-profile" },
    { name: "Medication", href: "patient-profile/medication" },
    { name: "Sponsors", href: "patient-profile/sponsors" },
  ];
  const [activeTab, setActiveTab] = useState("patient-profile");
  const [activeAppointmentTab, setActiveAppointmentTab] = useState("upcoming");
  const [selectedMed, setSelectedMed] = useState<Medication | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredMedication = medicationData.filter(
    med =>
      med.name.toLowerCase().includes(searchTerm.toLowerCase())
      || med.type.toLowerCase().includes(searchTerm.toLowerCase())
      || med.dosage.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const medicationPerPage = 4;

  const totalPages = Math.ceil(filteredMedication.length / medicationPerPage);
  const paginatedMedication = filteredMedication.slice(
    (currentPage - 1) * medicationPerPage,
    currentPage * medicationPerPage,
  );
  const [editMode, setEditMode] = useState(false);
  const handleEditClick = () => {
    setEditMode(!editMode);
  };

  return (
    <div>
      {/* Header */}
      <h1 className="text-2xl font-bold">Patient Profile</h1>
      <div className="flex  items-center justify-between flex-wrap">
        {/* Navigation Tabs */}

        <NavigationTabs
          tabs={ButtonTabs}
          activeTab={activeTab}
          onTabChange={tab => setActiveTab(tab)}
        />
        {activeTab === "patient-profile" || activeTab === "patient-profile/medication"
          ? (
              <div className="flex gap-2">
                <Button className="bg-blue-600 text-[#fff] font-sans" onClick={handleEditClick}>
                  <Pen className="mr-2 h-4 w-4" />
                  Edit User
                </Button>
                {editMode && (
                  <AddUser closeModal={() => setEditMode(false)} editMode={editMode} setEditMode={setEditMode} />
                )}
              </div>
            )
          : ""}
        {activeTab === "patient-profile/sponsors" && (
          <div className="flex gap-2">
            <Button className="bg-blue-600 text-[#fff] font-sans">
              <UserPlus className="mr-2 h-4 w-4" />
              {" "}
              Add a new Sponsor
            </Button>
          </div>
        )}
      </div>
      {/* Profile Info */}
      {activeTab === "patient-profile" && (
        <div className="mt-6">
          <PatientDetails />
          <div className="grid sm:grid-cols-4 gap-4 mt-6">
            <Card className="bg-[#fff] p-4">
              <span className="flex justify-between items-center">
                <p className="text-blue-400 font-sans">
                  Weight (Last recorded)
                </p>
                <PersonStanding className="h-8 w-8 bg-zinc-300 rounded" />
              </span>
              <p className="text-4xl font-bold text-[#355CE1]">40Kg</p>
            </Card>
            <Card className="bg-[#fff] p-4">
              <span className="flex justify-between items-center">
                <p className="text-zinc-400">Height</p>
                <MoveVertical className="h-8 w-8 bg-zinc-300 rounded" />
              </span>
              <p className="text-4xl font-bold">170cm</p>
            </Card>
            <Card className="bg-[#fff] p-4">
              <span className="flex justify-between items-center">
                <p className="text-zinc-400">BMI</p>
                <PersonStanding className="h-8 w-8 bg-zinc-300 rounded" />
              </span>
              <p className="text-4xl font-bold">24</p>
            </Card>
            <Card className="bg-[#fff] p-4">
              <span className="flex justify-between items-center">
                <p className="text-zinc-400">Blood Type</p>
                <Droplet className="h-8 w-8 bg-zinc-300 rounded" />
              </span>
              <p className="text-4xl font-bold">A+</p>
            </Card>
          </div>
          <div className="grid sm:grid-cols-2 mt-4 gap-3">
            <div className="bg-[#fff] p-4 rounded shadow-sm">
              <p className="text-xl font-semibold">Appointments</p>
              <NavigationTabs
                tabs={AppointmentHistoryTabs}
                activeTab={activeAppointmentTab}
                onTabChange={tab => setActiveAppointmentTab(tab)}
              />
              {activeAppointmentTab === "upcoming" && (
                <div>
                  {patientAppointments.map(
                    ({ id, label, day, date, detail, icon: Icon, time }) => (
                      <div key={id}>
                        <span className="flex gap-6 mt-6">
                          <p className="text-xl font-semibold">{date}</p>
                          <p className="text-xl font-semibold">{day}</p>
                        </span>
                        <div className="flex gap-6 mt-6">
                          <Icon />
                          <Card className="flex flex-row justify-between items-center px-6 w-full">
                            <div className="flex flex-col">
                              <p>{label}</p>
                              <p>{detail}</p>
                              <p className="flex text-[11px] text-zinc-500 items-center gap-1">
                                <Calendar className="w-3 h-3" />
                                {time}
                              </p>
                            </div>
                            <span className="rounded-2xl p-2 bg-black text-[#fff]">
                              <Home className="w-4 h-4" />
                            </span>
                          </Card>
                        </div>
                      </div>
                    ),
                  )}
                </div>
              )}
              {activeAppointmentTab === "past" && (
                <div className="text-center text-zinc-500">
                  No past appointments found.
                </div>
              )}
            </div>
            <div className="">
              <Card className="bg-[#fff] p-4">
                <p className="text-xl font-sans font-bold">
                  Medication Adherence
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="flex flex-col gap-4">
                    <p className="flex items-center gap-2 sm:text-xl">
                      <Circle className="w-6 h-6 text-green-900" />
                      145 taken out of 165
                    </p>
                    <p className="flex items-center gap-2 sm:text-xl">
                      <Circle className="w-6 h-6 text-red-900  " />
                      20 missed
                    </p>
                  </span>

                  {/* Circular Progress */}
                  <CircularProgress progress={(80 / 100) * 100} />
                </div>
              </Card>
              <div className="grid sm:grid-cols-3 mt-4 gap-2">
                <Card className="p-4 bg-[#fff]">
                  <p className="text-center text-xl">Avg. Heartrate</p>
                  <span className="flex items-center justify-evenly">
                    <p>
                      <strong className="text-3xl">105</strong>
                      Bpm
                    </p>
                    <TrendingUp className="w-9 h-9 text-red-600" />
                  </span>
                </Card>
                <Card className="p-4 bg-[#fff]">
                  <p className="text-center text-xl">Avg. Blood Pressure</p>
                  <span className="flex items-center justify-evenly">
                    <p>
                      <strong className="text-3xl">80</strong>
                      mmHg
                    </p>
                    <TrendingUp className="w-9 h-9 text-green-600" />
                  </span>
                </Card>
                <Card className="p-4 bg-[#fff]">
                  <p className="text-center text-xl">Avg. Blood Sugar</p>
                  <span className="flex items-center justify-evenly">
                    <p>
                      <strong className="text-3xl">80</strong>
                      mmHg
                    </p>
                    <TrendingUp className="w-9 h-9 text-green-600" />
                  </span>
                </Card>
              </div>
              <Card className="p-4 mt-4 bg-[#fff]">
                <span className="text-xl">General Patient Notes</span>
                <p className="ml-5">
                  <strong>Latest General Wellness Assessment</strong>
                  {" "}
                  <br />
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Laboriosam sed provident ipsa minus repellat vitae, velit
                  iusto quae corporis illo dignissimos illum ratione neque
                  voluptatibus commodi aut eos. Autem, laborum.
                </p>
                <p className="flex items-center gap-2 text-[13px] text-zinc-600">
                  <Calendar className="w-3 h-3" />
                  Last updated Fri 24th January 2025
                </p>
              </Card>
            </div>
          </div>
        </div>
      )}
      {/* Medications Tab */}
      {activeTab === "patient-profile/medication" && (
        <div className="grid grid-cols-[1fr_2fr] gap-4 mt-6">
          <div className="bg-[#fff] rounded-lg shadow-sm p-4">
            <div>
              <h1 className="text-xl font-bold px-6 font-sans">Medication</h1>
              <Search className="w-4 h-4 absolute mt-7 text-zinc-700 ml-3 font-bold" />
              <input
                type="search"
                name="medication"
                placeholder="Search for name, manufacturer or dosage form"
                className="outline-zinc-400 border-1 border-zinc-400 py-2 px-9 mt-4 rounded w-full"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              {paginatedMedication.map((med, i) => (
                <MedicationCard
                  key={i}
                  med={med}
                  onClick={() => setSelectedMed(med)}
                />
              ))}
            </div>
            {/* Pagination */}
            <div className="flex justify-center mt-6 gap-2">
              <Button
                size="sm"
                className="bg-white text-gray-700  hover:bg-gray-100"
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(prev => prev - 1)}
              >
                <ChevronLeft />
                Previous
              </Button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                page => (
                  <Button
                    key={page}
                    size="sm"
                    className={`${page === currentPage
                      ? "border border-blue-700 text-blue-700"
                      : "bg-white text-gray-700  hover:bg-gray-50"
                    }`}
                    onClick={() => setCurrentPage(page)}
                  >
                    {page}
                  </Button>
                ),
              )}

              <Button
                size="sm"
                className="bg-white text-gray-700  hover:bg-gray-100"
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage(prev => prev + 1)}
              >
                Next
                <ChevronRight />
              </Button>
            </div>
          </div>
          <div className="bg-[#fff] rounded-lg shadow-sm p-4 W-1/3">
            <h1 className="text-xl font-bold px-6 font-sans">Overview</h1>
            <MedicationDetails selectedMed={selectedMed} />
          </div>
        </div>
      )}

      {/* Sponsors Tab */}
      {activeTab === "patient-profile/sponsors" && (
        <div className="mt-6 bg-[#fff] rounded-lg shadow-sm">
          <div>
            <CustomDataTable users={{ sponsors: data, patients: [], nurses: [], users: [] }} />
          </div>
        </div>
      )}
    </div>
  );
};

export default PatientProfile;
