import { useEffect, useState } from "react";
import { useChatStore } from "../store/useChatStore";
import { useAuthStore } from "../store/useAuthStore";
import SidebarSkeleton from "./skeletons/SidebarSkeleton";
import { Users } from "lucide-react";

const Sidebar = () => {
  const { getUsers, users, selectedUser, setSelectedUser, isUsersLoading } = useChatStore();
  const { onlineUsers } = useAuthStore();
  const [showOnlineOnly, setShowOnlineOnly] = useState(false);

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  const filteredUsers = showOnlineOnly
    ? users.filter((user) => onlineUsers.includes(user._id))
    : users;

  if (isUsersLoading) return <SidebarSkeleton />;

  return (
    <aside className="h-full w-20 lg:w-72 border-r border-gray-800 bg-gradient-to-b from-[#0a0a0a] via-[#111827] to-[#1f2937] text-white shadow-2xl transition-all duration-300 ease-in-out">
      {/* Header */}
      <div className="border-b border-gray-700 w-full p-5 bg-white/5 backdrop-blur-lg shadow-md">
        <div className="flex items-center gap-2">
          <Users className="size-6 text-indigo-500 drop-shadow" />
          <span className="text-xl font-semibold tracking-wider hidden lg:block text-white">
            Contacts
          </span>
        </div>

        {/* Toggle Online */}
        <div className="mt-3 hidden lg:flex items-center gap-2 text-sm text-gray-400">
          <label className="cursor-pointer flex items-center gap-2">
            <input
              type="checkbox"
              checked={showOnlineOnly}
              onChange={(e) => setShowOnlineOnly(e.target.checked)}
              className="form-checkbox border-gray-500 accent-indigo-500"
            />
            <span className="text-sm">Show online only</span>
          </label>
          <span>({onlineUsers.length - 1} online)</span>
        </div>
      </div>

      {/* Users List */}
      <div className="overflow-y-auto w-full py-3 px-2 scrollbar-thin scrollbar-thumb-indigo-600">
        {filteredUsers.map((user) => (
          <button
            key={user._id}
            onClick={() => setSelectedUser(user)}
            className={`w-full p-3 rounded-xl flex items-center gap-3 transition-all duration-200 group relative ${
              selectedUser?._id === user._id
                ? "bg-indigo-800/40 ring-2 ring-indigo-500 shadow-[0_0_15px_#6366f1]/20"
                : "hover:bg-indigo-700/10"
            }`}
          >
            {/* Avatar */}
            <div className="relative mx-auto lg:mx-0">
              {user.profilePic ? (
                <img
                  src={user.profilePic}
                  alt={user.name}
                  className="size-12 object-cover rounded-full border border-gray-600 shadow-md"
                />
              ) : (
                <div className="size-12 rounded-full flex items-center justify-center bg-indigo-600 text-white font-bold text-lg border border-gray-600 shadow-md">
                  {user.fullName?.[0]?.toUpperCase() || "U"}
                </div>
              )}

              {onlineUsers.includes(user._id) && (
                <span className="absolute bottom-0 right-0 size-3 bg-green-400 rounded-full ring-2 ring-black animate-pulse" />
              )}
            </div>

            {/* Name & Status */}
            <div className="hidden lg:block text-left">
              <div className="font-semibold text-base truncate group-hover:text-white">
                {user.fullName}
              </div>
              <div className="text-xs text-gray-400 flex items-center gap-1">
                <span
                  className={`w-2.5 h-2.5 rounded-full ${
                    onlineUsers.includes(user._id) ? "bg-green-400" : "bg-gray-500"
                  }`}
                />
                <span>{onlineUsers.includes(user._id) ? "Online" : "Offline"}</span>
              </div>
            </div>
          </button>
        ))}

        {filteredUsers.length === 0 && (
          <div className="text-center text-gray-500 py-4 text-sm animate-pulse">
            No online users
          </div>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
