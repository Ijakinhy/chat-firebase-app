# Chat Firebase App

A real-time chat application built with React, Vite, and Firebase. This app allows users to authenticate, create chat rooms, send messages, and manage their profiles with real-time updates.

## Features

- 🔐 User Authentication (Firebase Auth)
- 💬 Real-time messaging
- 👥 User management and friend lists
- 📱 Responsive design
- 🔔 Notifications
- 📎 File sharing (images, documents)
- 🎨 Modern UI with emoji support

## Tech Stack

- **Frontend**: React 18, Vite
- **State Management**: Redux Toolkit
- **Backend**: Firebase (Authentication, Firestore, Storage)
- **Styling**: CSS Modules
- **Additional Libraries**: Emoji Picker, React Toastify

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (version 16 or higher)
- npm
- A Firebase project (or use the provided configuration)

## Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd chat-firebase-app
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Environment Setup**

   Create a `.env` file in the root directory and add your Firebase configuration:

   ```env
   VITE_API_KEY=your_firebase_api_key_here
   VITE_AUTH_DOMAIN=your_firebase_auth_domain_here
   VITE_PROJECT_ID=your_firebase_project_id_here
   VITE_STORAGE_BUCKET=your_firebase_storage_bucket_here
   VITE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id_here
   VITE_APP_ID=your_firebase_app_id_here
   ```

   **Firebase Setup Options:**

   **Option A: Use the existing Firebase project**

   - The app is configured to use the project `ijakinhy-chart-app`
   - The `.env` file is already created with the required configuration
   - All Firebase services (Auth, Firestore, Storage) are enabled

   **Option B: Set up your own Firebase project**

   1. Go to [Firebase Console](https://console.firebase.google.com/)
   2. Create a new project or select an existing one
   3. Enable Authentication, Firestore, and Storage
   4. Get your configuration from Project Settings > General > Your apps
   5. Update the `.env` file with your Firebase configuration values

## Running the Application

1. **Start the development server**

   ```bash
   npm run dev
   ```

2. **Open your browser**
   - Navigate to `http://localhost:5173` (or the port shown in the terminal)

## Available Scripts

- `npm run dev` - Start the development server with hot reload
- `npm run build` - Build the app for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check for code issues

## Project Structure

```
chat-firebase-app/
├── public/                 # Static assets
├── src/
│   ├── components/         # React components
│   │   ├── chats/         # Chat interface components
│   │   ├── details/       # User details components
│   │   ├── list/          # Chat list and user info
│   │   ├── login/         # Authentication components
│   │   └── notification/  # Notification system
│   ├── lib/               # Firebase configuration and utilities
│   ├── slices/            # Redux slices for state management
│   ├── store.js           # Redux store configuration
│   ├── App.jsx            # Main application component
│   └── main.jsx           # Application entry point
├── package.json
├── vite.config.js
└── README.md
```

## Usage

1. **Sign Up/Login**: Create an account or log in with existing credentials
2. **Add Friends**: Use the "Add User" feature to connect with other users
3. **Start Chatting**: Select a user from your list to begin a conversation
4. **Send Messages**: Type your message and press Enter or click Send
5. **Share Files**: Click the attachment icon to share images or documents
6. **View Details**: Click on user avatars to see profile information

## Support

If you encounter any issues or have questions:

- Check the Firebase Console for any authentication or database errors
- Ensure your `.env` file contains the correct API key
- Verify that Firebase services (Auth, Firestore, Storage) are enabled in your project
