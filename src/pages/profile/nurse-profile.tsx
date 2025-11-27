import {
  CreditCard,
  Home,
  Link2,
  Pen,
  ThumbsDown,
  ThumbsUp,
  UsersIcon,
} from "lucide-react";
import React, { useState } from "react";

import LinkedPatientCard from "@/components/nurse/linked-patients-card";
import NurseActivityCard from "@/components/nurse/nurse-activity-card";
import NurseDetails from "@/components/nurse/nurse-details";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

import AddUser from "../users/add-user-modal";

type LinkedPatients = {
  ehrId: string;
  name: string;
  monthlyFee: number;
};
type NurseActivityProps = {
  day?: string;
  date?: string;
  action: string;
  userName: string;
  detail: string;
};

const NurseProfile: React.FC = () => {
  const linkedPatients: LinkedPatients[] = [
    {
      ehrId: "123456789",
      name: "Musa Bojang",
      monthlyFee: 89.99,
    },
    {
      ehrId: "987654321",
      name: "Tapha Bojang",
      monthlyFee: 165,
    },
  ];
  const NursesActivities: NurseActivityProps[] = [
    {
      day: "28",
      date: "Friday, June",
      action: "Added a new nurse",
      userName: "Isatou Jawara",
      detail: "Assigned to Ousainou Jonga, Bakary Fatty +2 others",
    },
    {
      action: "Added a new nurse",
      userName: "Isatou Jawara",
      detail: "Assigned to Ousainou Jonga, Bakary Fatty +2 others",
    },
    {
      action: "Deleted a patient",
      userName: "Isatou Jawara",
      detail: "Assigned to Ousainou Jonga, Bakary Fatty +2 others",
    },
  ];
  const [editMode, setEditMode] = useState(false);
  const handleEditClick = () => {
    setEditMode(!editMode);
  };

  return (
    <div className="flex flex-col gap-3">
      {/* Header */}
      <div className="flex  items-center justify-between flex-wrap">
        <h1 className="text-2xl font-bold">My Profile</h1>
        <div className="flex gap-2">
          <Button className="bg-primary text-[#fff] font-bold" onClick={handleEditClick}>
            <Pen className="mr-2 h-4 w-4" />
            {" "}
            Edit User
          </Button>
          {editMode && (
            <AddUser closeModal={() => setEditMode(false)} editMode={editMode} setEditMode={setEditMode} />
          )}

        </div>
      </div>
      {/* Profile Info */}
      <NurseDetails />
      {/* Linked Patients and Stats */}
      <div className="flex sm:flex-row flex-col gap-2 w-[100%]">
        <Card className="flex flex-col p-4 bg-[#fff] gap-4">
          <div className="flex text-2xl gap-3 items-center font-semibold">
            <Link2 />
            Linked Patients
          </div>
          {linkedPatients.map(patient => (
            <LinkedPatientCard key={patient.ehrId} patient={patient} />
          ))}
        </Card>

        {/* Stats */}
        <div className="grid sm:grid-cols-[repeat(2,1fr)] gap-x-[10px] rounded sm:w-[75%]">
          <div className="grid grid-rows-[2fr_1fr]  gap-3">
            <div className="bg-[#fff] rounded p-4 w-full">
              <div className=" border-b border-zinc-200 pb-2 mb-2">
                <span className="flex justify-between items-center ">
                  <p className="text-[#355CE1]">Total Patients</p>
                  <p className="rounded bg-[#355de120] p-2 text-[#355CE1]">
                    <UsersIcon />
                  </p>
                </span>
                <p className="sm:text-4xl text-xl font-bold text-[#355CE1]">40</p>
                <span className="text-[#355CE1]">In total</span>
              </div>
              <div className=" flex flex-col gap-3 ">
                <span className="flex justify-between items-center ">
                  <p className="text-[#355CE1]">Patients by genders</p>
                  <p className="rounded bg-[#355de120] p-2 text-[#355CE1]">
                    <UsersIcon />
                  </p>
                </span>
                <div className="flex justify-between items-center">
                  <span className="flex flex-col gap-3">
                    <p className="flex text-[#355CE1] font-bold items-center">
                      <UsersIcon className="w-6 h-6" />
                      {" "}
                      29
                    </p>
                    <p className="flex text-[#355CE1] font-bold items-center">
                      <UsersIcon className="w-6 h-6" />
                      {" "}
                      13
                    </p>
                  </span>
                  <span className="flex flex-col gap-3">
                    <p className="text-[#355CE1] flex items-center gap-2">
                      <span className="bg-[#355CE1] text-[#fff] px-3 py-1 rounded text-[10px]">
                        70%
                      </span>
                      {" "}
                      Male
                    </p>
                    <p className="text-[#355CE1]">
                      <span className="bg-[#EE48AC] text-[#fff] px-3 py-1 rounded text-[10px]">
                        30%
                      </span>
                      {" "}
                      Female
                    </p>
                  </span>
                </div>
              </div>
            </div>
            <div className="flex justify-between bg-[#fff] rounded p-4 ">
              <div>
                <p>Total Sponsors</p>
                <p className="text-4xl font-semibold">18</p>
              </div>
              <div className="h-fit rounded-3xl p-2 bg-zinc-400">
                <CreditCard />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-[1fr] grid-rows-[1fr_2fr] gap-3">
            <div className="flex justify-between bg-[#fff] rounded p-3">
              <div>
                <p className="text-zinc-500">Total Visits</p>
                <p className="text-3xl font-bold">24</p>
              </div>
              <div className="h-fit rounded-3xl p-2 bg-zinc-400">
                <Home />
              </div>
            </div>
            <div className="bg-[#fff] rounded p-3">
              <div className="p-3 border-b border-zinc-200 pb-2 mb-2">
                <div>
                  <span className="flex justify-between">
                    <p className="text-zinc-600">Visits Completed</p>
                    <span className="rounded-3xl p-2 bg-zinc-400">
                      <ThumbsUp />
                    </span>
                  </span>
                  <p className="text-4xl font-bold">40</p>
                  <span className="text-zinc-400">In total</span>
                </div>
              </div>
              <div className="p-3">
                <div>
                  <span className="flex justify-between">
                    <p className="text-zinc-600">Visits Missed</p>
                    <span className="rounded-3xl p-2 bg-zinc-400">
                      <ThumbsDown />
                    </span>
                  </span>
                  <p className="text-4xl font-bold">12</p>
                  <span className="text-zinc-400">In total</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Nurse Activities */}
      <div className="rounded bg-[#fff] p-5 gap-5">
        <h2 className="text-xl font-semibold">Nurse's Activity</h2>
        {NursesActivities.map((activity, index) => (
          <NurseActivityCard key={index} activity={activity} />
        ))}
      </div>
    </div>
  );
};

export default NurseProfile;
