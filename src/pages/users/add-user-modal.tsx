import type { FormEvent } from "react";

import { CircleCheckBig, Contact, MailPlus, Pen, UserPlus, X } from "lucide-react";
import React, { useState } from "react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import NavigationTabs from "@/components/ui/navigation-tabs";

import adminIcon from "../../icons/admin.svg";
import nurseIcon from "../../icons/nurse.svg";
import patientIcon from "../../icons/patient.svg";
import sponsorIcon from "../../icons/sponsor.svg";

type CloseModalProps = {
  closeModal: () => void;
};
type EditUserProps = {
  editMode?: boolean;
  setEditMode?: (value: boolean) => void;
};

const AddUser: React.FC<CloseModalProps & EditUserProps> = ({
  closeModal,
  editMode,
}: CloseModalProps & EditUserProps) => {
  const ButtonTabs = [
    { name: "Personal", href: "personal" },
    { name: "Assign", href: "assign" },
  ];

  const [addEmail, setAddEmail] = useState(false);
  const [addPhone, setAddPhone] = useState(false);
  const [activeTab, setActiveTab] = useState("personal");
  const [, setAssignedRole] = useState<string[]>([]);
  const [assignedNurse, setAssignedNurse] = useState(false);
  const [assignedSponsor, setAssignedSponsor] = useState(false);
  const [assignedPatient, setAssignedPatient] = useState(false);
  const [assignedAdmin, setAssignedAdmin] = useState(false);

  const handleaAssignNurse = (event: FormEvent) => {
    event.preventDefault();
    setAssignedNurse(true);
    setAssignedRole(prev => [...prev, "nurse"]);
  };
  const handleAssignSponsor = (event: FormEvent) => {
    event.preventDefault();
    setAssignedSponsor(true);
    setAssignedRole(prev => [...prev, "sponsor"]);
  };
  const handleAssignPatient = (event: FormEvent) => {
    event.preventDefault();
    setAssignedPatient(true);
    setAssignedRole(prev => [...prev, "patient"]);
  };
  const handleAssignAdmin = (event: FormEvent) => {
    event.preventDefault();
    setAssignedAdmin(true);
    setAssignedRole(prev => [...prev, "admin"]);
  };

  const handleAddEmail = (event: FormEvent) => {
    event.preventDefault();
    if (!addEmail) {
      setAddEmail(true);
    }
  };
  const handleAddPhone = (event: FormEvent) => {
    event.preventDefault();
    if (!addPhone) {
      setAddPhone(true);
    }
  };

  return (
    <div className="top-0 left-0 fixed w-full h-full bg-black/50 flex justify-center items-center z-9999 overflow-y-auto py-8">
      <Card className="bg-[#fff] w-3xl py-8 px-6">
        <h1 className="flex justify-between items-center">
          <span className="flex items-center gap-2 sm:text-3xl font-semibold text-[#355CE1]">
            {editMode ? <Pen /> : <UserPlus />}
            {editMode ? "Edit User" : "New User"}
          </span>
          <X onClick={closeModal} className="cursor-pointer" aria-label="close modal" />
        </h1>
        <NavigationTabs
          tabs={ButtonTabs}
          activeTab={activeTab}
          onTabChange={tab => setActiveTab(tab)}
        />

        {/** Personal Information Tab */}
        {activeTab === "personal" && (
          <span>
            <h2 className="text-3xl font-bold">
              {editMode ? "1. Edit Personal Information" : "1. Personal Information"}
            </h2>
            <p className="text-zinc-700">Fill in the users personal details</p>
            <div className="mt-6">
              <form action="" className="flex flex-col gap-4 w-full">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="flex flex-col">
                    <label htmlFor="name">First Name</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="E.g Muhammed"
                      className="outline-zinc-400 border-1 border-zinc-400 p-2 rounded w-full"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="last-name">Last Name</label>
                    <input
                      type="text"
                      name="last-name"
                      placeholder="E.g Touray"
                      className="outline-zinc-400 border-1 border-zinc-400 p-2 rounded w-full"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="flex flex-col">
                    <label htmlFor="email" className="flex justify-between">
                      <span>Email</span>
                      <span
                        className="flex items-center text-[#355CE1] cursor-pointer"
                        onClick={handleAddEmail}
                      >
                        <MailPlus className="w-4 h-4" />
                        Add email
                      </span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="E.g Muhammed"
                      className="outline-zinc-400 border-1 border-zinc-400 p-2 rounded w-full"
                    />
                    {addEmail && (
                      <input
                        type="email"
                        name="email"
                        placeholder="E.g Muhammed"
                        className="outline-zinc-400 border-1 border-zinc-400 p-2 rounded w-full mt-2"
                      />
                    )}
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="dob">Date of birth</label>
                    <input
                      type="date"
                      name="dob"
                      placeholder="Pick a date"
                      className="outline-zinc-400 border-1 border-zinc-400 p-2 rounded w-full "
                    />
                    <p className="text-zinc-600">
                      Your date of birth is use to calculate your age
                    </p>
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="flex flex-col">
                    <label htmlFor="email" className="flex justify-between">
                      <span>Phone Number</span>
                      <span
                        className="flex items-center text-[#355CE1] cursor-pointer"
                        onClick={handleAddPhone}
                      >
                        <Contact className="w-4 h-4" />
                        Add phone number
                      </span>
                    </label>
                    <input
                      type="number"
                      name="number"
                      placeholder="E.g 3656988"
                      className="outline-zinc-400 border-1 border-zinc-400 p-2 rounded w-full"
                    />
                    {addPhone && (
                      <input
                        type="number"
                        name="number"
                        placeholder="E.g 3656988"
                        className="outline-zinc-400 border-1 border-zinc-400 p-2 rounded w-full mt-2"
                      />
                    )}
                  </div>
                  <div>
                    <label htmlFor="address">Address</label>
                    <select
                      name="address"
                      id="address"
                      className="outline-zinc-400 border-1 border-zinc-400 p-2 rounded w-full"
                    >
                      <option value="" className="text-zinc-600">
                        Select address
                      </option>
                    </select>
                  </div>
                </div>
              </form>
            </div>
            <div className="grid grid-cols-2 gap-3 mt-8">
              <Button className="text-center text-[#355CE1] border-1 border-zinc-400 cursor-pointer" onClick={closeModal}>
                Cancel
              </Button>
              <Button className="bg-[#355CE1] text-[#fff] cursor-pointer">
                Next Step
              </Button>
            </div>
          </span>
        )}

        {/** Assign Role Tab */}
        {activeTab === "assign" && (
          <span>
            <h2 className="text-3xl font-bold">
              {editMode ? "2. Edit Roles" : "2. Assign Role"}
            </h2>
            <p className="text-zinc-700">
              Attach the nurse & sponsors associated with the patient
            </p>

            <div className="grid sm:grid-cols-4 py-2 mt-6 gap-3">
              <div className={`flex items-center gap-4 border-2 ${assignedAdmin ? "border-[#355CE1]" : "border-zinc-200"} rounded p-2`} onClick={handleAssignAdmin}>
                <img src={adminIcon} alt="" className="w-6 h-6" />
                <p className="text-xl">Admin</p>
                {assignedAdmin && <CircleCheckBig className="w-6 h-6 text-[#355CE1]" />}
              </div>
              <div className={`flex items-center gap-4 border-2 ${assignedNurse ? "border-[#355CE1]" : "border-zinc-200"} rounded p-2`} onClick={handleaAssignNurse}>
                <img src={nurseIcon} alt="" className="w-6 h-6" />
                <p className="text-xl">Nurse</p>
                {assignedNurse && <CircleCheckBig className="w-6 h-6 text-[#355CE1]" />}
              </div>
              <div className={`flex items-center gap-4 border-2 ${assignedPatient ? "border-[#355CE1]" : "border-zinc-200"} rounded p-2`} onClick={handleAssignPatient}>
                <img src={patientIcon} alt="" className="w-6 h-6" />
                <p className="text-xl">Patient</p>
                {assignedPatient && <CircleCheckBig className="w-6 h-6 text-[#355CE1]" />}
              </div>
              <div className={`flex items-center gap-4 border-2 w-fit ${assignedSponsor ? "border-[#355CE1]" : "border-zinc-200"} rounded p-2`} onClick={handleAssignSponsor}>
                <img src={sponsorIcon} alt="" className="w-6 h-6" />
                <p className="text-lg">Sponsor</p>
                {assignedSponsor && <CircleCheckBig className="w-6 h-6 text-[#355CE1]" />}

              </div>
              <div className="mt-6">
                <form action="" className=" mt-6 flex flex-col gap-6 sm:w-2xl">
                  <div className="flex flex-col">
                    <label htmlFor="assign-nurse-select">Assign Nurse</label>
                    <label htmlFor="assign-nurse-select" className="sr-only">
                      Assign Nurse
                    </label>
                    <select
                      name="assign-nurse"
                      id="assign-nurse-select"
                      className="outline-zinc-400 border-1 border-zinc-400 p-2 rounded w-full"
                      aria-label="Assign Nurse"
                    >
                      <option value="" className="text-zinc-600">
                        Select address
                      </option>
                    </select>
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="assign-sponsor">Assign Sponsor</label>
                    <label htmlFor="assign-sponsor-select" className="sr-only">
                      Assign Sponsor
                    </label>
                    <select
                      name="assign-sponsor"
                      id="assign-sponsor-select"
                      className="outline-zinc-400 border-1 border-zinc-400 p-2 rounded w-full"
                      aria-label="Assign Sponsor"
                    >
                      <option value="" className="text-zinc-200">
                        Select address
                      </option>
                    </select>
                  </div>
                </form>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 mt-8">
              <Button className=" text-center text-[#355CE1] border-0 bg-zinc-200 border-zinc-400 cursor-pointer" onClick={closeModal}>
                Cancel
              </Button>
              <Button className="bg-[#355CE1] text-[#fff] cursor-pointer">
                Save Profile
              </Button>
            </div>
          </span>
        )}
      </Card>
    </div>
  );
};

export default AddUser;
