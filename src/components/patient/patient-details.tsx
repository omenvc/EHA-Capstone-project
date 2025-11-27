import React from "react";

import ProfileCard from "@/pages/users/profile-card";

type PatientProps = {
  role: "Patient";
  name: string;
  ehrId: number;
  gender: string;
  age: number;
  sponsor: number;
  ticketPass: string;
  email: string;
  address: string;
  phone: number;
  userId: "EHR ID";
  status: "Active";
};

const PatientDetails: React.FC = () => {
  const patientDetails: PatientProps = {
    role: "Patient",
    name: "Musa Bojang",
    ehrId: 71225623,
    gender: "Male",
    age: 32,
    sponsor: 1,
    ticketPass: "Premium RX Wow Pass",
    email: "musaboj@gmail.com",
    address: "10 Dobson Street, Banjul, The Gambia",
    phone: +2205656922,
    userId: "EHR ID",
    status: "Active",
  };

  return (
    <div className="flex gap-4 items-center justify-between">
      {/* User profile details */}
      <ProfileCard {...patientDetails} />

    </div>
  );
};

export default PatientDetails;
