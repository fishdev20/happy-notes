import { app as n, BrowserWindow as t, ipcMain as i } from "electron";
import o from "node:path";
import { fileURLToPath as d } from "node:url";
const r = o.dirname(d(import.meta.url));
process.env.APP_ROOT = o.join(r, "..");
const s = process.env.VITE_DEV_SERVER_URL, _ = o.join(process.env.APP_ROOT, "dist-electron"), a = o.join(process.env.APP_ROOT, "dist");
process.env.VITE_PUBLIC = s ? o.join(process.env.APP_ROOT, "public") : a;
let e;
function l() {
  e = new t({
    // show: false,
    icon: o.join(process.env.VITE_PUBLIC, "electron-vite.svg"),
    webPreferences: {
      preload: o.join(r, "preload.mjs")
    },
    frame: !1,
    autoHideMenuBar: process.env.NODE_ENV !== "development",
    titleBarStyle: "hidden",
    title: "Happy notes",
    hasShadow: !0,
    roundedCorners: !0,
    width: 1280,
    height: 800
  }), e.webContents.on("did-finish-load", () => {
    e == null || e.webContents.send("main-process-message", (/* @__PURE__ */ new Date()).toLocaleString());
  }), s ? e.loadURL(s) : e.loadFile(o.join(a, "index.html"));
}
n.on("window-all-closed", () => {
  process.platform !== "darwin" && (n.quit(), e = null);
});
n.on("activate", () => {
  t.getAllWindows().length === 0 && l();
});
n.whenReady().then(l).finally(() => {
  i.on("minimize", () => {
    e.minimize();
  }), i.on("maximize", () => {
    e.isMaximized() ? e.unmaximize() : e.maximize();
  }), i.on("close", () => {
    e.close();
  });
});
export {
  _ as MAIN_DIST,
  a as RENDERER_DIST,
  s as VITE_DEV_SERVER_URL
};
