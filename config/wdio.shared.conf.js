import path from "path";

export const config = {
    runner: 'local',
    // specs: [
    //     './test/specs/android/*.js'
    // ],
    exclude: [],
    maxInstances: 10,
    // services: ['appium'],
    hostname: 'localhost',
    // port: 4723,
    path: '/wd/hub',

    // capabilities: [{
    //     'appium:platformName': 'Android',
    //     'appium:deviceName': 'Pixel 4',
    //     'appium:platformVersion': '12.0',
    //     'appium:automationName': 'UiAutomator2',
    //     'appium:app': path.join(process.cwd(), 'app/android/ColorNote_Notepad.apk'),
    //     'appium:autoGrantPermissions': true
    // }],

    logLevel: 'info',
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    }
};
