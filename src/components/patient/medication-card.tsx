import React from "react";

import type { Medication } from "./types";

import medPic from "../../images/Actrapid.svg";

type MedicationProps = {
  med: Medication;
  onClick: () => void;
};

const MedicationCard: React.FC<MedicationProps> = ({ med, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="bg-[#fff] flex items-center gap-4 rounded-xl p-4 hover:shadow cursor-pointer"
    >
      <img src={medPic} alt="" className="w-15 h-15 mb-2" />
      <div>
        <h3 className="font-sans text-lg">{med.name}</h3>
        <p className="text-zinc-500">{med.dosage}</p>
        <p className="text-sm text-zinc-500">{med.type}</p>
      </div>
    </div>
  );
};

export default MedicationCard;
