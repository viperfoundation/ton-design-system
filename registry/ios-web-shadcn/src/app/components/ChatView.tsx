import { ChevronLeft, Info, Send } from "lucide-react";
import { Link, useParams } from "react-router";
import { conversations, messagesByConversation } from "../data/mockData";
import { motion } from "motion/react";
import { useState } from "react";

export function ChatView() {
  const { id } = useParams();
  const conversation = conversations.find((c) => c.id === id);
  const messages = messagesByConversation[id || ""] || [];
  const [inputValue, setInputValue] = useState("");

  if (!conversation) {
    return <div>Conversation not found</div>;
  }

  return (
    <div className="h-screen bg-[#000] text-white flex flex-col max-w-[430px] mx-auto">
      {/* Navigation Bar */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
        <Link to="/" className="flex items-center gap-1 text-[#0A84FF]">
          <ChevronLeft className="w-5 h-5" />
          <span className="text-[17px]">Messages</span>
        </Link>

        <div className="flex flex-col items-center flex-1">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#667eea] to-[#764ba2] flex items-center justify-center text-white text-xs font-semibold">
              {conversation.avatar}
            </div>
            <div className="flex flex-col">
              <h2 className="font-semibold text-[17px]">{conversation.name}</h2>
              {conversation.online && (
                <span className="text-[11px] text-white/60">Active now</span>
              )}
            </div>
          </div>
        </div>

        <button className="w-9 h-9 flex items-center justify-center">
          <Info className="w-5 h-5 text-[#0A84FF]" />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
        {messages.map((message, index) => (
          <motion.div
            key={message.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`flex ${message.isMe ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[75%] ${
                message.isMe
                  ? "bg-[#0A84FF] rounded-[20px] rounded-br-[4px]"
                  : "bg-[#1C1C1E] rounded-[20px] rounded-bl-[4px]"
              } px-4 py-2.5`}
            >
              <p className="text-[17px] leading-snug">{message.text}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Input Area */}
      <div className="px-4 pb-6 pt-2">
        <div className="flex items-end gap-2">
          <div className="flex-1 bg-[#1C1C1E] rounded-[20px] px-4 py-2 flex items-center gap-2">
            <input
              type="text"
              placeholder="Message"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="flex-1 bg-transparent text-[17px] text-white placeholder:text-white/40 focus:outline-none"
            />
          </div>
          <button
            className={`w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 ${
              inputValue
                ? "bg-[#0A84FF]"
                : "bg-[#1C1C1E]"
            }`}
          >
            <Send className={`w-4 h-4 ${inputValue ? "text-white" : "text-white/40"}`} />
          </button>
        </div>
      </div>
    </div>
  );
}