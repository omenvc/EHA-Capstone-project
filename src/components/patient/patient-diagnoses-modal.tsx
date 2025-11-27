import { CircleAlert, X } from "lucide-react";
import React, { useState } from "react";

import { Button } from "../ui/button";
import { Card } from "../ui/card";

type DiagnosesProps = {
  id?: string | number;
  name?: string;
  deleteButton?: React.ReactNode;
};

type CloseModalProp = { closeModal: () => void };
type PatientDiagnosesProps = CloseModalProp & { diagnoses?: DiagnosesProps[] };
const PatientDiagnoses: React.FC<PatientDiagnosesProps> = ({ closeModal, diagnoses }) => {
  const [diagnosesList, setDiagnosesList] = useState<DiagnosesProps[]>(diagnoses || []);
  const [diagnose, setDiagnose] = useState("");
  const [newDiagnoseForm, setNewDiagnoseForm] = useState(false);

  const handleNewDiagnoseForm = () => {
    setNewDiagnoseForm(!newDiagnoseForm);
  };
  const handleAddDiagnose = (event: React.FormEvent) => {
    event.preventDefault();
    if (diagnose.trim() !== "") {
      setDiagnosesList(prev => [
        ...prev,
        {
          id: Date.now(),
          name: diagnose,
          deleteButton: (
            <X
              className="cursor-pointer text-zinc-500 w-4 h-4"
              onClick={() => {
                setDiagnosesList(prev => prev.filter(d => d.name !== diagnose)); // Remove the diagnosis from the list
                setDiagnose(""); // Clear the input field
              }}
            />
          ),
        },
      ]);
      setDiagnose("");
    }
  };
  return (
    <div className="top-0 left-0 fixed w-full h-full bg-black/50 flex justify-center items-center z-50">
      <Card className="w-[90%] sm:w-[600px] p-6 bg-white shadow-lg rounded-lg">
        <h1 className="flex justify-between text-2xl font-bold mb-4">
          <span className="flex items-center gap-2 text-[#355CE1] font-normal">
            <CircleAlert />
            Patient Diagnoses
          </span>
          <X className="cursor-pointer" onClick={() => closeModal()} />
        </h1>
        <span className="flex justify-between items-center mb-4">
          <p className="font-semibold text-2xl">All Disorders</p>
          <Button className="bg-[#355CE1] text-[#fff]" onClick={handleNewDiagnoseForm}>+ Add Disorder</Button>
        </span>
        {newDiagnoseForm && (
          <form onSubmit={handleAddDiagnose}>
            <input
              type="text"
              value={diagnose}
              onChange={e => setDiagnose(e.target.value)}
              placeholder="Enter disorder name"
              className="border border-gray-300 rounded-lg p-2 w-full mb-2"
            />
            <Button type="submit" className="bg-[#355CE1] text-[#fff]">Add</Button>
          </form>
        )}
        <div>
          <ul className="flex flex-wrap gap-2 m-1">
            {diagnosesList.map(diagnosis => (
              <li key={diagnosis.id}>
                <span className="flex items-center gap-2 bg-[#db6a7d13] text-[#DB6A7C] px-4 py-1 overflow-y-auto  rounded-lg">
                  {diagnosis.name}
                  {diagnosis.deleteButton}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Card>
    </div>
  );
};

export default PatientDiagnoses;
