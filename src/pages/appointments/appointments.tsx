import { ChevronRight, Plus } from "lucide-react";
import { useState } from "react";

import AppointmentModal from "./appointment-modal";
import { DatePicker } from "./date-picker";
import { DayView } from "./day-view";
import { MonthView } from "./month-view";
import { WeekView } from "./week-view";

type Appointment = {
  id: string;
  patientName: string;
  patientAvatar: string;
  patientImage?: string;
  ehrId?: string;
  type?: string;
  subscription?: string;
  location?: string;
  locationUrl?: string;
  createdBy?: string;
  createdByUrl?: string;
  sponsors?: Array<{ name: string; url: string }>;
  notes?: string;
  assessment?: string[];
  createdAt?: string;
  updatedAt?: string;
  startTime: string;
  endTime: string;
  date: string;
  status: "selected" | "completed" | "scheduled" | "missed" | "cancelled";
};

const sampleAppointments: Appointment[] = [
  {
    id: "1",
    patientName: "Modou Senghore",
    patientAvatar: "MS",
    patientImage: "/avatars/modou.jpg",
    ehrId: "EHR-001",
    type: "Home Visit",
    subscription: "Premium Plan",
    startTime: "09:00",
    endTime: "10:00",
    date: "2025-08-01",
    location: "Banjul Clinic",
    locationUrl: "https://maps.example.com/banjul-clinic",
    createdBy: "Dr. Sowe",
    createdByUrl: "/staff/dr-sowe",
    sponsors: [{ name: "HealthCorp", url: "/sponsor/healthcorp" }],
    notes: "Initial check-up scheduled.",
    assessment: ["Vitals check", "Blood pressure measurement"],
    createdAt: "2025-07-15 08:00",
    updatedAt: "2025-07-20 10:30",
    status: "scheduled",
  },
  {
    id: "2",
    patientName: "Aisha Touray",
    patientAvatar: "AT",
    patientImage: "/avatars/aisha.jpg",
    ehrId: "EHR-002",
    type: "Clinic Visit",
    subscription: "Standard Plan",
    startTime: "11:00",
    endTime: "11:30",
    date: "2025-08-02",
    location: "Serekunda Health Center",
    locationUrl: "https://maps.example.com/serekunda-health-center",
    createdBy: "Dr. Jatta",
    createdByUrl: "/staff/dr-jatta",
    sponsors: [{ name: "MediCare", url: "/sponsor/medicare" }],
    notes: "Follow-up for post-surgery recovery.",
    assessment: ["Wound inspection", "Dressing change"],
    createdAt: "2025-07-18 09:20",
    updatedAt: "2025-07-21 14:05",
    status: "completed",
  },
  {
    id: "3",
    patientName: "Lamin Ceesay",
    patientAvatar: "LC",
    patientImage: "/avatars/lamin.jpg",
    ehrId: "EHR-003",
    type: "Teleconsultation",
    subscription: "Premium Plan",
    startTime: "14:00",
    endTime: "14:45",
    date: "2025-08-03",
    location: "Online",
    locationUrl: "https://telemed.example.com/lamin",
    createdBy: "Dr. Bah",
    createdByUrl: "/staff/dr-bah",
    sponsors: [],
    notes: "Discuss lab test results.",
    assessment: ["Review blood work", "Adjust medication dosage"],
    createdAt: "2025-07-19 10:15",
    updatedAt: "2025-07-22 12:40",
    status: "selected",
  },
  {
    id: "4",
    patientName: "Fatou Cham",
    patientAvatar: "FC",
    patientImage: "/avatars/fatou.jpg",
    ehrId: "EHR-004",
    type: "Clinic Visit",
    subscription: "Basic Plan",
    startTime: "08:30",
    endTime: "09:00",
    date: "2025-08-04",
    location: "Kanifing General Hospital",
    locationUrl: "https://maps.example.com/kanifing-general",
    createdBy: "Dr. Conteh",
    createdByUrl: "/staff/dr-conteh",
    sponsors: [{ name: "WellnessFund", url: "/sponsor/wellnessfund" }],
    notes: "Routine prenatal check-up.",
    assessment: ["Ultrasound", "Blood pressure measurement"],
    createdAt: "2025-07-20 07:50",
    updatedAt: "2025-07-23 09:10",
    status: "scheduled",
  },
  {
    id: "5",
    patientName: "Ebrima Njie",
    patientAvatar: "EN",
    patientImage: "/avatars/ebrima.jpg",
    ehrId: "EHR-005",
    type: "Home Visit",
    subscription: "Standard Plan",
    startTime: "16:00",
    endTime: "16:30",
    date: "2025-08-05",
    location: "Brikama, West Coast Region",
    locationUrl: "https://maps.example.com/brikama",
    createdBy: "Dr. Faal",
    createdByUrl: "/staff/dr-faal",
    sponsors: [],
    notes: "Chronic asthma management follow-up.",
    assessment: ["Check inhaler use", "Measure lung capacity"],
    createdAt: "2025-07-21 15:40",
    updatedAt: "2025-07-25 11:20",
    status: "missed",
  },
  {
    id: "6",
    patientName: "Mariama Jobe",
    patientAvatar: "MJ",
    patientImage: "/avatars/mariama.jpg",
    ehrId: "EHR-006",
    type: "Teleconsultation",
    subscription: "Premium Plan",
    startTime: "10:00",
    endTime: "10:20",
    date: "2025-08-06",
    location: "Online",
    locationUrl: "https://telemed.example.com/mariama",
    createdBy: "Dr. Camara",
    createdByUrl: "/staff/dr-camara",
    sponsors: [{ name: "CarePlus", url: "/sponsor/careplus" }],
    notes: "Discuss mental health therapy progress.",
    assessment: ["Review progress notes", "Plan next session"],
    createdAt: "2025-07-22 09:10",
    updatedAt: "2025-07-26 13:00",
    status: "completed",
  },
  {
    id: "7",
    patientName: "Ousman Darboe",
    patientAvatar: "OD",
    patientImage: "/avatars/ousman.jpg",
    ehrId: "EHR-007",
    type: "Clinic Visit",
    subscription: "Basic Plan",
    startTime: "13:00",
    endTime: "13:20",
    date: "2025-08-07",
    location: "Bundung Maternal and Child Health Hospital",
    locationUrl: "https://maps.example.com/bundung-hospital",
    createdBy: "Dr. Touray",
    createdByUrl: "/staff/dr-touray",
    sponsors: [],
    notes: "Child vaccination follow-up.",
    assessment: ["Check vaccination card", "Administer polio vaccine"],
    createdAt: "2025-07-23 12:00",
    updatedAt: "2025-07-27 15:30",
    status: "scheduled",
  },
  {
    id: "8",
    patientName: "Isatou Kinteh",
    patientAvatar: "IK",
    patientImage: "/avatars/isatou.jpg",
    ehrId: "EHR-008",
    type: "Home Visit",
    subscription: "Standard Plan",
    startTime: "15:30",
    endTime: "16:00",
    date: "2025-08-08",
    location: "Bakau New Town",
    locationUrl: "https://maps.example.com/bakau-new-town",
    createdBy: "Dr. Sowe",
    createdByUrl: "/staff/dr-sowe",
    sponsors: [{ name: "HealthAid", url: "/sponsor/healthaid" }],
    notes: "Postnatal check-up.",
    assessment: ["Check mother’s vitals", "Assess infant growth"],
    createdAt: "2025-07-24 14:25",
    updatedAt: "2025-07-28 09:50",
    status: "cancelled",
  },
];

function AppointmentCalendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [viewMode, setViewMode] = useState<"Day" | "Week" | "Month">("Week");
  const [selectedAppointment, setSelectedAppointment] = useState<Appointment | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleAppointmentClick = (appointment: Appointment) => {
    setSelectedAppointment(appointment);
    setModalOpen(true);
  };

  const renderCalendarView = () => {
    switch (viewMode) {
      case "Day":
        return (
          <DayView
            currentDate={currentDate}
            appointments={sampleAppointments}
            onAppointmentClick={handleAppointmentClick}
          />
        );
      case "Week":
        return (
          <WeekView
            currentDate={currentDate}
            appointments={sampleAppointments}
            onAppointmentClick={handleAppointmentClick}
          />
        );
      case "Month":
        return (
          <MonthView
            currentDate={currentDate}
            appointments={sampleAppointments}
            onAppointmentClick={handleAppointmentClick}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex h-auto flex-col bg-slate-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-slate-800">Appointments</h1>
            <div className="flex items-center text-sm text-gray-600 mt-1">
              <span>Appointments</span>
              <ChevronRight className="w-4 h-4 mx-1" />
              <span className="text-blue-600">Calendar</span>
            </div>
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition-colors">
            <Plus className="w-4 h-4" />
            New Appointment
          </button>
        </div>
      </div>

      {/* Calendar Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">Calendar</h2>
            <p className="text-sm text-gray-600">Manage and track your patient appointments</p>
          </div>
        </div>

        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-4">
            <DatePicker currentDate={currentDate} onDateChange={setCurrentDate} />

            {/* View Mode Buttons */}
            <div className="flex bg-gray-100 rounded-lg p-1">
              {(["Day", "Week", "Month"] as const).map(mode => (
                <button
                  key={mode}
                  onClick={() => setViewMode(mode)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${viewMode === mode
                    ? "bg-white text-gray-900 shadow-sm"
                    : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {mode}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-6">
            {/* Legend */}
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                <span>Selected</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span>Completed</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <span>Scheduled</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <span>Missed</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-gray-500"></div>
                <span>Cancelled</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Calendar Content */}
      {renderCalendarView()}

      {/* Selected Appointment Info */}
      {selectedAppointment && (
        <AppointmentModal
          open={modalOpen}
          onClose={() => setModalOpen(false)}
          appointment={selectedAppointment}
        />
      )}
    </div>
  );
}

export default AppointmentCalendar;
