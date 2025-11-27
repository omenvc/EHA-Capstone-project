import {
  Bell,
  Calendar,
  CheckCircle2,
  Menu,
  MessageSquare,
  UserPlus,
  X,
} from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type Notification = {
  id: number;
  type: "appointment" | "message" | "user" | "system";
  title: string;
  message: string;
  time: string;
  read: boolean;
  icon: React.ElementType;
};

export default function DashboardNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  // Sample notifications data
  const [notifications] = useState<Notification[]>([
    {
      id: 1,
      type: "appointment",
      title: "New Appointment Scheduled",
      message: "Musa Bojang has scheduled a home visit for tomorrow at 9 AM",
      time: "5 minutes ago",
      read: false,
      icon: Calendar,
    },
    {
      id: 2,
      type: "message",
      title: "New Message Received",
      message: "You have a new message from Fatou Jallow",
      time: "15 minutes ago",
      read: false,
      icon: MessageSquare,
    },
    {
      id: 3,
      type: "user",
      title: "New User Added",
      message: "A new sponsor has been added to the system",
      time: "1 hour ago",
      read: true,
      icon: UserPlus,
    },
    {
      id: 4,
      type: "appointment",
      title: "Appointment Reminder",
      message: "You have an appointment with Tapha Bojang in 2 hours",
      time: "2 hours ago",
      read: true,
      icon: Calendar,
    },
    {
      id: 5,
      type: "system",
      title: "System Update",
      message: "Your system has been updated successfully",
      time: "3 hours ago",
      read: true,
      icon: CheckCircle2,
    },
  ]);

  const unreadCount = notifications.filter(n => !n.read).length;

  const linkClasses = ({ isActive }: { isActive: boolean }) =>
    `cursor-pointer hover:text-black ${isActive ? "text-black font-semibold border-b-2 border-black" : "text-gray-700"
    }`;

  const navLinks = [
    { to: "/dashboard/home", label: "Home" },
    { to: "/dashboard/users", label: "Users" },
    { to: "/dashboard/patients", label: "Patients" },
    { to: "/dashboard/sponsors", label: "Sponsors" },
    { to: "/dashboard/appointments", label: "Appointments" },
    { to: "/dashboard/chats", label: "Chat" },
    { to: "/dashboard/settings", label: "Settings" },
  ];

  return (
    <nav className="flex items-center justify-between px-4 sm:px-6 py-4 bg-white shadow-sm">
      {/* Left Section: Logo + Navigation */}
      <div className="flex items-center space-x-4 sm:space-x-6 lg:space-x-10">
        <img
          src="/images/carelynk.png"
          alt="CareLynk Logo"
          className="h-10 sm:h-12 lg:h-14 w-auto"
        />

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex space-x-4 xl:space-x-6 text-sm font-medium">
          {navLinks.map(link => (
            <li key={link.to}>
              <NavLink to={link.to} className={linkClasses}>
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* Right Section: Notification + Profile + Mobile Menu */}
      <div className="flex items-center space-x-2 sm:space-x-4">
        <button
          type="button"
          title="Notifications"
          onClick={() => setNotificationsOpen(!notificationsOpen)}
          className="relative p-2 rounded-md border border-gray-100 hover:bg-gray-100 transition"
        >
          <Bell className="h-5 w-5 text-gray-600" />
          {unreadCount > 0 && (
            <span className="absolute top-0 right-0 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-semibold text-white">
              {unreadCount > 9 ? "9+" : unreadCount}
            </span>
          )}
        </button>

        {/* Desktop Profile */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="hidden sm:flex items-center space-x-2 rounded-xl px-2 py-1 border border-gray-100"
            >
              <Avatar className="h-8 w-8">
                <AvatarImage
                  src="/images/blank-profile-picture.webp"
                  alt="Lamin Kujabi"
                />
              </Avatar>
              <div className="text-left text-sm leading-tight">
                <p className="font-semibold text-gray-900">Lamin Kujabi</p>
                <p className="text-xs text-gray-500">Admin</p>
              </div>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-white">
            <DropdownMenuItem asChild className="cursor-pointer">
              <NavLink to="/dashboard/profile">Profile</NavLink>
            </DropdownMenuItem>
            <DropdownMenuItem
              className="bg-primary text-white cursor-pointer"
              asChild
            >
              <NavLink to="/login">Logout</NavLink>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Mobile Profile - Just Avatar */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="sm:hidden p-1 rounded-full border border-gray-100"
            >
              <Avatar className="h-8 w-8">
                <AvatarImage
                  src="/images/blank-profile-picture.webp"
                  alt="Lamin Kujabi"
                />
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-white">
            <DropdownMenuItem asChild className="cursor-pointer">
              <NavLink to="/dashboard/profile">Profile</NavLink>
            </DropdownMenuItem>
            <DropdownMenuItem
              className="bg-primary text-white cursor-pointer"
              asChild
            >
              <NavLink to="/login">Logout</NavLink>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-md border border-gray-100 hover:bg-gray-100 transition"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen
            ? <X className="h-5 w-5 text-gray-600" />
            : <Menu className="h-5 w-5 text-gray-600" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-18  right-0 bg-white border-t border-gray-200 w-[50%] shadow-lg lg:hidden z-50">
          <ul className="flex flex-col py-4">
            {navLinks.map(link => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `block px-6 py-3 text-sm font-medium ${
                      isActive
                        ? "text-black font-semibold bg-gray-50 border-l-4 border-black"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}

      {notificationsOpen && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setNotificationsOpen(false)}
          />
          {/* Slide Panel */}
          <div className="fixed top-0 right-0 h-full w-full sm:w-96 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out">
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-200">
                <div className="flex items-center gap-3">
                  <Bell className="h-5 w-5 text-gray-600" />
                  <h2 className="text-lg font-semibold">Notifications</h2>
                  {unreadCount > 0 && (
                    <span className="px-2 py-1 text-xs font-semibold text-white bg-red-500 rounded-full">
                      {unreadCount}
                      {" "}
                      new
                    </span>
                  )}
                </div>
                <button
                  type="button"
                  onClick={() => setNotificationsOpen(false)}
                  className="p-2 rounded-md hover:bg-gray-100 transition"
                  aria-label="Close notifications"
                >
                  <X className="h-5 w-5 text-gray-600" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto">
                {notifications.length === 0
                  ? (
                      <div className="flex flex-col items-center justify-center h-full text-gray-500">
                        <Bell className="h-12 w-12 mb-4 text-gray-300" />
                        <p className="text-sm">No notifications</p>
                      </div>
                    )
                  : (
                      <div className="divide-y divide-gray-100">
                        {notifications.map((notification) => {
                          const Icon = notification.icon;
                          return (
                            <div
                              key={notification.id}
                              className={`p-4 hover:bg-gray-50 transition cursor-pointer ${
                                !notification.read ? "bg-blue-50" : ""
                              }`}
                            >
                              <div className="flex gap-3">
                                <div
                                  className={`flex-shrink-0 h-max p-2 rounded-lg ${
                                    notification.type === "appointment"
                                      ? "bg-blue-100 text-blue-600"
                                      : notification.type === "message"
                                        ? "bg-green-100 text-green-600"
                                        : notification.type === "user"
                                          ? "bg-purple-100 text-purple-600"
                                          : "bg-gray-100 text-gray-600"
                                  }`}
                                >
                                  <Icon className="h-4 w-4" />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-start justify-between gap-2">
                                    <p
                                      className={`text-sm font-semibold ${
                                        !notification.read
                                          ? "text-gray-900"
                                          : "text-gray-700"
                                      }`}
                                    >
                                      {notification.title}
                                    </p>
                                    {!notification.read && (
                                      <span className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-1" />
                                    )}
                                  </div>
                                  <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                                    {notification.message}
                                  </p>
                                  <p className="text-xs text-gray-400 mt-2">
                                    {notification.time}
                                  </p>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    )}
              </div>

              {notifications.length > 0 && (
                <div className="p-4 border-t border-gray-200">
                  <Button
                    variant="outline"
                    className="w-full text-sm"
                    onClick={() => {
                      setNotificationsOpen(false);
                    }}
                  >
                    Mark all as read
                  </Button>
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </nav>
  );
}
