
// import { useState } from "react";
// import { useAuthStore } from "../store/useAuthStore";
// import { Eye, EyeOff, Loader2, Lock, Mail, MessageSquareText, User } from "lucide-react";
// import { Link } from "react-router-dom";

// import toast from "react-hot-toast";
// import "@lottiefiles/lottie-player";

// const SignUpPage = () => {
//   const [showPassword, setShowPassword] = useState(false);
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     password: "",
//   });

//   const { signup, isSigningUp } = useAuthStore();

//   const validateForm = () => {
//     if (!formData.fullName.trim()) return toast.error("Full name is required");
//     if (!formData.email.trim()) return toast.error("Email is required");
//     if (!/\S+@\S+\.\S+/.test(formData.email)) return toast.error("Invalid email format");
//     if (!formData.password) return toast.error("Password is required");
//     if (formData.password.length < 6) return toast.error("Password must be at least 6 characters");

//     return true;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const success = validateForm();

//     if (success === true) signup(formData);
//   };

//   return (
//     <div className="min-h-screen grid lg:grid-cols-2">
//       {/* Left Side */}
//       <div className="flex flex-col justify-center items-center p-6 sm:p-12">
//         <div className="w-full max-w-md space-y-8">
//           {/* Logo and Title */}
//           <div className="text-center mb-8">
//             <div className="flex flex-col items-center gap-2 group">
//               <div
//                 className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center 
//               group-hover:bg-primary/20 transition-colors"
//               >
//                 <MessageSquareText className="w-6 h-6 text-primary" />
//               </div>
//               <h1
//                 className="text-2xl font-bold mt-2"
//                 style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.2)" }}
//               >
//                 Create Account
//               </h1>
//               <p className="text-sm text-gray-400">Start your journey with a free account</p>
//             </div>
//           </div>

//           {/* Form */}
//           <form onSubmit={handleSubmit} className="space-y-6">
//             <div className="form-control">
//               <label className="label">
//                 <span className="label-text font-medium">Full Name</span>
//               </label>
//               <div className="relative">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <User className="h-5 w-5 text-base-content/40" />
//                 </div>
//                 <input
//                   type="text"
//                   className="input input-bordered w-full pl-10 focus:border-blue-500 focus:ring-2 focus:ring-blue-400"
//                   placeholder="Enter full name"
//                   value={formData.fullName}
//                   onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
//                 />
//               </div>
//             </div>

//             <div className="form-control">
//               <label className="label">
//                 <span className="label-text font-medium">Email</span>
//               </label>
//               <div className="relative">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <Mail className="h-5 w-5 text-base-content/40" />
//                 </div>
//                 <input
//                   type="email"
//                   className="input input-bordered w-full pl-10 focus:border-blue-500 focus:ring-2 focus:ring-blue-400"
//                   placeholder="Enter Email address"
//                   value={formData.email}
//                   onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//                 />
//               </div>
//             </div>

//             <div className="form-control">
//               <label className="label">
//                 <span className="label-text font-medium">Password</span>
//               </label>
//               <div className="relative">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <Lock className="h-5 w-5 text-base-content/40" />
//                 </div>
//                 <input
//                   type={showPassword ? "text" : "password"}
//                   className="input input-bordered w-full pl-10 focus:border-blue-500 focus:ring-2 focus:ring-blue-400"
//                   placeholder="••••••••"
//                   value={formData.password}
//                   onChange={(e) => setFormData({ ...formData, password: e.target.value })}
//                 />
//                 <button
//                   type="button"
//                   className="absolute inset-y-0 right-0 pr-3 flex items-center"
//                   onClick={() => setShowPassword(!showPassword)}
//                 >
//                   {showPassword ? (
//                     <EyeOff className="h-5 w-5 text-base-content/40" />
//                   ) : (
//                     <Eye className="h-5 w-5 text-base-content/40" />
//                   )}
//                 </button>
//               </div>
//             </div>

