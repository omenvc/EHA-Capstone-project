"use client";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@radix-ui/react-tabs";
import React from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

type AppointmentModalProps = {
  open: boolean;
  onClose: () => void;
  appointment: any;
};

const AppointmentModal: React.FC<AppointmentModalProps> = ({
  open,
  onClose,
  appointment,
}) => {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-lg font-semibold">
            Appointment ID
            {" "}
            <span className="bg-gray-100 p-2 rounded">
              #
              {appointment.id}
            </span>
          </DialogTitle>
        </DialogHeader>

        <Tabs defaultValue="details">
          {/* Tab headers */}
          <TabsList className="grid grid-cols-2 w-full mb-4 bg-gray-100 rounded-md p-1">
            <TabsTrigger
              value="details"
              className="px-4 py-2 text-sm font-medium rounded-md
            data-[state=active]:bg-white
            data-[state=active]:text-gray-900
            data-[state=active]:shadow"
            >
              Details
            </TabsTrigger>
            <TabsTrigger
              value="assessment"
              className="px-4 py-2 text-sm font-medium rounded-md
            data-[state=active]:bg-white
            data-[state=active]:text-gray-900
            data-[state=active]:shadow"
            >
              Assessment
            </TabsTrigger>
          </TabsList>

          {/* DETAILS TAB */}
          <TabsContent value="details">

            {/* Patient Header */}
            <div className="flex items-center justify-between mt-4 mb-4">
              <div className="flex items-center gap-3">
                <img
                  src="/images/blank-profile-picture.webp"
                  alt={appointment.patientName}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h2 className="text-xl font-semibold">{appointment.patientName}</h2>
                  <p className="text-sm text-gray-500">
                    EHR ID
                    {" "}
                    {appointment.ehrId}
                  </p>
                </div>
              </div>
              <span className="text-white bg-blue-600 px-3 py-1 rounded-md text-sm">
                Not yet completed
              </span>
            </div>

            <hr className="border-gray-200" />
            {/* Details Grid */}
            <div className="grid grid-cols-2 md:grid-cols-2 gap-4 mt-6 text-sm">
              <div>
                <p className="text-gray-500">Appointment Type</p>
                <p className="font-medium">{appointment.type}</p>
              </div>
              <div>
                <p className="text-gray-500">Subscription</p>
                <p className="bg-gray-100 inline-block px-2 py-0.5 rounded text-xs font-medium">
                  {appointment.subscription}
                </p>
              </div>
              <div>
                <p className="text-gray-500">Date</p>
                <p className="font-medium">{appointment.date}</p>
              </div>
              <div>
                <p className="text-gray-500">Start Time</p>
                <p className="font-medium">{appointment.startTime}</p>
              </div>
              <div>
                <p className="text-gray-500">End Time</p>
                <p className="font-medium">{appointment.endTime}</p>
              </div>
              <div>
                <p className="text-gray-500">Location</p>
                <a
                  href={appointment.locationUrl}
                  className="text-blue-600 hover:underline"
                >
                  {appointment.location}
                </a>
              </div>
              <div>
                <p className="text-gray-500">Created by</p>
                <a
                  href={appointment.createdByUrl}
                  className="text-blue-600 hover:underline"
                >
                  {appointment.createdBy}
                </a>
              </div>
              <div>
                <p className="text-gray-500">Sponsors</p>
                <div className="flex flex-col">
                  {appointment.sponsors.map((sponsor: any) => (
                    <a
                      key={sponsor.name}
                      href={sponsor.url}
                      className="text-blue-600 hover:underline"
                    >
                      {sponsor.name}
                    </a>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-gray-500">Status</p>
                <select
                  value={appointment.status}
                  className="border rounded px-2 py-1 text-sm"
                >
                  <option>Scheduled</option>
                  <option>Completed</option>
                  <option>Cancelled</option>
                </select>
              </div>
            </div>

            {/* Notes */}
            <div className="mt-6 border-2 border-gray-200 rounded-md p-4 bg-gray-50">
              <p className="font-semibold">Notes</p>
              <p className="mt-2 text-sm">
                <span className="font-medium">
                  Admin:
                  {appointment.createdBy}
                </span>
                {" "}
                <p>Please ensure you have all the necessary supplies for Ebrima Jassey home visit. She mentioned needing assistance with her medication schedule.</p>
              </p>
            </div>

            {/* Timestamps */}
            <div className="mt-4 text-xs text-gray-500">
              Created at:
              {" "}
              {appointment.createdAt}
              <br />
              Last Updated:
              {" "}
              {appointment.updatedAt}
            </div>

            {/* Buttons */}
            <div className="flex justify-end mt-4 gap-2">
              <Button variant="outline">Reschedule</Button>
              <Button variant="primary">Save Changes</Button>
            </div>
          </TabsContent>

          {/* ASSESSMENT TAB */}
          <TabsContent value="assessment">

            <h3 className="text-lg font-semibold mt-4 mb-4">
              Assessment for Home Visit
            </h3>
            <ul className="list-disc list-inside space-y-2 text-sm">
              {appointment.assessment.map((item: string, idx: number) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>

            {/* Timestamps */}
            <div className="mt-6 text-xs text-gray-500">
              Created at:
              {" "}
              {appointment.createdAt}
              <br />
              Last Updated by
              {" "}
              <span className="text-blue-600">{appointment.createdBy}</span>
              {" "}
              at
              {" "}
              {appointment.updatedAt}
            </div>

            {/* Buttons */}
            <div className="flex justify-end mt-4 gap-2">
              <Button variant="outline">Reschedule</Button>
              <Button variant="primary">Save Changes</Button>
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

export default AppointmentModal;
