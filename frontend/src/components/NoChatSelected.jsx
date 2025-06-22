
import { MessageSquareText} from "lucide-react";
import React from "react";

const NoChatSelected = () => {
  return (
    <div className="w-full flex flex-1 flex-col items-center justify-center p-16 bg-gradient-to-b from-blue-900 to-black relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-10 left-10 w-48 h-48 bg-blue-500 rounded-full opacity-20 blur-3xl animate-pulse" />
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-purple-600 rounded-full opacity-20 blur-3xl animate-pulse" />
      
      <div className="max-w-md text-center space-y-6 z-10">
        {/* Icon Display */}
        <div className="flex justify-center gap-4 mb-4">
          <div className="relative">
            <div
              className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center
              justify-center animate-pulse"
            >
              <MessageSquareText className="w-8 h-8 text-primary" />
            </div>
          </div>
        </div>

        {/* Welcome Text */}
        <h2 className="text-3xl font-extrabold text-white drop-shadow-lg">
          Welcome to ConvoWise!
        </h2>
        <p className="text-base-content/60 text-gray-300">
          Select a chat from the sidebar to connect instantly
        </p>

        {/* Call to Action Button */}
        <button
          className="mt-4 px-6 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium 
          shadow-lg hover:shadow-xl transition-transform transform hover:scale-105"
        >
          Start Chatting
        </button>
      </div>
    </div>
  );
};

export default NoChatSelected;