//             <button
//               type="submit"
//               className="btn btn-primary w-full hover:scale-105 transition-all"
//               disabled={isSigningUp}
//             >
//               {isSigningUp ? (
//                 <>
//                   <Loader2 className="h-5 w-5 animate-spin" />
//                   Loading...
//                 </>
//               ) : (
//                 "Create Account"
//               )}
//             </button>
//           </form>

//           <div className="text-center">
//             <p className="text-base-content/60">
//               Already have an account?{" "}
//               <Link to="/login" className="link link-primary">
//                 Sign in
//               </Link>
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Right Side */}
//       <div className="hidden lg:flex flex-col justify-center items-center p-6">
//         <lottie-player
//           src="https://assets8.lottiefiles.com/packages/lf20_jcikwtux.json"
//           background="transparent"
//           speed="1"
//           style={{ width: "550px", height: "550px" }}
//           loop
//           autoplay
//         ></lottie-player>
//         <div className="text-center mt-4">
//           <h2 className="text-xl font-semibold text-blue-400">
//             Connect Instantly, Communicate Effortlessly – ConvoWise!
//           </h2>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignUpPage;

// import { useState } from "react";
// import { useAuthStore } from "../store/useAuthStore";
// import { Link } from "react-router-dom";
// import { Eye, EyeOff, Loader2, Lock, Mail, MessageSquareText, User } from "lucide-react";
// import toast from "react-hot-toast";
// import Typewriter from "typewriter-effect";
// import { motion } from "framer-motion";
// import "@lottiefiles/lottie-player";

// const SignUpPage = () => {
//   const [showPassword, setShowPassword] = useState(false);
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     password: "",
//   });

//   const { signup, isSigningUp } = useAuthStore();

//   const validateForm = () => {
//     if (!formData.fullName.trim()) return toast.error("Full name is required");
//     if (!formData.email.trim()) return toast.error("Email is required");
//     if (!/\S+@\S+\.\S+/.test(formData.email)) return toast.error("Invalid email format");
//     if (!formData.password) return toast.error("Password is required");
//     if (formData.password.length < 6) return toast.error("Password must be at least 6 characters");

//     return true;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const success = validateForm();
//     if (success === true) signup(formData);
//   };

//   return (
//     <>
//       {/* Navbar */}
//       <header className="w-full px-6 py-4 flex justify-between items-center bg-gray-900/50 border-b border-white/10 z-10 fixed top-0 left-0">
//         <div className="flex items-center gap-2">
//           <div className="bg-primary/20 p-2 rounded-md">
//             <MessageSquareText className="w-5 h-5 text-primary" />
//           </div>
//           <h1 className="text-white text-xl font-bold tracking-wide">ConvoWise</h1>
//         </div>
//         <button
//           className="flex items-center gap-2 text-sm bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition"
//           aria-label="Settings"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-5 w-5"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M12 4v1m0 14v1m7.071-7.071l.707.707M4.222 4.222l.707.707M20 12h1M3 12H2m2.929 4.243l-.707.707M17.657 6.343l-.707.707"
//             />
//           </svg>
//           Settings
//         </button>
//       </header>

//     <div className="pt-[88px] min-h-screen grid lg:grid-cols-2 relative overflow-y-auto">

//         {/* Animated Background */}
//         <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.15),transparent_25%),radial-gradient(circle_at_80%_80%,rgba(168,85,247,0.15),transparent_25%)] bg-gradient-to-br from-white via-blue-50 to-blue-100 dark:from-[#0e0e0e] dark:via-[#1a1a1a] dark:to-black"></div>

//         {/* Left Side - Form */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="flex flex-col justify-center items-center p-6 sm:p-12"
//         >
//           <div className="w-full max-w-md space-y-8 bg-white/60 dark:bg-[#1e1e1e]/60 backdrop-blur-xl rounded-2xl shadow-[0_4px_30px_rgba(0,0,0,0.1)] border border-white/20 p-10">
//             {/* Header */}
//             <div className="text-center mb-8">
//               <div className="flex flex-col items-center gap-2 group">
//                 <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
//                   <MessageSquareText className="w-6 h-6 text-primary" />
//                 </div>
//                 <h1 className="text-2xl font-bold mt-2">Create Account</h1>
//                 <p className="text-sm text-gray-400">Start your journey with a free account</p>
//               </div>
//             </div>

