type Appointment = {
  id: string;
  patientName: string;
  patientAvatar: string;
  startTime: string;
  endTime: string;
  date: string;
  status: "selected" | "completed" | "scheduled" | "missed" | "cancelled";
};
export const MonthView: React.FC<{
  currentDate: Date;
  appointments: Appointment[];
  onAppointmentClick: (appointment: Appointment) => void;
}> = ({ currentDate, appointments, onAppointmentClick }) => {
  const getDaysInMonth = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days = [];

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }

    // Add all days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(new Date(year, month, day));
    }

    return days;
  };

  const getAppointmentsForDate = (date: Date | null) => {
    if (!date)
      return [];
    const dateStr = date.toISOString().split("T")[0];
    return appointments.filter(apt => apt.date === dateStr);
  };

  const isToday = (date: Date | null) => {
    if (!date)
      return false;
    const today = new Date();
    return date.toDateString() === today.toDateString();
  };

  const days = getDaysInMonth();

  return (
    <div className="flex-1 overflow-hidden">
      {/* Days of week header */}
      <div className="grid grid-cols-7 border-b border-gray-200 bg-gray-50">
        {["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"].map(day => (
          <div key={day} className="p-3 text-center text-sm font-medium text-gray-600 border-r border-gray-200">
            {day}
          </div>
        ))}
      </div>

      {/* Calendar grid */}
      <div className="grid grid-cols-7 flex-1">
        {days.map((date, index) => (
          <div key={index} className="border-r border-b border-gray-200 bg-white min-h-32 p-2">
            {date && (
              <>
                <div className={`text-sm font-medium mb-2 ${isToday(date) ? "text-blue-600" : "text-gray-900"}`}>
                  {date.getDate()}
                </div>
                <div className="space-y-1">
                  {getAppointmentsForDate(date).slice(0, 3).map((appointment) => {
                    const getStatusMonthStyles = (status: string) => {
                      switch (status) {
                        case "selected":
                          return "bg-blue-100 text-blue-800 hover:bg-blue-200";
                        case "completed":
                          return "bg-green-100 text-green-800 hover:bg-green-200";
                        case "scheduled":
                          return "bg-yellow-100 text-yellow-800 hover:bg-yellow-200";
                        case "missed":
                          return "bg-red-100 text-red-800 hover:bg-red-200";
                        case "cancelled":
                          return "bg-gray-100 text-gray-800 hover:bg-gray-200";
                        default:
                          return "bg-blue-100 text-blue-800 hover:bg-blue-200";
                      }
                    };

                    return (
                      <div
                        key={appointment.id}
                        className={`text-xs p-1 rounded cursor-pointer transition-colors truncate ${getStatusMonthStyles(appointment.status)}`}
                        onClick={() => onAppointmentClick(appointment)}
                      >
                        {appointment.startTime}
                        {" "}
                        {appointment.patientName}
                      </div>
                    );
                  })}
                  {getAppointmentsForDate(date).length > 3 && (
                    <div className="text-xs text-gray-500">
                      +
                      {getAppointmentsForDate(date).length - 3}
                      {" "}
                      more
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
