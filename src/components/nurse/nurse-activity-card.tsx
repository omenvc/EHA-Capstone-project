import { Calendar, Goal, UserPlus } from "lucide-react";
// components/NurseActivityCard.tsx
import React from "react";

import { Card } from "@/components/ui/card";

type NurseActivityProps = {
  day?: string;
  date?: string;
  action: string;
  userName: string;
  detail: string;
};

const NurseActivityCard: React.FC<{ activity: NurseActivityProps }> = ({ activity }) => {
  return (
    <div className="flex flex-col gap-10">
      <span className="flex gap-5">
        <p className="text-xl">{activity.day}</p>
        <p className="text-xl font-semibold">{activity.date}</p>
      </span>
      <div className="flex justify-start gap-5">
        <Goal />
        <Card className="w-[75%]">
          <div className="flex px-4 justify-between">
            <div>
              <p>{activity.action}</p>
              <p>{activity.userName}</p>
              <p className="flex text-zinc-600 text-[10px]">
                <Calendar className="w-4 h-4" />
                {activity.detail}
              </p>
            </div>
            <span className="rounded-full bg-black text-[#fff] p-2 h-fit">
              <UserPlus className="w-4 h-4 sm:w-6 sm:h-6" />
            </span>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default NurseActivityCard;
