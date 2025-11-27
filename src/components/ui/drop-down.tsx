import React from "react";
import { useNavigate } from "react-router-dom";

import type { Nurse, Patient, Sponsor } from "@/components/patient/types";

import AddUser from "@/pages/users/add-user-modal";

const DropDown: React.FC<{ user: Sponsor | Nurse | Patient }> = ({ user }) => {
  const navigate = useNavigate();
  const [editMode, setEditMode] = React.useState(false);
  const handleViewUser = (user: Sponsor | Nurse | Patient) => {
    if (user.role === "Patient") {
      navigate(`/dashboard/users/patient/${user.id}`);
    }
    else if (user.role === "Nurse") {
      navigate(`/dashboard/users/nurse/${user.id}`);
    }
    else if (user.role === "Sponsor") {
      navigate(`/dashboard/users/sponsor/${user.id}`);
    }
  };
  const handleEditUser = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    e.preventDefault();
    setEditMode(true);
    // return <AddUser closeModal={() => setEditMode(false)} editMode={editMode} setEditMode={setEditMode} />;
  };
  return (
    <div className="absolute w-[200px] h-fit sm:mr-60 bg-white shadow-lg rounded-lg mt-6 p-4 z-20" onClick={e => e.stopPropagation()}>
      <div className="text-sm text-gray-700" onClick={() => handleViewUser(user)}>
        <p className="mb-2">View User</p>
      </div>
      {user.role === "Patient" && (
        <div className="text-sm text-gray-700">
          <p>
            View Sponsors
          </p>
        </div>
      )}
      {user.role === "Nurse" && (
        <div className="text-sm text-gray-700" onClick={() => handleViewUser(user)}>
          <p>
            View Patients
          </p>
        </div>
      )}
      <div className="text-sm text-gray-700 border-b border-t border-gray-200 my-2 py-2" onClick={e => handleEditUser(e)}>
        <p className="cursor-pointer">
          Edit User
        </p>
      </div>
      {editMode && (
        <AddUser closeModal={() => setEditMode(false)} editMode={editMode} setEditMode={setEditMode} />
      )}
      <div>
        <p className="text-sm text-red-500 cursor-pointer">
          Delete User
        </p>
      </div>
    </div>
  );
};

export default DropDown;
