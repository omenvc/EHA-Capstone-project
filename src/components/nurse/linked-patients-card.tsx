import { ContactIcon, Unlink } from "lucide-react";
// components/LinkedPatientCard.tsx
import React from "react";

import { Button } from "@/components/ui/button";

import patientPic from "../../images/Patient Image.svg";

type LinkedPatientProps = {
  ehrId: string;
  name: string;
  monthlyFee?: number;
  subscriptionFee?: number;
};

const LinkedPatientCard: React.FC<{ patient: LinkedPatientProps }> = ({
  patient,
}) => {
  return (
    <div className="grid sm:grid-cols-[4fr_1fr] shadow-sm rounded-lg p-2 gap-2 border-1 border-zinc-200 mb-2">
      <div className="flex flex-col sm:flex-row gap-4 ">
        <img
          src={patientPic}
          alt="Profile"
          className="w-20 h-20 rounded-full"
        />
        <div className="flex flex-col gap-2 w-full">
          <p className="text-zinc-500">Patient</p>
          <span className="text-xl font-semibold">{patient.name}</span>
          <span className="flex items-center gap-4 ">
            <p className="flex sm:text-sm items-center rounded text-zinc-500 bg-gray-100 py-1 gap-1">
              <ContactIcon className="w-4 h-4" />
              <p className="flex sm:text-[10px]">
                {`EHR ID ${patient.ehrId}`}
              </p>
            </p>
            <p className="text-zinc-500">Relationship</p>
          </span>
          <span className="flex gap-4 items-center">
            <p className="text-zinc-500 bg-gray-100 text-[10px] rounded px-2">
              WOW Basic RX Pass
            </p>
            {patient.subscriptionFee && (
              <p className="flex gap-2 text-[10px] px-2">
                <span className="text-zinc-500 bg-gray-100">Subscription Fee</span>
                <strong>
                  $
                  {patient.subscriptionFee}
                </strong>
              </p>

            )}
            {patient.monthlyFee && (
              <p className="flex gap-2  text-[10px] px-2">
                <span className="text-zinc-500 bg-gray-100">Monthly Fee</span>
                <strong>
                  $
                  {patient.monthlyFee}
                </strong>
              </p>
            )}
          </span>
        </div>
      </div>
      <div className="flex sm:justify-end">
        <Button className="bg-[#355CE1] text-[#fff]">
          <Unlink />
          Unlink Patient
        </Button>
      </div>
    </div>
  );
};

export default LinkedPatientCard;
