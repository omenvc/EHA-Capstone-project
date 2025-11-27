import { faker } from "@faker-js/faker";
import { Bell, Search } from "lucide-react";
import { useState } from "react";

import { ChatInput } from "./chat-input";

type Sender = "me" | "patient";

type PatientMessage = {
  text?: string;
  sender: Sender;
  file?: File;
  audio?: { url: string };
};

type Patient = {
  id: number;
  name: string;
  avatar: string;
  messages: PatientMessage[];
  typing?: boolean;
  unread?: number;
};

type MessageType = "text" | "file" | "audio";

type Message = {
  id: string;
  type: MessageType;
  content: string | File | Blob;
};

const patients: Patient[] = [
  {
    id: 1,
    name: "Muhammed Bojang",
    avatar: faker.image.avatar(),
    messages: [
      { text: "Hello, I’m not doing so well today.", sender: "patient" },
      { text: "Can you guys come do a quick checkup?", sender: "patient" },
      { text: "Sure, I will be there to take a look. What issues are you having?", sender: "me" },
      { text: "I have a fever and my muscles have been aching for 2 days now.", sender: "patient" },
      { text: "Also, I am out of medication, could you please come by to take a look?", sender: "patient" },
      { text: "Okay I will be there by 3pm!", sender: "me" },
    ],
    typing: false,
    unread: 2,
  },
  { id: 2, name: "Fatou Camara", avatar: faker.image.avatar(), typing: true, messages: [], unread: 0 },
  { id: 3, name: "Modou Tunkara", avatar: faker.image.avatar(), messages: [{ text: "How are you doing?", sender: "patient" }], unread: 1 },
  { id: 4, name: "Dauda Badjie", avatar: faker.image.avatar(), messages: [{ text: "Are you feeling okay?", sender: "patient" }], unread: 0 },
  { id: 5, name: "Aminata Badjie", avatar: faker.image.avatar(), messages: [{ text: "Hi, I need some help please.", sender: "patient" }], unread: 0 },
  { id: 6, name: "Ousman Jaiteh", avatar: faker.image.avatar(), messages: [{ text: "How are you doing?", sender: "patient" }], unread: 3 },
];

export default function PatientChat() {
  const [activeId, setActiveId] = useState<number>(1);
  const [messages, setMessages] = useState<Message[]>([]);
  const activePatient = patients.find(p => p.id === activeId);

  const addMessage = (type: MessageType, content: string | File | Blob) => {
    setMessages(prev => [
      ...prev,
      {
        id: Date.now().toString(),
        type,
        content,
      },
    ]);
  };

  if (!activePatient)
    return <div>No active patient found</div>;

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-gray-100 bg-white">
        <div className="flex items-center gap-2 bg-gray-100 rounded-md px-2 py-1">
          <Search className="w-5 h-5 text-gray-500" />
          <input
            type="text"
            placeholder="Search for patients"
            className="text-sm px-2 py-1 outline-none rounded-md focus:outline-none focus:ring-1 focus:ring-blue-400"
          />
        </div>
        <Bell className="w-5 h-5 text-gray-500" />
      </div>

      <div className="flex h-[700px] font-sans">
        {/* Sidebar */}
        <div className="w-1/3 border-r border-gray-100 bg-white p-4 overflow-y-auto">
          <h1 className="text-2xl font-bold mb-4">All Client Messages</h1>
          <div className="space-y-2">
            {patients.map(patient => (
              <div
                key={patient.id}
                onClick={() => setActiveId(patient.id)}
                className={`relative cursor-pointer p-2 rounded-md hover:bg-gray-100 flex items-start gap-3 ${activeId === patient.id ? "bg-gray-100" : ""
                }`}
              >
                <img src={patient.avatar} alt={patient.name} className="w-10 h-10 rounded-full" />
                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <p className="font-semibold text-sm">{patient.name}</p>
                    <span className="text-xs text-gray-400">11:03 AM</span>
                  </div>
                  <p className="text-sm text-gray-500 truncate">
                    {patient.typing
                      ? "Typing..."
                      : patient.messages[patient.messages.length - 1]?.text || "..."}
                  </p>
                </div>
                {patient.unread && patient.unread !== 0 && (
                  <span className="absolute right-1 bottom-2 text-xs text-white bg-blue-600 px-2 py-0.5 rounded-full">
                    {patient.unread}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Chat Window */}
        <div className="flex-1 flex flex-col justify-between bg-gray-50">
          {/* Chat Messages */}
          <div className="p-4 space-y-2 overflow-y-auto h-full">
            <p className="text-center text-xs text-gray-400 mb-4">Today, 11:03 AM</p>
            {activePatient.messages.map((msg, i) => (
              <div
                key={i}
                className={`max-w-[75%] px-4 py-2 break-words ${msg.sender === "me"
                  ? "bg-blue-600 text-white self-end ml-auto rounded-tl-lg rounded-bl-lg rounded-tr-lg"
                  : "bg-gray-200 text-black rounded-tr-lg rounded-br-lg rounded-tl-lg"
                } text-sm`}
              >
                {msg.text && <span>{msg.text}</span>}

                {msg.file && (() => {
                  const url = URL.createObjectURL(msg.file);
                  const fileType = msg.file.type;

                  if (fileType.startsWith("image/")) {
                    return <img src={url} alt="uploaded" className="max-w-xs rounded-lg mt-1" />;
                  }

                  if (fileType === "application/pdf") {
                    return (
                      <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline text-blue-100 mt-1 block"
                      >
                        📄 View PDF:
                        {" "}
                        {msg.file.name}
                      </a>
                    );
                  }

                  if (
                    fileType === "application/msword"
                    || fileType === "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                  ) {
                    return (
                      <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline text-blue-100 mt-1 block"
                      >
                        📝 View Document:
                        {" "}
                        {msg.file.name}
                      </a>
                    );
                  }

                  return (
                    <a
                      href={url}
                      download={msg.file.name}
                      className="underline text-blue-100 mt-1 block"
                    >
                      📎 Download File:
                      {" "}
                      {msg.file.name}
                    </a>
                  );
                })()}

                {msg.audio && <audio controls src={msg.audio.url} />}
              </div>
            ))}
          </div>

          {/* Message Input */}
          <ChatInput
            onSendText={(text: string) => addMessage("text", text)}
            onSendFile={(file: File) => addMessage("file", file)}
            onSendAudio={(audioBlob: Blob) => addMessage("audio", audioBlob)}
          />
        </div>
      </div>
    </div>
  );
}
