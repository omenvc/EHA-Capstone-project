import React from "react";

import ChatApp from "@/components/chat/chat-app";
import AllPatientsPage from "@/pages/all-patients/all-patients";
import Appointments from "@/pages/appointments/appointments";
import ChatPage from "@/pages/chats/chat-page";
import ProfilePage from "@/pages/profile/admin-profile";
import NurseProfile from "@/pages/profile/nurse-profile";
import PatientProfile from "@/pages/profile/patient-profile";
import SponsorProfile from "@/pages/profile/sponsor-profile";
import UsersPage from "@/pages/users/users";

// Lazily loaded components
const LoginPage = React.lazy(() => import("../pages/auth/login"));
const DashboardHome = React.lazy(() => import("../pages/dashboard-home/home"));
const SettingsPage = React.lazy(() => import("../pages/settings/settings"));
const SponsorsPage = React.lazy(() => import("../pages/sponsors/sponsors"));

export const routes = [
  // Unprotected routes
  { path: "/login", component: LoginPage },

  // Protected routes (using PrivateRoute wrapper)
  { path: "/dashboard/home", component: DashboardHome, protected: true },
  { path: "/dashboard/users", component: UsersPage, protected: true },
  { path: "/dashboard/patients", component: AllPatientsPage, protected: true },
  { path: "/dashboard/patients/chat", component: ChatApp, protected: true },
  { path: "/dashboard/appointments", component: Appointments, protected: true },
  { path: "/dashboard/users/nurse/:id", component: NurseProfile, protected: true },
  { path: "/dashboard/users/sponsor/:id", component: SponsorProfile, protected: true },
  { path: "/dashboard/users/patient/:id", component: PatientProfile, protected: true },
  { path: "/dashboard/profile", component: ProfilePage, protected: true },
  { path: "/dashboard/chats", component: ChatPage, protected: true },
  { path: "/dashboard/settings", component: SettingsPage, protected: true },
  { path: "/dashboard/sponsors", component: SponsorsPage, protected: true },
];
