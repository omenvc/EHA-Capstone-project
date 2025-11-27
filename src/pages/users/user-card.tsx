import {
  Contact,
  Home,
  MoreHorizontal,
  PersonStanding,
  Users,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";

type Role = "Patient" | "Sponsor" | "Nurse" | "Nurse Admin";

type UserCardProps = {
  name: string;
  avatarUrl: string;
  role: Role;
  contact: string;
  relationLabel: string;
  relationCount: number;
  location: string;
};

const roleColors: Record<Role, string> = {
  "Patient": "text-blue-600",
  "Sponsor": "text-green-600",
  "Nurse": "text-rose-500",
  "Nurse Admin": "text-rose-700",
};

export const UserCard: React.FC<UserCardProps> = ({
  name,
  avatarUrl,
  role,
  contact,
  relationLabel,
  relationCount,
  location,
}) => {
  const navigate = useNavigate();

  const handleRowClick = (id: string) => {
    if (role === "Nurse") {
      navigate(`/dashboard/users/nurse/${id}`);
    }
    else if (role === "Sponsor") {
      navigate(`/dashboard/users/sponsor/${id}`);
    }
    else if (role === "Patient") {
      navigate(`/dashboard/users/patient/${id}`);
    }
  };

  return (
    <div
      onClick={() => handleRowClick("hhhh")}
      className="cursor-pointer grid grid-cols-6 items-center gap-4 py-4 text-sm hover:bg-gray-50 transition-colors rounded-lg"
    >
      {/* Avatar & Name */}
      <div className="flex items-center gap-3 col-span-2">
        <img
          src={avatarUrl}
          alt={name}
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <p className="font-medium truncate">{name}</p>
          <div
            className={`flex items-center gap-1 ${roleColors[role]} text-xs`}
          >
            <PersonStanding className="w-3 h-3" />
            <span>{role}</span>
          </div>
        </div>
      </div>

      {/* Contact */}
      <div className="flex items-center gap-2 text-muted-foreground col-span-1">
        <Contact className="w-4 h-4" />
        <span>{contact}</span>
      </div>

      {/* Relationship */}
      <div className="flex items-center gap-2 text-muted-foreground col-span-1">
        <Users className="w-4 h-4" />
        <span>
          {relationCount}
          {" "}
          {relationLabel}
        </span>
      </div>

      {/* Location */}
      <div className="flex items-center gap-2 text-muted-foreground col-span-1">
        <Home className="w-4 h-4" />
        <span>{location}</span>
      </div>

      {/* Action */}
      <div
        className="flex justify-end col-span-1 px-2"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex items-center justify-center">
          <Button className="border border-gray-100 text-gray-700 hover:bg-gray-50">
            <MoreHorizontal />
          </Button>
        </div>
      </div>
    </div>
  );
};
