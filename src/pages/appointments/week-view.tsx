import { useMemo } from "react";

import { AppointmentCard } from "./appointment-card";

type Appointment = {
  id: string;
  patientName: string;
  patientAvatar: string;
  startTime: string;
  endTime: string;
  date: string;
  status: "selected" | "completed" | "scheduled" | "missed" | "cancelled";
};

export const WeekView: React.FC<{
  currentDate: Date;
  appointments: Appointment[];
  onAppointmentClick: (appointment: Appointment) => void;
}> = ({ currentDate, appointments, onAppointmentClick }) => {
  const weekDays = useMemo(() => {
    const startOfWeek = new Date(currentDate);
    const day = startOfWeek.getDay();
    const diff = startOfWeek.getDate() - day;
    startOfWeek.setDate(diff);

    return Array.from({ length: 7 }, (_, i) => {
      const date = new Date(startOfWeek);
      date.setDate(startOfWeek.getDate() + i);
      return date;
    });
  }, [currentDate]);

  const timeSlots = Array.from({ length: 24 }, (_, i) => {
    const hour = i;
    const displayHour = hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;
    const ampm = hour < 12 ? "AM" : "PM";
    return {
      hour,
      display: `${displayHour.toString().padStart(2, "0")}:00 ${ampm}`,
    };
  });

  const getAppointmentsForDateAndTime = (date: Date, hour: number) => {
    const dateStr = date.toISOString().split("T")[0];
    return appointments.filter((apt) => {
      const aptHour = Number.parseInt(apt.startTime.split(":")[0]);
      return apt.date === dateStr && aptHour === hour;
    });
  };

  const getDayName = (date: Date) => {
    return date.toLocaleDateString("en-US", { weekday: "short" });
  };

  const isToday = (date: Date) => {
    const today = new Date();
    return date.toDateString() === today.toDateString();
  };

  return (
    <div className="flex-1 overflow-hidden">
      {/* Header */}
      <div className="grid grid-cols-8 border-b border-gray-200 bg-white sticky top-0 z-10">
        <div className="p-3 border-r border-gray-200 bg-gray-50"></div>
        {weekDays.map((date, index) => (
          <div key={index} className="p-3 border-r border-gray-200 text-center bg-white">
            <div className="text-xs font-medium text-gray-600 uppercase">
              {getDayName(date)}
            </div>
            <div className={`text-lg font-semibold mt-1 ${isToday(date) ? "text-blue-600" : "text-gray-900"}`}>
              {date.getDate()}
            </div>
          </div>
        ))}
      </div>

      {/* Time slots and appointments */}
      <div className="overflow-y-auto h-full">
        {timeSlots.map(timeSlot => (
          <div key={timeSlot.hour} className="grid grid-cols-8 border-b border-gray-200 min-h-16">
            <div className="p-3 border-r border-gray-200 text-right bg-gray-50">
              <span className="text-xs text-gray-500 font-medium">{timeSlot.display}</span>
            </div>
            {weekDays.map((date, dayIndex) => (
              <div key={dayIndex} className="p-1 border-r border-gray-200 bg-white relative">
                <div className="space-y-1">
                  {getAppointmentsForDateAndTime(date, timeSlot.hour).map(appointment => (
                    <AppointmentCard
                      key={appointment.id}
                      appointment={appointment}
                      onClick={onAppointmentClick}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
