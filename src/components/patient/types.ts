type statusTypes = "Active" | "Discontinued";
export type Medication = {
  name: string;
  type: string;
  dosage: string;
  startDate: string;
  endDate: string;
  taken: number;
  missed: number;
  strenght: string;
  quantity: string;
  status?: statusTypes;
};

export type Sponsor = {
  name: string;
  id: number;
  type: "Individual" | "Insurance";
  address: string;
  relationship?: string;
  status: "Active" | "Inactive" | "Pending";
  action: React.ReactNode;
  right?: boolean;
  button?: boolean;
  role?: "Sponsor";
  avatarUrl: string;
};

export type Patient = {
  name: string;
  id: number;
  type: "Individual" | "Insurance";
  address: string;
  relationship?: string;
  status: "Active" | "Inactive" | "Pending";
  action: React.ReactNode;
  right?: boolean;
  button?: boolean;
  avatarUrl: string;
  role?: "Patient";
};
export type Nurse = {
  name: string;
  id: number;
  type: "Individual" | "Insurance";
  address: string;
  relationship?: string;
  status: "Active" | "Inactive" | "Pending";
  action: React.ReactNode;
  right?: boolean;
  button?: boolean;
  avatarUrl: string;
  role?: "Nurse";
};
export type User = {
  name: string;
  id: number;
  type: "Individual" | "Insurance";
  address: string;
  status: "Active" | "Inactive" | "Pending";
  action: React.ReactNode;
  role: "Patient" | "Sponsor" | "Nurse";
  right?: boolean;
  relationship?: string;
  button?: boolean;
  avatarUrl: string;
};
