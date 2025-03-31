require('dotenv').config();
import path from 'path';
import { config } from './wdio.shared.conf';

if (!process.env.BROWSERSTACK_USERNAME || !process.env.BROWSERSTACK_KEY) {
  throw new Error("BROWSERSTACK_USERNAME or BROWSERSTACK_KEY is not set in .env file");
}

config.user = process.env.BROWSERSTACK_USERNAME;
config.key = process.env.BROWSERSTACK_KEY;
config.specs = ["./test/specs/android/*.js"];
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
config.services = ['browserstack'];

export { config };
