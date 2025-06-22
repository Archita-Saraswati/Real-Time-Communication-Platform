import { Link } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import { LogOut, Settings, User, MessageSquareText } from "lucide-react";

const Navbar = () => {
  const { logout, authUser } = useAuthStore();

  return (
    <header className="bg-base-100 border-b border-base-300 fixed w-full top-0 z-40 backdrop-blur-lg bg-base-100/80">
      <div className="container mx-auto px-4 h-16">
        <div className="flex items-center justify-between h-full">
          {/* Brand */}
          <Link to="/" className="flex items-center gap-2.5 hover:opacity-80 transition-all">
            <div className="size-9 rounded-lg bg-primary/10 flex items-center justify-center">
              <MessageSquareText className="w-6 h-6 text-primary" />
            </div>
            <h1 className="text-lg font-semibold text-white">ConvoWise</h1>
          </Link>

          {/* User Actions */}
          <div className="flex items-center gap-3">
            <Link to="/settings" className="btn btn-sm gap-2">
              <Settings className="w-4 h-4" />
              <span className="hidden sm:inline">Settings</span>
            </Link>

            {authUser && (
              <>
                <Link to="/profile" className="flex items-center gap-2 btn btn-sm">
                  <img
                    src={authUser.profilePic || "/avatar.png"}
                    alt="User"
                    className="w-6 h-6 rounded-full object-cover border border-gray-500"
                  />
                  <span className="hidden sm:inline">{authUser.fullName.split(" ")[0]}</span>
                </Link>

                <button onClick={logout} className="flex gap-2 items-center text-white hover:text-red-400 transition">
                  <LogOut className="w-5 h-5" />
                  <span className="hidden sm:inline">Logout</span>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
