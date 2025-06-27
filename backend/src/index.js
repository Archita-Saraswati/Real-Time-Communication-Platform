// import express from "express";
// import dotenv from "dotenv";
// import cookieParser from "cookie-parser";
// import cors from "cors";
// import path from "path";

// import { connectDB } from "./lib/db.js";
// import authRoutes from "./routes/auth.route.js";
// import messageRoutes from "./routes/message.route.js";
// import { app, server } from "./lib/socket.js";

// dotenv.config();
// const PORT = process.env.PORT;
// const __dirname = path.resolve();

// // ✅ Increase payload limit here
// app.use(express.json({ limit: '5mb' }));
// app.use(cookieParser());

// app.use(
//   cors({
//     origin: "http://localhost:5173",
    
//     credentials: true,
//   })
// );

// app.use("/api/auth", authRoutes);
// app.use("/api/messages", messageRoutes);

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname, "../frontend/dist")));
//   app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
//   });
// }

// server.listen(PORT, () => {
//   console.log("server is running on PORT:" + PORT);
//   connectDB();
// });


// ✅ Always load .env before anything else that depends on env variables
import dotenv from "dotenv";
dotenv.config(); // Moved to top

import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

// ✅ Imports that depend on env should come AFTER dotenv.config()
import { connectDB } from "./lib/db.js";
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import { app, server } from "./lib/socket.js";

// ✅ Use correct __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 5001;

// ✅ Middlewares
app.use(express.json({ limit: "5mb" }));
app.use(cookieParser());
app.use(
  cors({
    // origin: "http://localhost:5173",
    origin: "https://convowise-frontend.onrender.com",
    credentials: true,
  })
);

// ✅ Routes
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

// ✅ Serve frontend in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
  });
}

// ✅ Start server and connect DB
server.listen(PORT, () => {
  console.log("Server is running on PORT:", PORT);
  connectDB();
});


