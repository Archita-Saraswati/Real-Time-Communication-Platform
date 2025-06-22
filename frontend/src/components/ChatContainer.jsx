import { useChatStore } from "../store/useChatStore";
import { useEffect, useRef } from "react";

import ChatHeader from "./ChatHeader";
import MessageInput from "./MessageInput";
import MessageSkeleton from "./skeletons/MessageSkeleton";
import { useAuthStore } from "../store/useAuthStore";
import { formatMessageTime } from "../lib/utils";

const ChatContainer = () => {
  const {
    messages,
    getMessages,
    isMessagesLoading,
    selectedUser,
    subscribeToMessages,
    unsubscribeFromMessages,
  } = useChatStore();

  const { authUser } = useAuthStore();
  const messageEndRef = useRef(null);

  useEffect(() => {
    getMessages(selectedUser._id);
    subscribeToMessages();
    return () => unsubscribeFromMessages();
  }, [selectedUser._id, getMessages, subscribeToMessages, unsubscribeFromMessages]);

  useEffect(() => {
    if (messageEndRef.current && messages) {
      messageEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  if (isMessagesLoading) {
    return (
      <div className="flex-1 flex flex-col overflow-auto">
        <ChatHeader />
        <MessageSkeleton />
        <MessageInput />
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col overflow-auto bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white">
      <ChatHeader />

      <div className="flex-1 overflow-y-auto px-4 md:px-8 py-6 space-y-6 scrollbar-thin scrollbar-thumb-indigo-700 scrollbar-track-gray-900">
        {messages.map((message, index) => {
          const isSender = message.senderId === authUser._id;
          const profilePic =
            isSender
              ? authUser.profilePic || "/avatar.png"
              : selectedUser.profilePic || "/avatar.png";
          const senderName = isSender ? "You" : selectedUser.fullName || "User";

          return (
            <div
              key={message._id || index}
              ref={index === messages.length - 1 ? messageEndRef : null}
              className={`chat transition-all duration-300 ease-in-out transform ${
                isSender ? "chat-end" : "chat-start"
              }`}
            >
              <div className="chat-image avatar">
                <div className="size-10 rounded-full border border-indigo-500 shadow-md">
                  <img src={profilePic} alt="profile" />
                </div>
              </div>

              <div className="chat-header mb-1 flex items-center gap-2">
                <span className="text-sm font-semibold">{senderName}</span>
                <time className="text-xs text-gray-400 italic">
                  {formatMessageTime(message.createdAt)}
                </time>
              </div>

              <div className={`chat-bubble px-4 py-3 max-w-[75%] rounded-xl shadow-lg ${
                isSender ? "bg-indigo-600 text-white" : "bg-gray-700 text-white"
              }`}>
                {message.image && (
                  <img
                    src={message.image}
                    alt="Attachment"
                    className="max-w-xs rounded-lg mb-2 border border-gray-600"
                  />
                )}
                {message.text && (
                  <p className="whitespace-pre-wrap leading-relaxed text-sm sm:text-base">
                    {message.text}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <MessageInput />
    </div>
  );
};

export default ChatContainer;