//             {/* Form */}
//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div className="form-control group">
//                 <label className="label">
//                   <span className="label-text font-medium">Full Name</span>
//                 </label>
//                 <div className="relative focus-within:ring-2 focus-within:ring-primary rounded-md">
//                   <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                     <User className="h-5 w-5 text-base-content/40" />
//                   </div>
//                   <input
//                     type="text"
//                     className="peer input w-full pl-10 py-2 border-none rounded-xl dark:bg-[#1e1e1e] bg-gray-100 focus:ring-2 focus:ring-primary"
//                     placeholder="Enter full name"
//                     value={formData.fullName}
//                     onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
//                   />
//                 </div>
//               </div>

//               <div className="form-control group">
//                 <label className="label">
//                   <span className="label-text font-medium">Email</span>
//                 </label>
//                 <div className="relative focus-within:ring-2 focus-within:ring-primary rounded-md">
//                   <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                     <Mail className="h-5 w-5 text-base-content/40" />
//                   </div>
//                   <input
//                     type="email"
//                     className="peer input w-full pl-10 py-2 border-none rounded-xl dark:bg-[#1e1e1e] bg-gray-100 focus:ring-2 focus:ring-primary"
//                     placeholder="Enter Email address"
//                     value={formData.email}
//                     onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//                   />
//                 </div>
//               </div>

//               <div className="form-control group">
//                 <label className="label">
//                   <span className="label-text font-medium">Password</span>
//                 </label>
//                 <div className="relative focus-within:ring-2 focus-within:ring-primary rounded-md">
//                   <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                     <Lock className="h-5 w-5 text-base-content/40" />
//                   </div>
//                   <input
//                     type={showPassword ? "text" : "password"}
//                     className="peer input w-full pl-10 py-2 border-none rounded-xl dark:bg-[#1e1e1e] bg-gray-100 focus:ring-2 focus:ring-primary"
//                     placeholder="••••••••"
//                     value={formData.password}
//                     onChange={(e) => setFormData({ ...formData, password: e.target.value })}
//                   />
//                   <button
//                     type="button"
//                     className="absolute inset-y-0 right-0 pr-3 flex items-center"
//                     onClick={() => setShowPassword(!showPassword)}
//                   >
//                     {showPassword ? (
//                       <EyeOff className="h-5 w-5 text-base-content/40" />
//                     ) : (
//                       <Eye className="h-5 w-5 text-base-content/40" />
//                     )}
//                   </button>
//                 </div>
//               </div>

//               <button
//                 type="submit"
//                 className="w-full py-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 text-white rounded-lg shadow-lg hover:scale-105 transition-all duration-300"
//                 disabled={isSigningUp}
//               >
//                 {isSigningUp ? (
//                   <>
//                     <Loader2 className="h-5 w-5 animate-spin" />
//                     Loading...
//                   </>
//                 ) : (
//                   "Create Account"
//                 )}
//               </button>
//             </form>

//             <div className="text-center">
//               <p className="text-base-content/60">
//                 Already have an account? <Link to="/login" className="link link-primary">Sign in</Link>
//               </p>
//             </div>
//           </div>
//         </motion.div>

//         {/* Right Side - Animation */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//           className="hidden lg:flex flex-col justify-center items-center p-6"
//         >
//           <lottie-player
//             src="https://assets8.lottiefiles.com/packages/lf20_jcikwtux.json"
//             background="transparent"
//             speed="1"
//             style={{ width: "550px", height: "550px" }}
//             loop
//             autoplay
//           ></lottie-player>
//           <div className="text-center mt-4">
//             <Typewriter
//               options={{
//                 strings: [
//                   "Connect Instantly, Communicate Effortlessly.",
//                   "Your community. Your conversations.",
//                 ],
//                 autoStart: true,
//                 loop: true,
//                 pauseFor: 3000,
//                 delay: 40,
//               }}
//               wrapperClassName="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 text-lg font-semibold"
//             />
//           </div>
//         </motion.div>
//       </div>
//     </>
//   );
// };

