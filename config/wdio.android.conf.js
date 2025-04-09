import path from "path";
import { config } from "./wdio.shared.conf.js";

config.port = 4723;
config.specs = ["../test/specs/android/add-note-screen.spec.js"]
config.capabilities = [
  {
    "appium:platformName": "Android",
    "appium:deviceName": "Pixel 4",
    "appium:platformVersion": "12.0",
    "appium:automationName": "UiAutomator2",
    "appium:app": path.join(process.cwd(), "app/android/ColorNote_Notepad.apk"),
    "appium:autoGrantPermissions": true,
  },
];

export { config };
