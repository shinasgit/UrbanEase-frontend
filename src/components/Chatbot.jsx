import React, { useState, useRef, useEffect } from "react";
import { CiChat1 } from "react-icons/ci";
import { IoCloseOutline, IoSendOutline } from "react-icons/io5";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "bot",
      text: "Hi there! How can I help you navigate UrbanEase today?",
    },
  ]);
  const [inputText, setInputText] = useState("");
  const messagesEndRef = useRef(null);

  // Auto-scroll to bottom of chat
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = () => {
    if (!inputText.trim()) return;

    // Add user message
    const newUserMsg = {
      id: Date.now(),
      sender: "user",
      text: inputText.trim(),
    };
    
    setMessages((prev) => [...prev, newUserMsg]);
    setInputText("");

    // Mock bot response
    setTimeout(() => {
      const botResponse = {
        id: Date.now() + 1,
        sender: "bot",
        text: "I'm still learning! Soon I'll be able to help you find hostels, helpers, and appliances.",
      };
      setMessages((prev) => [...prev, botResponse]);
    }, 1000);
  };

  return (
    <>
      {/* Floating Action Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-[#5BA4D4] text-white shadow-xl hover:bg-[#4a90c0] hover:-translate-y-1 transition-all duration-300"
          title="Open AI Chat"
        >
          <CiChat1 className="text-3xl" />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-[350px] max-w-[90vw] h-[500px] max-h-[80vh] flex flex-col bg-white dark:bg-[#1B3A5C] border border-gray-200 dark:border-gray-700 rounded-2xl shadow-2xl overflow-hidden transition-colors duration-300 transform scale-100 animate-in fade-in zoom-in duration-200 origin-bottom-right">
          
          {/* Header */}
          <div className="bg-[#5BA4D4] p-4 flex justify-between items-center text-white">
            <div className="flex items-center gap-2">
              <CiChat1 className="text-2xl" />
              <h3 className="font-semibold text-lg">UrbanEase AI</h3>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-200 hover:bg-[#4a90c0] p-1 rounded-lg transition-colors"
            >
              <IoCloseOutline className="text-2xl" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 dark:bg-[#0D1F33] transition-colors duration-300">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${
                  msg.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                    msg.sender === "user"
                      ? "bg-[#5BA4D4] text-white rounded-br-none shadow-sm"
                      : "bg-white dark:bg-[#1B3A5C] text-gray-800 dark:text-gray-100 border border-gray-200 dark:border-gray-700 rounded-bl-none shadow-sm"
                  }`}
                >
                  <p className="text-sm leading-relaxed">{msg.text}</p>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white dark:bg-[#1B3A5C] border-t border-gray-200 dark:border-gray-700 transition-colors duration-300">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="flex items-center gap-2"
            >
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Type a message..."
                className="flex-1 px-4 py-2.5 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-[#0D1F33] text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-[#5BA4D4] transition-colors"
              />
              <button
                type="submit"
                disabled={!inputText.trim()}
                className="p-2.5 rounded-xl bg-[#5BA4D4] text-white hover:bg-[#4a90c0] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <IoSendOutline className="text-xl" />
              </button>
            </form>
          </div>

        </div>
      )}
    </>
  );
}
