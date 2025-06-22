import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { Camera, Mail, User, BadgeCheck, Loader2 } from "lucide-react";

const ProfilePage = () => {
  const { authUser, isUpdatingProfile, updateProfile } = useAuthStore();
  const [selectedImg, setSelectedImg] = useState(null);

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = async () => {
      const base64Image = reader.result;
      setSelectedImg(base64Image);
      await updateProfile({ profilePic: base64Image });
    };
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white pt-20">
      <div className="max-w-3xl mx-auto p-4 md:p-8">
        <div className="bg-base-200 rounded-2xl p-6 md:p-10 shadow-2xl border border-indigo-800">
          <div className="text-center space-y-2">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Profile Settings</h1>
            <p className="text-zinc-400 text-sm">Customize your profile and preferences</p>
          </div>

          <div className="flex flex-col items-center gap-4 mt-8">
            <div className="relative group">
              <img
                src={selectedImg || authUser.profilePic || "/avatar.png"}
                alt="Profile"
                className="size-32 md:size-36 rounded-full object-cover border-4 border-indigo-600 shadow-lg group-hover:opacity-80 transition-opacity"
              />
              <label
                htmlFor="avatar-upload"
                className={`absolute bottom-1 right-1 bg-indigo-600 hover:bg-indigo-700 p-2 rounded-full cursor-pointer transition-transform transform hover:scale-110 ${
                  isUpdatingProfile ? "animate-pulse pointer-events-none" : ""
                }`}
              >
                {isUpdatingProfile ? (
                  <Loader2 className="w-4 h-4 text-white animate-spin" />
                ) : (
                  <Camera className="w-4 h-4 text-white" />
                )}
                <input
                  type="file"
                  id="avatar-upload"
                  className="hidden"
                  accept="image/*"
                  onChange={handleImageUpload}
                  disabled={isUpdatingProfile}
                />
              </label>
            </div>
            <p className="text-xs text-zinc-400">
              {isUpdatingProfile ? "Uploading photo..." : "Tap camera icon to change photo"}
            </p>
          </div>

          <div className="mt-8 space-y-6">
            <div className="space-y-1.5">
              <div className="flex items-center text-sm text-zinc-400 gap-2">
                <User className="w-4 h-4" /> Full Name
              </div>
              <p className="bg-gray-800 rounded-lg px-4 py-2.5 border border-zinc-700 text-white">
                {authUser?.fullName || "Not available"}
              </p>
            </div>

            <div className="space-y-1.5">
              <div className="flex items-center text-sm text-zinc-400 gap-2">
                <Mail className="w-4 h-4" /> Email Address
              </div>
              <p className="bg-gray-800 rounded-lg px-4 py-2.5 border border-zinc-700 text-white">
                {authUser?.email || "Not available"}
              </p>
            </div>
          </div>

          <div className="mt-10 bg-base-300 rounded-xl p-6 border border-zinc-700">
            <h2 className="text-lg font-semibold mb-4 border-b border-zinc-600 pb-2">Account Info</h2>
            <div className="space-y-3 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-zinc-400">Member Since</span>
                <span className="text-zinc-100">{authUser.createdAt?.split("T")[0] || "N/A"}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-zinc-400">Account Status</span>
                <span className="text-green-500 flex items-center gap-1">
                  <BadgeCheck className="w-4 h-4" /> Active
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;