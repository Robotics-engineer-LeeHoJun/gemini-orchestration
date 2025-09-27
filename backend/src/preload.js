const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  createSession: (projectPath) => ipcRenderer.invoke('create-session', projectPath),
  sendMessage: (message) => ipcRenderer.invoke('send-message', message),
});
