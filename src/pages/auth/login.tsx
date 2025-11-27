import { Bell } from "lucide-react";

import { LoginForm } from "@/components/dashboard/login-form";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-[#FAFAFA]">
      <header className="flex items-center justify-between px-6 py-4 bg-white border-b border-gray-100">
        {/* Logo & Text */}
        <div className="flex items-center space-x-4">
          <img src="/images/carelynk.png" alt="InnovarX Logo" className="h-10" />
          <span className="text-sm text-gray-600">
            Welcome to the CareLynk Web Platform
          </span>
        </div>

        <button type="button" className="p-2 rounded-md border  border-gray-100 hover:bg-gray-100 transition">
          <Bell className="h-5 w-5 text-gray-600" />
        </button>
      </header>

      <section className="px-4">
        <LoginForm />
      </section>
    </main>
  );
}
