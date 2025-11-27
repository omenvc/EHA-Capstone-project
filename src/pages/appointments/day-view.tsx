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

export const DayView: React.FC<{
  currentDate: Date;
  appointments: Appointment[];
  onAppointmentClick: (appointment: Appointment) => void;
}> = ({ currentDate, appointments, onAppointmentClick }) => {
  const timeSlots = Array.from({ length: 24 }, (_, i) => {
    const hour = i;
    const displayHour = hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;
    const ampm = hour < 12 ? "AM" : "PM";
    return {
      hour,
      display: `${displayHour.toString().padStart(2, "0")}:00 ${ampm}`,
      key: `${hour.toString().padStart(2, "0")}:00`,
    };
  });

  const getAppointmentsForHour = (hour: number) => {
    const dateStr = currentDate.toISOString().split("T")[0];
    return appointments.filter((apt) => {
      const aptHour = Number.parseInt(apt.startTime.split(":")[0]);
      return apt.date === dateStr && aptHour === hour;
    });
  };

  return (
    <div className="flex-1 overflow-hidden">
      <div className="overflow-y-auto h-full">
        {timeSlots.map(timeSlot => (
          <div key={timeSlot.hour} className="flex border-b border-gray-200 min-h-16">
            <div className="w-20 p-3 text-right border-r border-gray-200 bg-gray-50">
              <span className="text-xs text-gray-500 font-medium">{timeSlot.display}</span>
            </div>
            <div className="flex-1 p-2 bg-white relative">
              <div className="space-y-1">
                {getAppointmentsForHour(timeSlot.hour).map(appointment => (
                  <AppointmentCard
                    key={appointment.id}
                    appointment={appointment}
                    onClick={onAppointmentClick}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
