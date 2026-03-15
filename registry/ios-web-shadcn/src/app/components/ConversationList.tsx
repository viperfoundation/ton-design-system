import { Search, Edit, MessageCircle, User } from "lucide-react";
import { Link } from "react-router";
import { conversations } from "../data/mockData";
import { motion } from "motion/react";

export function ConversationList() {
  return (
    <div className="flex h-full w-full flex-col bg-[#000] text-white">
      {/* Header */}
      <div className="px-6 pt-8 pb-2">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-[34px] font-bold tracking-tight">Messages</h1>
          <button className="w-9 h-9 flex items-center justify-center">
            <Edit className="w-5 h-5 text-[#0A84FF]" />
          </button>
        </div>

        {/* Search Bar */}
        <div className="relative mb-2">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
          <input
            type="text"
            placeholder="Search"
            className="w-full bg-[#1C1C1E] rounded-xl pl-10 pr-4 py-2 text-[17px] text-white placeholder:text-white/40 focus:outline-none"
          />
        </div>
      </div>

      {/* Conversations List */}
      <div className="flex-1 overflow-y-auto">
        {conversations.map((conversation, index) => (
          <motion.div
            key={conversation.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            <Link to={`/chat/${conversation.id}`}>
              <div className="flex items-center gap-3 px-6 py-3 active:bg-white/5 border-b border-white/10">
                {/* Avatar */}
                <div className="relative flex-shrink-0">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#667eea] to-[#764ba2] flex items-center justify-center text-white font-semibold text-lg">
                    {conversation.avatar}
                  </div>
                  {conversation.online && (
                    <div className="absolute bottom-0 right-0 w-4 h-4 bg-[#30D158] rounded-full border-2 border-black" />
                  )}
                </div>

                {/* Message Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline justify-between mb-1">
                    <h3 className="font-semibold text-[17px] truncate">
                      {conversation.name}
                    </h3>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-[15px] text-white/60 truncate">
                      {conversation.lastMessage}
                    </p>
                    {conversation.unread > 0 && (
                      <div className="flex-shrink-0 ml-2 min-w-[20px] h-5 px-1.5 bg-[#0A84FF] rounded-full flex items-center justify-center text-white text-[13px] font-medium">
                        {conversation.unread}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Bottom Tab Bar */}
      <div className="h-20 bg-[#1C1C1E]/95 backdrop-blur-lg border-t border-white/10 flex items-center justify-around pb-5">
        <div className="flex flex-col items-center gap-1">
          <MessageCircle className="w-6 h-6 text-[#0A84FF]" />
          <span className="text-[10px] text-[#0A84FF] font-medium">
            Messages
          </span>
        </div>
        <Link to="/profile" className="flex flex-col items-center gap-1">
          <User className="w-6 h-6 text-white/60" />
          <span className="text-[10px] text-white/60">Profile</span>
        </Link>
      </div>
    </div>
  );
}
