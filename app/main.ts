import { app, BrowserWindow } from "electron";
import * as path from "path";

let mainWindow: Electron.BrowserWindow;

function createWindow() {
  const windowParams = {
    width: 800,
    height: 600,
    minWidth: 540,
    minHeight: 400,
    webPreferences: {
      nodeIntegration: true
    }
  }
  mainWindow = new BrowserWindow(windowParams);
  mainWindow.setMenuBarVisibility(false)

  mainWindow.loadFile(path.join(__dirname, "./index.html"));
  mainWindow.webContents.openDevTools();

  mainWindow.on("closed", () => mainWindow = null!);
}

app.on("ready", createWindow);
