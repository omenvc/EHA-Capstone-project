type AppointmentCardProps = {
  appointment: Appointment;
  onClick: (appointment: Appointment) => void;
};

type Appointment = {
  id: string;
  patientName: string;
  patientAvatar: string;
  startTime: string;
  endTime: string;
  date: string;
  status: "selected" | "completed" | "scheduled" | "missed" | "cancelled";
};

export const AppointmentCard: React.FC<AppointmentCardProps> = ({ appointment, onClick }) => {
  const getStatusStyles = (status: string) => {
    switch (status) {
      case "selected":
        return "border-blue-500 bg-blue-50 ring-2 ring-blue-200";
      case "completed":
        return "border-green-500 bg-green-50";
      case "scheduled":
        return "border-yellow-500 bg-yellow-50";
      case "missed":
        return "border-red-500 bg-red-50";
      case "cancelled":
        return "border-gray-500 bg-gray-50";
      default:
        return "border-gray-300 bg-white";
    }
  };

  const getStatusDot = (status: string) => {
    switch (status) {
      case "selected":
        return "bg-blue-500";
      case "completed":
        return "bg-green-500";
      case "scheduled":
        return "bg-yellow-500";
      case "missed":
        return "bg-red-500";
      case "cancelled":
        return "bg-gray-500";
      default:
        return "bg-gray-400";
    }
  };

  return (
    <div
      className={`p-2 rounded-md border cursor-pointer transition-all hover:shadow-sm ${getStatusStyles(appointment.status)}`}
      onClick={() => onClick(appointment)}
    >
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 rounded-full bg-gray-600 flex items-center justify-center text-white text-xs font-medium">
          {appointment.patientAvatar}
        </div>
        <div className="flex-1 min-w-0">
          <div className="font-medium text-xs text-gray-900 truncate">
            {appointment.patientName}
          </div>
          <div className="text-xs text-gray-600">
            {appointment.startTime}
            {" "}
            -
            {appointment.endTime}
          </div>
        </div>
        <div className={`w-1.5 h-1.5 rounded-full ${getStatusDot(appointment.status)}`} />
      </div>
    </div>
  );
};
