import { Circle } from "lucide-react";
import React from "react";

import type { Medication } from "./types";

import medPic from "../../images/Actrapid.svg";
import CircularProgress from "../ui/circular-progress";
import HorizontalProgress from "../ui/horizontal-progress";

type MedProps = {
  selectedMed: Medication | null;
};

const MedicationDetails: React.FC<MedProps> = ({ selectedMed }) => {
  if (!selectedMed) {
    return (
      <div className="mt-60 p-4 text-gray-500 text-center">
        Select a medication to view details.
      </div>
    );
  }

  return (
    <div className="p-4 bg-[#fff] rounded-lg">
      <div className="flex shadow-sm p-4 rounded-lg gap-4">
        <img src={medPic} alt="" />
        <div className="flex justify-between w-full">
          <div className="flex flex-col">
            <h2 className="text-3xl font-semibold mb-2 ">{selectedMed.name}</h2>
            <p className="mb-1">{selectedMed.dosage}</p>
            <div className="flex gap-4">
              <span className="border-r-1 border-zinc-300 pr-3">
                <p className="text-zinc-400">Dosage Form</p>
                <strong className="text-base">{selectedMed.type}</strong>
              </span>
              <span className="border-r-1 border-zinc-300 pr-3">
                <p className="text-zinc-400">Strength</p>
                <strong className="text-base">{selectedMed.strenght}</strong>
              </span>
              <span className="">
                <p className="text-zinc-400">Quantity given to patient</p>
                <strong className="text-base">{selectedMed.quantity}</strong>
              </span>
            </div>
          </div>
          <span
            className={`px-6 py-2 h-fit rounded-lg ${
              selectedMed.status === "Active"
                ? "bg-[#d2f8db] text-[#34C759]"
                : "bg-zinc-300 text-zinc-600"
            }`}
          >
            {selectedMed.status}
          </span>
        </div>
      </div>
      <div className="mt-8">
        <p className="text-center font-semibold text-xl">Progress (3 Months)</p>
        <span className="flex justify-between">
          <p className="mb-1 flex gap-2">
            <p className="text-zinc-500">Start Date: </p>
            <strong>{selectedMed.startDate}</strong>
          </p>
          <p className="mb-1 flex gap-2">
            <p className="text-zinc-500">End Date:</p>
            {" "}
            <strong>{selectedMed.endDate}</strong>
          </p>
        </span>
        <HorizontalProgress
          progress={
            (selectedMed.taken / (selectedMed.missed + selectedMed.taken)) * 100
          }
        />
        <div className=" mt-6">
          <h1 className="font-sans text-xl font-semibold">
            Medication Adherence
          </h1>
          <div className="flex justify-between items-center">
            <div className="">
              <p className="flex items-center gap-2 text-2xl">
                <Circle className="w-4 h-4 text-green-700" />
                {" "}
                {selectedMed.taken}
                {" "}
                taken out of
                {" "}
                {selectedMed.taken + selectedMed.missed}
              </p>
              <p className="flex items-center gap-2 text-2xl">
                <Circle className="w-4 h-4 text-red-700 font-bold" />
                {selectedMed.missed}
                {" "}
                missed
              </p>
            </div>
            <div>
              <CircularProgress
                progress={Math.floor(
                  (selectedMed.taken
                    / (selectedMed.missed + selectedMed.taken))
                  * 100,
                )}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicationDetails;
