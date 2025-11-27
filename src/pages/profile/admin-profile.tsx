import {
  AtSign,
  Goal,
  HandshakeIcon,
  MoreHorizontal,
  SettingsIcon,
  StethoscopeIcon,
  Trash2,
  UserIcon,
  UserPlus,
  UsersIcon,
} from "lucide-react";
import React from "react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

import ProfileCard from "../users/profile-card";

type ActivityPops = {
  task: string;
  date: string;
  userName: string;
  activity: string;
};

type RecentActivity = {
  date?: string;
  day?: string;
  user: string;
  action: string;
  details: string;
  subtext: string;
  icon: React.ElementType; // Icon component type
};

type AdminProfileProps = {
  role: "Admin";
  name: string;
  ehrId: number;
  gender: string;
  age: number;
  patients: number;
  email: string;
  address: string;
  phone: number;
  userId: "EHR ID";
};
const AdminProfile: React.FC = () => {
  const adminDetails: AdminProfileProps = {
    role: "Admin",
    name: "Muhammed Bojang",
    ehrId: 771225456,
    gender: "Male",
    age: 32,
    patients: 6,
    email: "badkhadija@gmail.com",
    address: "10 Dobson Street, Banjul, The Gambia",
    phone: 56556922,
    userId: "EHR ID",
  };
  const activities: ActivityPops[] = [
    {
      task: "Created a User",
      date: "12 March 2025",
      userName: "Mariama Bah",
      activity: "2 Sponsors 1 Nurse",
    },
    {
      task: "Added Patient",
      date: "15 April 2025",
      userName: "Jainaba Jallow",
      activity: "1 Nurse",
    },
    {
      task: "Created a User",
      date: "20th April 2025",
      userName: "Fatima Badjie",
      activity: "2 Sponsors 1 Nurse",
    },
    {
      task: "Added Sponsor",
      date: "25 April 2025",
      userName: "Jacob Owens",
      activity: "5 Patients",
    },
    {
      task: "Deleted Nurse",
      date: "27 April 2025",
      userName: "Fatou Kombeh",
      activity: "2 Patients",
    },
    {
      task: "Created Admin",
      date: "18 June 2025",
      userName: "Ousman Jaiteh",
      activity: "No activities yet",
    },
  ];

  const recentActivities: RecentActivity[] = [
    {
      date: "28",
      day: "Friday, June",
      user: "Lamin Kujabi",
      action: "added a New Nurse",
      details: "Nurse: Isatou Jawara",
      subtext: "Assigned to Ousainou Jonga, Bakary Fatty, +2 others",
      icon: UserPlus,
    },
    {
      date: "16",
      day: "Tuesday, July",
      user: "Fatou Bojang",
      action: "deleted a Patient",
      details: "Patient: Maimouna Badjie",
      subtext: "Subscription Cancelled",

      icon: Trash2,
    },
    {
      user: "Lamin Kujabi",
      action: "assigned a New Sponsor",
      details: "Sponsor: Isabelle Maroung",
      subtext: "Sponsors Modou Samba and Kumba Kujabi",

      icon: AtSign,
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between flex-wrap">
        <h1 className="text-2xl font-bold">My Profile</h1>
        <div className="flex gap-2">
          <Button variant="outline">
            <SettingsIcon className="mr-2 h-4 w-4" />
            {" "}
            My Settings
          </Button>
          <Button className="bg-blue-600 text-[#ffff]">
            <UserIcon className="mr-2 h-4 w-4" />
            {" "}
            Edit Profile
          </Button>
        </div>
      </div>

      {/* Profile Info */}
      <ProfileCard {...adminDetails} />
      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="p-4 bg-[#ffffff]">
          <div className="text-muted-foreground text-sm flex items-center justify-between">
            Total Users Created
            {" "}
            <span className="bg-[#c8d3fa] p-2 rounded-2xl">
              <UsersIcon className="h-4 w-4 text-[#355CE1]" />
            </span>
          </div>
          <div className="text-2xl font-bold">40</div>
        </Card>
        <Card className="p-4 bg-[#fff]">
          <div className="text-muted-foreground text-sm flex items-center justify-between">
            Patients Created
            {" "}
            <span className="bg-[#c8d3fa] p-2 rounded-2xl">
              <UserIcon className="h-4 w-4 text-[#355CE1]" />
            </span>
          </div>
          <div className="text-2xl font-bold">18</div>
        </Card>
        <Card className="p-4 bg-[#fff]">
          <div className="text-muted-foreground text-sm flex items-center justify-between">
            Nurses Created
            {" "}
            <span className="bg-[#c8d3fa] p-2 rounded-2xl">
              <StethoscopeIcon className="h-4 w-4 text-[#355CE1]" />
            </span>
          </div>
          <div className="text-2xl font-bold">24</div>
        </Card>
        <Card className="p-4 bg-[#fff]">
          <div className="text-muted-foreground text-sm flex items-center justify-between">
            Sponsors Created
            <span className="bg-[#c8d3fa] p-2 rounded-2xl">
              <HandshakeIcon className="h-4 w-4 text-[#355CE1]" />
            </span>
          </div>
          <div className="text-2xl font-bold">40</div>
        </Card>
      </div>

      {/* Activities */}
      <div className="grid sm:grid-cols-[1fr_2fr] sm:gap-4 grid-rows-[1fr] gap-6">
        <Card className="space-y-4 bg-[#ffffff]">
          <div className="flex justify-between items-center w-full px-4">
            <h3 className="text-lg font-semibold">My Activity</h3>
            <Button variant="ghost" size="icon" className="p-3 border">
              <MoreHorizontal className="h-5 w-5" />
            </Button>
          </div>
          <div className="flex flex-col gap-4 p-4 space-y-1 text-sm">
            {activities.map(({ task, date, userName, activity }) => (
              <div
                key={date}
                className="flex justify-between items-center gap-3"
              >
                <div>
                  <p>{task}</p>
                  <p className="flex gap-2 text-muted-foreground">
                    <UserPlus className="w-4 h-4" />
                    {date}
                  </p>
                </div>
                <div className="flex flex-col items-end">
                  <p className="text-blue-600">{userName}</p>
                  <p className="text-muted-foreground">{activity}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-4 bg-[#ffffff]">
          <h3 className="text-lg font-semibold mb-4">Other Admin Activities</h3>
          <div className="text-sm space-y-4">
            {recentActivities.map(
              ({ date, day, user, action, details, subtext, icon: Icon }) => (
                <div key={date} className=" flex flex-col items-start gap-4">
                  <p className="font-semibold  flex items-center gap-4">
                    <span className="text-xl">{date}</span>
                    <span className="text-l">{day}</span>
                  </p>
                  <div className="flex items-start gap-4 w-full">
                    <Goal className="h-5 w-5 text-black" />
                    <Card className="flex flex-row justify-between items-start gap-2 sm:w-[50%] p-3">
                      <div className="flex flex-col">
                        <span className="font-medium">
                          {user}
                          {" "}
                          {action}
                        </span>
                        <span className="font-medium">{details}</span>
                        <span className="text-muted-foreground">{subtext}</span>
                      </div>
                      <div className="flex items-end justify-end bg-black rounded-full p-2">
                        <Icon className="h-5 w-5 " color="white" />
                      </div>
                    </Card>
                  </div>
                </div>
              ),
            )}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default AdminProfile;
