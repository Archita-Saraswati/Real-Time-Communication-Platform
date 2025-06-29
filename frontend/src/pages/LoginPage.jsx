import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { Link } from "react-router-dom";
import { Eye, EyeOff, Loader2, Lock, Mail, MessageSquareText } from "lucide-react";
import toast from "react-hot-toast";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import "@lottiefiles/lottie-player";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { login, isLoggingIn } = useAuthStore();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email.includes("@")) {
      toast.error("Please enter a valid email.");
      return;
    }

    if (formData.password.length < 6) {
      toast.error("Password must be at least 6 characters.");
      return;
    }

    try {
      await login(formData);
      toast.success("Welcome back!");
    } catch (err) {
      toast.error("Invalid login");
    }
  };

  return (
    <div className="h-screen grid lg:grid-cols-2 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.15),transparent_25%),radial-gradient(circle_at_80%_80%,rgba(168,85,247,0.15),transparent_25%)] bg-gradient-to-br from-white via-blue-50 to-blue-100 dark:from-[#0e0e0e] dark:via-[#1a1a1a] dark:to-black"></div>

      {/* Left Side - Form */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col justify-center items-center p-6 sm:p-12"
      >
        <div className="w-full max-w-md space-y-8 bg-white/60 dark:bg-[#1e1e1e]/60 backdrop-blur-xl rounded-2xl shadow-[0_4px_30px_rgba(0,0,0,0.1)] border border-white/20 p-10">
          <div className="text-center mb-8">
            <div className="flex flex-col items-center gap-2 group">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <MessageSquareText className="w-6 h-6 text-primary" />
              </div>
              <h1 className="text-2xl font-bold mt-2" style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.2)" }}>
                Welcome to ConvoWise
              </h1>
              <p className="text-sm text-gray-400">
                Log in to stay in touch with your community
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="form-control group">
              <label className="label">
                <span className="label-text font-medium">Email address</span>
              </label>
              <div className="relative focus-within:ring-2 focus-within:ring-primary rounded-md">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none transition group-focus-within:text-blue-500">
                  <Mail className="h-5 w-5 text-base-content/40" />
                </div>
                <input
                  type="email"
                  className="peer input w-full pl-10 py-2 border-none rounded-xl dark:bg-[#1e1e1e] bg-gray-100 focus:ring-2 focus:ring-primary"
                  placeholder="Enter Email address"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            </div>

            <div className="form-control group">
              <label className="label">
                <span className="label-text font-medium">Password</span>
              </label>
              <div className="relative focus-within:ring-2 focus-within:ring-primary rounded-md">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none transition group-focus-within:text-blue-500">
                  <Lock className="h-5 w-5 text-base-content/40" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  className="peer input w-full pl-10 py-2 border-none rounded-xl dark:bg-[#1e1e1e] bg-gray-100 focus:ring-2 focus:ring-primary"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-base-content/40" />
                  ) : (
                    <Eye className="h-5 w-5 text-base-content/40" />
                  )}
                </button>
              </div>
            </div>

            {/* <button
              type="submit"
              className="w-full py-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 text-white rounded-lg shadow-lg hover:scale-105 transition-all duration-300"
              disabled={isLoggingIn}
            >
              {isLoggingIn ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  Loading...
                </>
              ) : (
                "Sign in"
              )}
            </button> */}
            <button
  type="submit"
  className="w-full py-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 text-white rounded-lg shadow-lg hover:scale-105 transition-all duration-300 flex justify-center items-center gap-2"
  disabled={isLoggingIn}
>
  {isLoggingIn ? (
    <>
      <Loader2 className="h-5 w-5 animate-spin" />
      Loading...
    </>
  ) : (
    "Sign in"
  )}
</button>

          </form>

          <div className="text-center">
            <p className="text-base-content/60">
              Don&apos;t have an account?{" "}
              <Link to="/signup" className="link link-primary">
                Create account
              </Link>
            </p>
          </div>
        </div>
      </motion.div>

      {/* Right Side - Animation */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="hidden lg:flex flex-col justify-center items-center p-6"
      >
        <lottie-player
          src="https://assets8.lottiefiles.com/packages/lf20_jcikwtux.json"
          background="transparent"
          speed="1"
          style={{ width: "550px", height: "550px" }}
          loop
          autoplay
        ></lottie-player>
        <div className="text-center mt-4">
          <Typewriter
            options={{
              strings: [
                "Connect Instantly, Communicate Effortlessly.",
                "Your community. Your conversations.",
              ],
              autoStart: true,
              loop: true,
              pauseFor: 3000,
              delay: 40,
            }}
            wrapperClassName="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 text-lg font-semibold"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default LoginPage;

