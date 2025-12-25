import React from "react";
import { Bell, User, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
import UptoSkillsLogo from "../../../assets/UptoSkills.webp";
import { motion } from "framer-motion";
export default function AdminNavbar() {
  const navigate = useNavigate();

  return (
    <header className="fixed top-0 left-0 w-full h-16 bg-slate-900 border-b border-slate-700 flex items-center justify-between px-6 z-50">
      {/* Page Title */}
      <motion.img
        src={UptoSkillsLogo}
        alt="UptoSkills"
        className="w-40 h-10 ml-6  object-contain"
        whileHover={{
          scale: 1.05,
          filter: "drop-shadow(0 0 12px rgba(99,102,241,0.9))",
        }}
        transition={{ type: "spring", stiffness: 200 }}
      />

      {/* Actions */}
      <div className="flex items-center gap-6">
        {/* Notifications */}
        <button className="relative hover:text-indigo-400">
          <Bell size={22} />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full"></span>
        </button>

        {/* Profile */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center">
            <User size={16} />
          </div>
          <span className="hidden sm:block text-sm">Admin</span>
        </div>

        {/* Logout */}
        <button
          onClick={() => navigate("/login")}
          className="text-red-400 hover:text-red-500"
        >
          <LogOut size={20} />
        </button>
      </div>
    </header>
  );
}
