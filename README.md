# Gemini GUI Chat Application

This project is a desktop GUI application for interacting with the Gemini CLI, built with Electron and React.

## Prerequisites
- Node.js and npm installed.

## Setup
1. Clone the repository.
2. Install dependencies for both backend and frontend:
   ```bash
   cd backend
   npm install
   cd ../frontend
   npm install
   ```

## Running the Application
1. Start the application from the `backend` directory:
   ```bash
   cd backend
   npm start
   ```
   (You will need to add a `start` script to the `backend/package.json` that runs `electron .`)

2. The application window will open.
3. Click the "Create Session" button.
4. A new chat session will start.

## Basic Usage
1. Type a message in the input box and press Enter.
2. The agent should respond in the chat window.
3. Click the attachment icon to upload a file or image.
4. The uploaded file/image will appear in the chat, and the agent will process it.
