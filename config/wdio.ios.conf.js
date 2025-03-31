import path from "path";
import { config } from "./wdio.shared.conf";

config.port = 4723;
config.specs =  ["./test/specs/ios/*.js"];
config.capabilities = [
  {
    platformName: "ios",
    "appium:platformVersion": "16.0",
    "appium:deviceName": "iPhone 14 Pro",
    "appium:automationName": "XCUITest",
    "appium:app": path.join(process.cwd(), "app/ios/wdioNativeDemoApp.app"),
  }
]
export { config };