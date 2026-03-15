import { ChevronRight, MessageCircle, User } from "lucide-react";
import { Link } from "react-router";

export function Profile() {
  return (
    <div className="h-screen bg-[#000] text-white flex flex-col max-w-[430px] mx-auto">
      {/* Header */}
      <div className="px-6 pt-8 pb-6">
        <h1 className="text-[34px] font-bold tracking-tight">Profile</h1>
      </div>

      {/* Profile Info */}
      <div className="px-6 mb-8">
        <div className="flex items-center gap-4">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#667eea] to-[#764ba2] flex items-center justify-center text-white font-semibold text-2xl">
            ME
          </div>
          <div>
            <h2 className="text-[22px] font-semibold mb-1">Your Name</h2>
            <p className="text-[15px] text-white/60">Active now</p>
          </div>
        </div>
      </div>

      {/* Settings List */}
      <div className="flex-1">
        <div className="bg-[#1C1C1E] mx-4 rounded-xl overflow-hidden">
          <button className="w-full flex items-center justify-between px-4 py-3.5 border-b border-white/10 active:bg-white/5">
            <span className="text-[17px]">Account</span>
            <ChevronRight className="w-5 h-5 text-white/40" />
          </button>
          <button className="w-full flex items-center justify-between px-4 py-3.5 border-b border-white/10 active:bg-white/5">
            <span className="text-[17px]">Privacy</span>
            <ChevronRight className="w-5 h-5 text-white/40" />
          </button>
          <button className="w-full flex items-center justify-between px-4 py-3.5 border-b border-white/10 active:bg-white/5">
            <span className="text-[17px]">Notifications</span>
            <ChevronRight className="w-5 h-5 text-white/40" />
          </button>
          <button className="w-full flex items-center justify-between px-4 py-3.5 active:bg-white/5">
            <span className="text-[17px]">Help</span>
            <ChevronRight className="w-5 h-5 text-white/40" />
          </button>
        </div>
      </div>

      {/* Bottom Tab Bar */}
      <div className="h-20 bg-[#1C1C1E]/95 backdrop-blur-lg border-t border-white/10 flex items-center justify-around pb-5">
        <Link to="/" className="flex flex-col items-center gap-1">
          <MessageCircle className="w-6 h-6 text-white/60" />
          <span className="text-[10px] text-white/60">Messages</span>
        </Link>
        <div className="flex flex-col items-center gap-1">
          <User className="w-6 h-6 text-[#0A84FF]" />
          <span className="text-[10px] text-[#0A84FF] font-medium">
            Profile
          </span>
        </div>
      </div>
    </div>
  );
}
