const { app, BrowserWindow } = require("electron");
const url = require("url");
const path = require("path");
app.on("ready", () => {
  let mainWindow = new BrowserWindow({
    width: 1280,
    height: 720,
    webPreferences: {
      webSecurity: true,
    }
  });
  mainWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, "/src/html/profile.html"),
      protocol: "file",
      slashes: true
    })
  );
});
