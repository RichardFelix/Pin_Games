require("./pin_games.js");
const { app, BrowserWindow, Menu, shell } = require("electron");

/***************************
       Electron Config
***************************/
function createWindow() {
  let mainWindow = new BrowserWindow({
    width: 1920,
    height: 1080,
    icon: __dirname + "/src/public/img/icon/icon.ico",
    webPreferences: {
      nodeIntegration: false,
    },
  });

  let menu = Menu.buildFromTemplate([
    {
      label: "Menu",
      submenu: [
        {
          label: "About",
          click() {
            shell.openExternal("https://github.com/RichardFelix/Pin_Games");
          },
        },
        {
          type: "separator",
        },
        {
          label: "Exit",
          click() {
            app.quit();
          },
        },
      ],
    },
  ]);

  Menu.setApplicationMenu(menu);

  mainWindow.loadURL(`http://localhost:3569/`);
  // mainWindow.webContents.openDevTools();
  // mainWindow.webContents.openDevTools({ mode: "attach" });

  mainWindow.on("close", (event) => {
    mainWindow = null;
  });
}

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.whenReady().then(() => {
  createWindow();

  app.on("activate", function () {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});
