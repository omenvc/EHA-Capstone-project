import { Calendar, ChevronDown } from "lucide-react";
import { useState } from "react";

type DatePickerProps = {
  currentDate: Date;
  onDateChange: (date: Date) => void;
};

export const DatePicker: React.FC<DatePickerProps> = ({ currentDate, onDateChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedYear, setSelectedYear] = useState(currentDate.getFullYear());
  const [selectedMonth, setSelectedMonth] = useState(currentDate.getMonth());

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const years = Array.from({ length: 21 }, (_, i) => currentDate.getFullYear() - 10 + i);

  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (year: number, month: number) => {
    return new Date(year, month, 1).getDay();
  };

  const handleDateSelect = (day: number) => {
    const newDate = new Date(selectedYear, selectedMonth, day);
    onDateChange(newDate);
    setIsOpen(false);
  };

  const formatDisplayDate = () => {
    return currentDate.toLocaleDateString("en-US", {
      month: "long",
      year: "numeric",
    });
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
      >
        <Calendar className="w-4 h-4 text-gray-600" />
        <span className="font-medium">{formatDisplayDate()}</span>
        <ChevronDown className="w-4 h-4 text-gray-600" />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-50 min-w-80">
          <div className="p-4">
            <div className="flex gap-2 mb-4">
              <select
                value={selectedMonth}
                onChange={e => setSelectedMonth(Number.parseInt(e.target.value))}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-md text-sm"
              >
                {months.map((month, index) => (
                  <option key={index} value={index}>{month}</option>
                ))}
              </select>
              <select
                value={selectedYear}
                onChange={e => setSelectedYear(Number.parseInt(e.target.value))}
                className="px-3 py-2 border border-gray-300 rounded-md text-sm"
              >
                {years.map(year => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-7 gap-1">
              {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map(day => (
                <div key={day} className="p-2 text-center text-xs font-medium text-gray-500">
                  {day}
                </div>
              ))}

              {Array.from({ length: getFirstDayOfMonth(selectedYear, selectedMonth) }).map((_, index) => (
                <div key={`empty-${index}`} className="p-2"></div>
              ))}

              {Array.from({ length: getDaysInMonth(selectedYear, selectedMonth) }).map((_, index) => {
                const day = index + 1;
                const isSelected = currentDate.getDate() === day
                  && currentDate.getMonth() === selectedMonth
                  && currentDate.getFullYear() === selectedYear;
                const isToday = new Date().getDate() === day
                  && new Date().getMonth() === selectedMonth
                  && new Date().getFullYear() === selectedYear;

                return (
                  <button
                    key={day}
                    onClick={() => handleDateSelect(day)}
                    className={`p-2 text-sm rounded-md hover:bg-blue-50 transition-colors ${
                      isSelected
                        ? "bg-blue-600 text-white"
                        : isToday
                          ? "bg-blue-100 text-blue-600 font-medium"
                          : "text-gray-700"
                    }`}
                  >
                    {day}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
