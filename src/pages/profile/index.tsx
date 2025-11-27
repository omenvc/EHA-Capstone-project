import React from "react";

// import NurseProfile from '../profile/NurseProfile';
import PatientProfile from "./patient-profile";
// import AddUser from "../users/AddUserModal";
// import AdminProfile from "./AdminProfile";
// import SponsorProfile from "./SponsorProfile";

const UserDetails: React.FC = () => {
  return (
    <div>
      <PatientProfile />

      {/* <AdminProfile /> */}
    </div>
  );
};
export default UserDetails;
