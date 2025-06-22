# 📨 ConvoWise: A Real-Time Communication Platform 

ConvoWise is a feature-rich MERN stack chat application designed for seamless real-time communication. It provides a responsive and intuitive UI, enabling users to send instant messages and track online statuses. The app leverages Socket.io for real-time updates, while JWT-based authentication ensures secure access. Zustand efficiently manages global state, and TailwindCSS with Daisy UI enhances the UI/UX with modern, customizable components.


## 🚀 Features

- Real-Time Messaging: Instant message delivery powered by Socket.io
- Online User Status: Track active users in real time
- Secure Authentication: JWT-based authentication and authorization
- Modern UI/UX: TailwindCSS and Daisy UI for a sleek, responsive design
- Global State Management: Efficiently handled with Zustand



## 🌟 Tech Stack

- Frontend: React, TailwindCSS, Daisy UI
- Backend: Node.js, Express
- Database: MongoDB
- Real-Time Communication: Socket.io
- Authentication & Authorization: JWT
- State Management: Zustand






## 🛠 How it works

- User Authentication: Secure login and signup using JWT
- Real-Time Messaging: Messages are transmitted instantly via Socket.io
- Online Status Updates: Users' availability is tracked in real time
- State Management: Zustand ensures smooth global state handling
- Responsive UI: TailwindCSS and Daisy UI enhance the user experience




## 👩‍💻 Setup .env file

To run this project, you will need to add the following environment variables to your .env file

MONGODB_URI

PORT

JWT_SECRET

CLOUDINARY_CLOUD_NAME

CLOUDINARY_API_KEY

CLOUDINARY_API_SECRET

NODE_ENV=development



## 📌 Installation & Setup

Clone the repository:

bash
git clone https://github.com/yourusername/Real-Time-Communication-Platform.git



Go to the project directory:

bash
cd Real-Time-Communication-Platform



Install dependencies for both frontend & backend:

bash
cd backend && npm install  
cd ../frontend && npm install 


Start the backend server:

bash
cd backend  
npm run dev  


Run the frontend:

bash
cd frontend  
npm run dev  
