import React from "react";

import ProfileCard from "@/pages/users/profile-card";

type NurseProps = {
  role: "Nurse";
  name: string;
  nurseId: number;
  gender: string;
  age: number;
  patients: number;
  email: string;
  address: string;
  phone: number;
  userId: "Nurse ID";
};
const NurseDetails: React.FC = () => {
  const nurseDetails: NurseProps = {
    role: "Nurse",
    name: "Isatou Ceesay",
    nurseId: 71225623,
    gender: "Female",
    age: 32,
    patients: 6,
    email: "badkhadajie@gmail.com",
    address: "10 Dobson Street, Banjul, The Gambia",
    userId: "Nurse ID",
    phone: 5656922,
  };

  return (
    <div className="flex gap-4 items-center justify-start">
      <ProfileCard {...nurseDetails} />
    </div>
  );
};

export default NurseDetails;
