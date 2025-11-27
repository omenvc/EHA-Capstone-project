/* eslint-disable style/jsx-one-expression-per-line */
import {
  CalendarIcon,
  ContactIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  ShieldIcon,
  TicketIcon,
  UserIcon,
  UsersIcon,
  X,
} from "lucide-react";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import PatientDiagnoses from "@/components/patient/patient-diagnoses-modal";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

import patientPic from "../../images/Patient Image.svg";
import sponsorPic from "../../images/Profile Image.svg";
import nursePic from "../../images/Profile Image Container.svg";
import adminPic from "../../images/Profile Image Section.png";

type Roles = "Admin" | "Nurse" | "Nurse Admin" | "Patient" | "Sponsor";
type UserIds = "Nurse ID" | "EHR ID";

type UsersProps = {
  role: Roles;
  name: string;
  ehrId?: number;
  nurseId?: number; // nurses have no ehrId but nurseId
  gender: string;
  age: number;
  sponsor?: number; // for patients only
  patients?: number; // for nurses and sponsors
  ticketPass?: string; // for patients only
  email: string;
  address: string;
  phone: number;
  userId: UserIds;
  status?: "Active"; // Patients & Sponsors
};
type DiagnosesProps = {
  id?: string | number;
  name?: string;
  deleteButton?: React.ReactNode;
};

