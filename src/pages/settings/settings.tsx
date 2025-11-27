import { Bell, Database, Globe, Lock, Mail, Moon, Shield, User } from "lucide-react";
import { useState } from "react";

import DashboardHeader from "@/components/dashboard/page-header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function SettingsPage() {
  const [notifications, setNotifications] = useState({
    email: true,
    push: false,
    sms: true,
  });

  const [preferences, setPreferences] = useState({
    language: "en",
    timezone: "UTC",
    theme: "light",
  });

  return (
    <div className="space-y-6">
      <DashboardHeader
        title="Settings"
        breadcrumbs={[
          { label: "Home", href: "/dashboard/home" },
          { label: "Settings" },
        ]}
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Settings Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Account Settings */}
          <Card className="p-6 bg-white">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-blue-100 rounded-lg">
                <User className="h-5 w-5 text-blue-600" />
              </div>
              <h2 className="text-xl font-semibold">Account Settings</h2>
            </div>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    First Name
                  </label>
                  <Input placeholder="Enter first name" defaultValue="Lamin" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Last Name
                  </label>
                  <Input placeholder="Enter last name" defaultValue="Kujabi" />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Email</label>
                <Input
                  type="email"
                  placeholder="Enter email"
                  defaultValue="lamin.kujabi@example.com"
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Phone</label>
                <Input
                  type="tel"
                  placeholder="Enter phone number"
                  defaultValue="+220 123 4567"
                />
              </div>
              <div className="flex justify-end pt-4">
                <Button className="bg-blue-600 text-white">Save Changes</Button>
              </div>
            </div>
          </Card>

          {/* Security Settings */}
          <Card className="p-6 bg-white">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-red-100 rounded-lg">
                <Lock className="h-5 w-5 text-red-600" />
              </div>
              <h2 className="text-xl font-semibold">Security</h2>
            </div>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-2 block">
                  Current Password
                </label>
                <Input type="password" placeholder="Enter current password" />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">
                  New Password
                </label>
                <Input type="password" placeholder="Enter new password" />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">
                  Confirm New Password
                </label>
                <Input
                  type="password"
                  placeholder="Confirm new password"
                />
              </div>
              <div className="flex justify-end pt-4">
                <Button className="bg-blue-600 text-white">
                  Update Password
                </Button>
              </div>
            </div>
          </Card>

          {/* Notifications */}
          <Card className="p-6 bg-white">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-yellow-100 rounded-lg">
                <Bell className="h-5 w-5 text-yellow-600" />
              </div>
              <h2 className="text-xl font-semibold">Notifications</h2>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Email Notifications</p>
                  <p className="text-sm text-muted-foreground">
                    Receive notifications via email
                  </p>
                </div>
                <Checkbox
                  checked={notifications.email}
                  onCheckedChange={checked =>
                    setNotifications({ ...notifications, email: !!checked })
                  }
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Push Notifications</p>
                  <p className="text-sm text-muted-foreground">
                    Receive push notifications
                  </p>
                </div>
                <Checkbox
                  checked={notifications.push}
                  onCheckedChange={checked =>
                    setNotifications({ ...notifications, push: !!checked })
                  }
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">SMS Notifications</p>
                  <p className="text-sm text-muted-foreground">
                    Receive notifications via SMS
                  </p>
                </div>
                <Checkbox
                  checked={notifications.sms}
                  onCheckedChange={checked =>
                    setNotifications({ ...notifications, sms: !!checked })
                  }
                />
              </div>
            </div>
          </Card>

          {/* Preferences */}
          <Card className="p-6 bg-white">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Moon className="h-5 w-5 text-purple-600" />
              </div>
              <h2 className="text-xl font-semibold">Preferences</h2>
            </div>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Language</label>
                <Select
                  value={preferences.language}
                  onValueChange={value =>
                    setPreferences({ ...preferences, language: value })
                  }
                >
                  <SelectTrigger className="w-full">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="fr">French</SelectItem>
                    <SelectItem value="es">Spanish</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Timezone</label>
                <Select
                  value={preferences.timezone}
                  onValueChange={value =>
                    setPreferences({ ...preferences, timezone: value })
                  }
                >
                  <SelectTrigger className="w-full">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="UTC">UTC</SelectItem>
                    <SelectItem value="EST">Eastern Standard Time</SelectItem>
                    <SelectItem value="PST">Pacific Standard Time</SelectItem>
                    <SelectItem value="GMT">Greenwich Mean Time</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Theme</label>
                <Select
                  value={preferences.theme}
                  onValueChange={value =>
                    setPreferences({ ...preferences, theme: value })
                  }
                >
                  <SelectTrigger className="w-full">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="auto">Auto</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Quick Actions */}
          <Card className="p-6 bg-white">
            <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <Button
                variant="outline"
                className="w-full justify-start"
                onClick={() => window.location.href = "/dashboard/profile"}
              >
                <User className="mr-2 h-4 w-4" />
                View Profile
              </Button>
              <Button
                variant="outline"
                className="w-full justify-start"
              >
                <Database className="mr-2 h-4 w-4" />
                Export Data
              </Button>
              <Button
                variant="outline"
                className="w-full justify-start"
              >
                <Shield className="mr-2 h-4 w-4" />
                Privacy Policy
              </Button>
            </div>
          </Card>

          {/* Support */}
          <Card className="p-6 bg-white">
            <h3 className="text-lg font-semibold mb-4">Need Help?</h3>
            <div className="space-y-3">
              <Button
                variant="outline"
                className="w-full justify-start"
              >
                <Mail className="mr-2 h-4 w-4" />
                Contact Support
              </Button>
              <Button
                variant="outline"
                className="w-full justify-start"
              >
                <Globe className="mr-2 h-4 w-4" />
                Documentation
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default SettingsPage;

