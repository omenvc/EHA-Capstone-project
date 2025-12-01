import { ChevronLeft, ChevronRight, ContactIcon, HandHeart, Home, LayoutGrid, PersonStanding, Search, Shield } from "lucide-react";
import React, { useState } from "react";
import DataTable from "react-data-table-component";
import { useNavigate } from "react-router-dom";

import type { Nurse, Patient, Sponsor, User } from "@/components/patient/types";

import { Button } from "./button";
import DropDown from "./drop-down";

type UserColumn = {
  name: string;
  selector: (row: Sponsor | Patient | User | Nurse) => string | number;
  cell?: (row: Sponsor | Patient | User | Nurse) => React.ReactNode;
  right?: boolean;
  button?: boolean;
  width?: string;
};
type Users = { sponsors: Sponsor[]; patients: Patient[]; users: User[]; nurses: Nurse[] };

const CustomDataTable: React.FC<{ users: Users }> = ({ users }) => {
  const [dropDownOpenPatient, setDropdownOpenPatient] = useState(false);
  const [dropDownOpenSponsor, setDropdownOpenSponsor] = useState(false);
  const [dropDownOpenNurse, setDropdownOpenNurse] = useState(false);
  const [activeDropDownUser, setActiveDropDownUser] = useState<number | null>(null);
  const handleDropdownToggle = (row: Sponsor | Nurse | Patient) => {
    if (row.role?.toLocaleLowerCase() === "patient") {
      setActiveDropDownUser(prev => prev === row.id ? null : row.id);
      setDropdownOpenPatient(!dropDownOpenPatient);
      setDropdownOpenSponsor(false);
      setDropdownOpenNurse(false);
    }
    else if (row.role?.toLocaleLowerCase() === "sponsor") {
      setActiveDropDownUser(prev => prev === row.id ? null : row.id);
      setDropdownOpenSponsor(!dropDownOpenSponsor);
      setDropdownOpenPatient(false);
      setDropdownOpenNurse(false);
    }
    else if (row.role?.toLocaleLowerCase() === "nurse") {
      setActiveDropDownUser(prev => prev === row.id ? null : row.id);
      setDropdownOpenPatient(false);
      setDropdownOpenSponsor(false);
      setDropdownOpenNurse(!dropDownOpenNurse);
    }
  };

  let totalPages: number = 0;
  let filteredUsers: (Sponsor | Patient | User | Nurse)[] = [];
  let currentUsers: (Sponsor | Patient | User | Nurse)[] = [];

  if (users.sponsors && users.sponsors.length > 0) {
    currentUsers = users.sponsors;
  }
  else if (users.patients && users.patients.length > 0) {
    currentUsers = users.patients;
  }
  else if (users.users && users.users.length > 0) {
    currentUsers = users.users;
  }
  else if (users.nurses && users.nurses.length > 0) {
    currentUsers = users.nurses;
  }

  const showRelationshipColumn = currentUsers === users.patients || currentUsers === users.sponsors || currentUsers === users.nurses;

  const columns: UserColumn[] = [
    {
      name: "Name",
      selector: (row: Sponsor | Patient | User | Nurse) => row.name,
      cell: (row: Sponsor | Patient | User | Nurse) => (
        <div className="flex items-center justify-center gap-2">
          <img
            src={row.avatarUrl}
            alt={row.avatarUrl}
            className="w-10 h-10 rounded-full"
          />
          <span className="">
            <p className="text-sm font-semibold">{row.name}</p>
            <p className={`flex text-xs ${row.role === "Sponsor" || currentUsers === users.sponsors ? "text-[#09ec24]" : row.role === "Patient" || currentUsers === users.patients ? "text-[#355CE1]" : row.role === "Nurse" || currentUsers === users.nurses ? "text-[#DB6A7C]" : "text-gray-500"}`}>
              <PersonStanding className="w-4 h-4 inline-block ml-1" />
              {row.role === "Sponsor" || currentUsers === users.sponsors ? "Sponsor" : row.role === "Patient" || currentUsers === users.patients ? "Patient" : row.role === "Nurse" || currentUsers === users.nurses ? "Nurse" : ""}
            </p>
          </span>
        </div>
      ),
      width: "250px",
    },
    {
      name: "EHR ID",
      selector: (row: Sponsor | Patient | User | Nurse) => row.id,
      cell: (row: Sponsor | Patient | User | Nurse) => (
        <span className="flex items-center gap-3 text-sm font-semibold">
          <ContactIcon className="w-4 h-4" />
          {" "}
          {row.id}
        </span>
      ),
      width: "200px",
    },
    {
      name: "Type",
      selector: (row: Sponsor | Patient | User | Nurse) => row.type,
      cell: (row: Sponsor | Patient | User | Nurse) => {
        return (
          <span
            className={`flex justify-center items-center gap-2 px-4 py-1 ${row.type === "Individual"
              ? "bg-[#0b5c141c] font-semibold text-[#0B5C15] rounded-lg"
              : "bg-[#9411b818] font-semibold text-[#9411B8]  rounded-lg"
            }`}
          >
            <Shield
              className={`w-6 h-6 ${row.type === "Individual" ? "text-[#0B5C15]" : "text-[#9411B8]"
              }`}
            />
            {row.type}
          </span>
        );
      },
      width: "250px",
    },
    {
      name: "Address",
      selector: (row: Sponsor | Patient | User | Nurse) => row.address,
      cell: (row: Sponsor | Patient | User | Nurse) => (
        <span className="flex items-center gap-3 text-sm">
          <Home className="w-4 h-4" />
          {row.address}
        </span>
      ),
      width: "200px",
    },
    ...(showRelationshipColumn
      ? [
          {
            name: "Relationship",
            selector: (row: Sponsor | Patient | User | Nurse) => row.relationship ?? "",
            cell: (row: Sponsor | Patient | User | Nurse) => (
              <span className="flex items-center gap-3 text-sm">
                <HandHeart className="w-4 h-4" />
                {row.relationship}
              </span>
            ),
            width: "200px",
          },
        ]
      : []
    ),
    {
      name: "Status",
      selector: (row: Sponsor | Patient | User | Nurse) => row.status,
      cell: (row: Sponsor | Patient | User | Nurse) => (
        <span
          className={`px-4 py-1 rounded-lg font-semibold ${row.status === "Active"
            ? "bg-[#34c75925] text-[#34C759]"
            : row.status === "Pending"
              ? "bg-[#f0ad4e25] text-[#f0ad4e]"
              : "bg-gray-100 text-gray-300"
          }`}
        >
          {row.status}
        </span>
      ),
      width: "150px",
    },
    {
      name: "Action",
      selector: () => "", // Return an empty string since cell is used for rendering
      cell: (row: Sponsor | Patient | User | Nurse) => (
        <span className="flex justify-center items-center" onClick={() => handleDropdownToggle(row)}>

          <p className="border-1 border-zinc-400 p-1 rounded">{row.action}</p>

          {/* Dropdown menu for actions */}
          {
            row.id === activeDropDownUser
              ? (
                  row.role?.toLocaleLowerCase() === "patient"
                    ? (
                        <DropDown user={row as Patient} />
                      )
                    : row.role?.toLocaleLowerCase() === "sponsor"
                      ? (
                          <DropDown user={row as Sponsor} />
                        )
                      : row.role?.toLocaleLowerCase() === "nurse"
                        ? (
                            <DropDown user={row as Nurse} />
                          )
                        : null
                )
              : null
          }
        </span>
      ),
      right: true,
    },
  ];
  const rowsPerPage = 15; // Number of rows per page

  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  if (users.sponsors && users.sponsors.length > 0) {
    currentUsers = users.sponsors;
  }
  else if (users.patients && users.patients.length > 0) {
    currentUsers = users.patients;
  }

  filteredUsers = currentUsers.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
    || user.id.toString().includes(searchTerm)
    || user.relationship?.toLowerCase().includes(searchTerm.toLowerCase())
    || user.type.toLowerCase().includes(searchTerm.toLowerCase())
    || user.address.toLowerCase().includes(searchTerm.toLowerCase())
    || user.status.toLowerCase().includes(searchTerm.toLowerCase())
    || user.role?.toLowerCase().includes(searchTerm.toLowerCase()),
  );
  totalPages = Math.ceil(filteredUsers.length / rowsPerPage);
  const paginatedUsers = filteredUsers.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage,
  );

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prev => Math.max(prev - 1, 1));
    }
  };
  const handleRowClick = (row: Sponsor | Patient | User | Nurse) => {
    const role = row.role?.toLocaleLowerCase();
    
    if (currentUsers === users.sponsors) {
      navigate(`/dashboard/users/sponsor/${row.id}`);
    }
    else if (currentUsers === users.patients) {
      navigate(`/dashboard/users/patient/${row.id}`);
    }
    else if (currentUsers === users.nurses) {
      navigate(`/dashboard/users/nurse/${row.id}`);
    }
    else if (role === "sponsor") {
      navigate(`/dashboard/users/sponsor/${row.id}`);
    }
    else if (role === "patient") {
      navigate(`/dashboard/users/patient/${row.id}`);
    }
    else if (role === "nurse") {
      navigate(`/dashboard/users/nurse/${row.id}`);
    }
    else {
      navigate(`/dashboard/users/user/${row.id}`);
    }
  };
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-4 p-4">
        <div className="w-full">
          <Search className="w-4 h-4 absolute mt-3 text-zinc-700 ml-3 font-bold" />
          <input
            type="search"
            name="medication"
            placeholder="Search for name, ID, relationship, type etc"
            className="outline-zinc-400 border-1 border-zinc-400 py-2 px-9 rounded w-full"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-end gap-4 md:gap-6 md:ml-4">
          <select
            name="relationship"
            id="relationship-select"
            aria-label="Sort by relationship"
            className="border border-zinc-400 py-2 px-4 w-full md:w-2/3 rounded outline-none"
          >
            <option value="">Most Recent</option>
          </select>
          <p className="border-1 border-zinc-400 p-1 rounded text-center">
            <LayoutGrid className="text-zinc-500" />
          </p>
        </div>
      </div>
      <DataTable
        columns={columns}
        data={paginatedUsers}
        pagination={false}
        highlightOnHover
        onRowClicked={handleRowClick}
        pointerOnHover
        striped
        customStyles={{
          rows: {
            style: {
              minHeight: "4rem", // override the row height
            },
          },
        }}
      />
      {/* Pagination */}
      <div className="flex flex-wrap justify-center mt-4 gap-2">
        <Button
          size="sm"
          className="bg-white text-gray-700  hover:bg-gray-100"
          disabled={currentPage === 1}
          onClick={handlePreviousPage}
        >
          <ChevronLeft />
          <span className="hidden sm:inline">Previous</span>
        </Button>

        <div className="flex flex-wrap justify-center gap-2">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
            <Button
              key={page}
              size="sm"
              className={`${page === currentPage
                ? "border border-blue-700 text-blue-700"
                : "bg-white text-gray-700  hover:bg-gray-50"
              }`}
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </Button>
          ))}
        </div>

        <Button
          size="sm"
          className="bg-white text-gray-700  hover:bg-gray-100"
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(prev => prev + 1)}
        >
          <span className="hidden sm:inline">Next</span>
          <ChevronRight />
        </Button>
      </div>
    </div>
  );
};

export default CustomDataTable;