// export default SignUpPage;


import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { Link } from "react-router-dom";
import { Eye, EyeOff, Loader2, Lock, Mail, MessageSquareText, User } from "lucide-react";
import toast from "react-hot-toast";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import "@lottiefiles/lottie-player";

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const { signup, isSigningUp } = useAuthStore();

  const validateForm = () => {
    if (!formData.fullName.trim()) return toast.error("Full name is required");
    if (!formData.email.trim()) return toast.error("Email is required");
    if (!/\S+@\S+\.\S+/.test(formData.email)) return toast.error("Invalid email format");
    if (!formData.password) return toast.error("Password is required");
    if (formData.password.length < 6) return toast.error("Password must be at least 6 characters");

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const success = validateForm();
    if (success === true) signup(formData);
  };

  return (
    <>
      {/* Navbar */}
      <header className="w-full px-6 py-4 flex justify-between items-center bg-gray-900/50 border-b border-white/10 z-10 fixed top-0 left-0">
        <div className="flex items-center gap-2">
          <div className="bg-primary/20 p-2 rounded-md">
            <MessageSquareText className="w-5 h-5 text-primary" />
          </div>
          <h1 className="text-white text-xl font-bold tracking-wide">ConvoWise</h1>
        </div>
        <button
          className="flex items-center gap-2 text-sm bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition"
          aria-label="Settings"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 4v1m0 14v1m7.071-7.071l.707.707M4.222 4.222l.707.707M20 12h1M3 12H2m2.929 4.243l-.707.707M17.657 6.343l-.707.707"
            />
          </svg>
          Settings
        </button>
      </header>

      <div className="pt-[72px] min-h-screen grid lg:grid-cols-2 relative overflow-y-auto items-start">
        {/* Animated Background */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.15),transparent_25%),radial-gradient(circle_at_80%_80%,rgba(168,85,247,0.15),transparent_25%)] bg-gradient-to-br from-white via-blue-50 to-blue-100 dark:from-[#0e0e0e] dark:via-[#1a1a1a] dark:to-black"></div>

        {/* Left Side - Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-start items-center p-6 sm:p-12"
        >
          <div className="w-full max-w-md space-y-8 bg-white/60 dark:bg-[#1e1e1e]/60 backdrop-blur-xl rounded-2xl shadow-[0_4px_30px_rgba(0,0,0,0.1)] border border-white/20 p-10 mt-[-10px]">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="flex flex-col items-center gap-2 group">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <MessageSquareText className="w-6 h-6 text-primary" />
                </div>
                <h1 className="text-2xl font-bold mt-2">Create Account</h1>
                <p className="text-sm text-gray-400">Start your journey with a free account</p>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="form-control group">
                <label className="label">
                  <span className="label-text font-medium">Full Name</span>
                </label>
                <div className="relative focus-within:ring-2 focus-within:ring-primary rounded-md">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-base-content/40" />
                  </div>
                  <input
                    type="text"
                    className="peer input w-full pl-10 py-2 border-none rounded-xl dark:bg-[#1e1e1e] bg-gray-100 focus:ring-2 focus:ring-primary"
                    placeholder="Enter full name"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-control group">
                <label className="label">
                  <span className="label-text font-medium">Email</span>
                </label>
                <div className="relative focus-within:ring-2 focus-within:ring-primary rounded-md">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
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
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
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
                disabled={isSigningUp}
              >
                {isSigningUp ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    Loading...
                  </>
                ) : (
                  "Create Account"
                )}
              </button> */}
              <button
  type="submit"
  className="w-full py-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 text-white rounded-lg shadow-lg hover:scale-105 transition-all duration-300 flex justify-center items-center gap-2"
  disabled={isSigningUp}
>
  {isSigningUp ? (
    <>
      <Loader2 className="h-5 w-5 animate-spin" />
      Loading...
    </>
  ) : (
    "Create Account"
  )}
</button>

            </form>

            <div className="text-center">
              <p className="text-base-content/60">
                Already have an account? <Link to="/login" className="link link-primary">Sign in</Link>
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
    </>
  );
};

export default SignUpPage;
