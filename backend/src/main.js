const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const { createSession } = require('./services/sessionService');
const { sendMessage } = require('./services/geminiService');

function createWindow () {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  });

  // and load the index.html of the app.
  const indexPath = path.join(__dirname, '..', '..', 'frontend', 'dist', 'index.html');
  mainWindow.loadURL(`file://${indexPath}`);


  // Open the DevTools.
  mainWindow.webContents.openDevTools();
}

app.whenReady().then(() => {
  ipcMain.handle('create-session', async (event, projectPath) => {
    return await createSession(projectPath);
  });

  ipcMain.handle('send-message', async (event, message) => {
    // This is a placeholder. In a real app, you'd get the session ID differently.
    const sessionId = 1;
    return await sendMessage(sessionId, message, []);
  });

  createWindow();

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});