const ProfileCard: React.FC<UsersProps> = ({
  name,
  role,
  ehrId,
  nurseId,
  gender,
  age,
  sponsor,
  patients,
  ticketPass,
  email,
  address,
  phone,
  userId,
  status,
}) => {
  const patientDiagnose: DiagnosesProps[] = [
    {
      id: 1,
      name: "Obesity",
      deleteButton: (
        <X
          className="cursor-pointer text-zinc-500 w-4 h-4"
          onClick={() => {
            // Logic to remove the diagnosis
          }}
        />
      ),
    },
    {
      id: 2,
      name: "Obesity",
      deleteButton: (
        <X
          className="cursor-pointer text-zinc-500 w-4 h-4"
          onClick={() => {
            // Logic to remove the diagnosis
          }}
        />
      ),
    },
    {
      id: 3,
      name: "Chronic Thyroid Disorder",
      deleteButton: (
        <X
          className="cursor-pointer text-zinc-500 w-4 h-4"
          onClick={() => {
            // Logic to remove the diagnosis
          }}
        />
      ),
    },
    {
      id: 4,
      name: "Type 2 Diabetes",
      deleteButton: (
        <X
          className="cursor-pointer text-zinc-500 w-4 h-4"
          onClick={() => {
            // Logic to remove the diagnosis
          }}
        />
      ),
    },
    {
      id: 5,
      name: "Obesity",
      deleteButton: (
        <X
          className="cursor-pointer text-zinc-500 w-4 h-4"
          onClick={() => {
            // Logic to remove the diagnosis
          }}
        />
      ),
    },
    {
      id: 6,
      name: "Obesity",
      deleteButton: (
        <X
          className="cursor-pointer text-zinc-500 w-4 h-4"
          onClick={() => {
            // Logic to remove the diagnosis
          }}
        />
      ),
    },
    {
      id: 7,
      name: "Obesity",
      deleteButton: (
        <X
          className="cursor-pointer text-zinc-500 w-4 h-4"
          onClick={() => {
            // Logic to remove the diagnosis
          }}
        />
      ),
    },
    {
      id: 8,
      name: "Obesity",
      deleteButton: (
        <X
          className="cursor-pointer text-zinc-500 w-4 h-4"
          onClick={() => {
            // Logic to remove the diagnosis
          }}
        />
      ),
    },
    {
      id: 9,
      name: "Obesity",
      deleteButton: (
        <X
          className="cursor-pointer text-zinc-500 w-4 h-4"
          onClick={() => {
            // Logic to remove the diagnosis
          }}
        />
      ),
    },
  ];

  const [openDiagnoses, setOpenDiagnoses] = useState(false);
  const handleOpenDiagnoses = () => {
    setOpenDiagnoses(!openDiagnoses);
  };
  return (
    <div className="flex sm:flex-row flex-col gap-4">
      {role === "Admin" && (
        <img
          src={adminPic}
          alt="Profile"
          className="w-60 h-60 rounded  object-cover"
        />
      )}
      {role === "Patient" && (
        <img
          src={patientPic}
          alt="Profile"
          className="w-60 h-60 rounded object-cover"
        />
      )}
      {role === "Sponsor" && (
        <img
          src={sponsorPic}
          alt="Profile"
          className="w-60 h-60 rounded object-cover"
        />
      )}
      {role === "Nurse" && (
        <img
          src={nursePic}
          alt="Profile"
          className="w-60 h-60 rounded object-cover"
        />
      )}

      <div className="">
        <div className="flex gap-2 items-center">
          {role === "Admin" && (
            <span className="mt-4 rounded-lg text-zinc-900 bg-zinc-300 px-3 py-1">
              {role}
            </span>
          )}
          {role === "Patient" && (
            <div className="flex gap-2">
              <span className="mt-4 rounded-lg text-blue-900 bg-blue-100 px-3 py-1">
                {role}
              </span>
              <span className="mt-4 rounded-lg text-[#34C759] bg-[#d2f8db] px-3 py-1">
                {status}
              </span>
            </div>
          )}
          {role === "Sponsor" && (
            <div>
              <div className="flex gap-2">
                <span className="mt-4 rounded-lg text-[#355CE1] bg-blue-100 px-3 py-1">
                  {role}
                </span>
                <span className="flex gap-2 items-center justify-center mt-4 rounded-lg text-[#355CE1] bg-blue-100 px-3 py-1">
                  <ShieldIcon className="w-4 h-4" />
                  Individual
                </span>
                <span className="mt-4 rounded-lg text-[#34C759] bg-[#d2f8db] px-3 py-1">
                  {status}
                </span>
              </div>
            </div>
          )}
          {role === "Nurse" && (
            <div className="flex gap-2">
              <span className="mt-4 rounded-lg text-[#DB6A7C] bg-[#f5e6e8] px-3 py-1">
                {role}
              </span>
              <span className="mt-4 rounded-lg text-zinc-900 bg-zinc-300 px-3 py-1">
                Admin
              </span>
            </div>
          )}
          {role === "Nurse Admin" && (
            <div className="">
              <span className="mt-4 rounded-lg text-[#DB6A7C] bg-[#f5e6e8] px-3 py-1">
                {role}
              </span>
              <span className="mt-4 rounded-lg text-zinc-900 bg-zinc-300 px-3 py-1">
                Admin
              </span>
            </div>
          )}
        </div>
        <div className="flex sm:flex-row flex-col gap-4 items-center">
          <div className="flex flex-col gap-5 w-full">
            <h2 className="text-xl font-semibold">{name}</h2>
            <div className="flex items-center gap-2">
              <p className="flex justify-center items-center gap-1 text-zinc-600 text-[12px]">
                <ContactIcon className="h-4 w-4" />
                {userId}
              </p>
              {userId === "Nurse ID"
                ? (
                    <strong className="text-zinc-900">{nurseId}</strong>
                  )
                : (
                    <strong>{ehrId}</strong>
                  )}
            </div>
            <div className="flex sm:flex-row items-start flex-col gap-6">
              <div className="flex items-center gap-2 bg-[#fff] px-3 rounded-lg">
                <UserIcon className="h-4 w-4" />
                {gender}
              </div>
              <div className="flex items-center gap-2 bg-[#fff] px-3 rounded-lg">
                <CalendarIcon className="h-4 w-4" />
                {age} yrs old
              </div>
              <div>
                {role === "Patient" && (
                  <div className="flex items-center gap-2 bg-[#fff] px-3 rounded-lg">
                    <p className="flex gap-2">
                      <UsersIcon className="h-4 w-4" />
                      {sponsor} Sponsors
                    </p>
                  </div>
                )}
                {role === "Nurse" && (
                  <div className="flex items-center gap-2 bg-[#fff] px-3 rounded-lg">
                    <p className="flex gap-2">
                      <UsersIcon className="h-4 w-4" />
                      {patients} Patients
                    </p>
                  </div>
                )}
                {role === "Admin" && (
                  <div className="flex items-center gap-2 bg-[#fff] px-3 rounded-lg">
                    <p className="flex gap-2">
                      <UsersIcon className="h-4 w-4" />
                      {patients} Patients
                    </p>
                  </div>
                )}
              </div>
              {role === "Patient" && (
                <div className="flex items-center gap-2 bg-[#fff] px-3">
                  <TicketIcon className="h-4 w-4" />
                  {ticketPass}
                </div>
              )}
            </div>
            <div className="flex sm:flex-row flex-col gap-6">
              <div className="flex items-center gap-2">
                <span className="rounded-2xl p-2 bg-[#c8d3fa] text-[#355CE1]">
                  <MailIcon className="h-4 w-4" />
                </span>
                <span>
                  <p className="text-zinc-600">Email</p>
                  <p className="text-[#355CE1] underline">{email}</p>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="rounded-2xl p-2 bg-[#c8d3fa] text-[#355CE1]">
                  <PhoneIcon className="h-4 w-4" />
                </span>
                <span>
                  <p className="text-zinc-600">Phone Number</p>
                  <p>{phone}</p>
                </span>
              </div>
              <div className="flex items-center gap-2 col-span-full">
                <span className="rounded-2xl p-2 bg-[#c8d3fa] text-[#355CE1]">
                  <MapPinIcon className="h-4 w-4" />
                </span>
                <span>
                  <p className="text-zinc-600">Address</p>
                  <p>{address}</p>
                </span>
              </div>
            </div>
          </div>
          {role === "Patient" && (
            <Card className="mt-4 p-4 bg-[#fff] shadow-sm">
              <span className="flex justify-between items-center">
                <p className="sm:text-2xl text-zinc-500">Patients Diagnosis</p>
                <NavLink to="#">
                  <Button onClick={handleOpenDiagnoses} className="bg-[#355CE1] text-[#fff] font-bold px-2">
                    See All
                  </Button>
                </NavLink>
              </span>

              {patientDiagnose.length >= 7
                ? (
                    <span className="">
                      <ul className="flex flex-wrap gap-2">
                        {patientDiagnose.slice(0, 7).map(diagnosis => (
                          <li key={diagnosis.id} className="flex justify-between">
                            <span className="bg-[#db6a7d13] text-[#DB6A7C] px-4 py-1  rounded-lg">
                              {diagnosis.name}
                            </span>
                          </li>
                        ))}
                        <NavLink onClick={handleOpenDiagnoses} to="#" className=" underline float-right">
                          +{patientDiagnose.length - 6}
                          more
                        </NavLink>
                      </ul>
                    </span>
                  )
                : (
                    <p className="mt-4 text-zinc-500">No diagnosis found.</p>
                  )}
              {openDiagnoses && (
                <PatientDiagnoses closeModal={handleOpenDiagnoses} diagnoses={patientDiagnose} />
              )}
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
