describe("Android Native", () => {
    it("Package and Activity", async()=>{
        //Access activity
        await driver.startActivity("io.appium.android.apis", "io.appium.android.apis.app.AlertDialogSamples");

        //Pause 3S
        await driver.pause(3000);

        //Assertion
        await expect($('//*[@text="App/Alert Dialogs"]')).toExist();
    });

    it("Working with Dialog boxes", async () => {
        //Click on the first dialog
        await $('//*[@resource-id="io.appium.android.apis:id/two_buttons"]').click();

        //Accept alert
        // await driver.acceptAlert();
        
        //Dismiss alert
        // await driver.dismissAlert();

        //Get alert text
        console.log("Alert Text, ", await driver.getAlertText());

        //Click on the OK button
        await $('//*[@resource-id="android:id/button1"]').click();

        //Assertion - Alert box no longer visible
        await expect($('//*[@resource-id="android:id/alertTitle"]')).not.toExist();
    });

    it("Working with vertival scrolling", async()=> {
        await $('~App').click();
        await $('~Activity').click();

        //Scroll to the end (Not stable if element gets moved)
        // await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)');

        //ScrollTextIntoView
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Secure Surfaces")')

        await $('~Secure Surfaces').click();

        //Assertion
        await expect($('~Secure Dialog')).toExist();
    });

    it("Horizontal scrolling", async()=>{
        await driver.startActivity("io.appium.android.apis","io.appium.android.apis.view.Gallery1");

        //Horizontal scrolling
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()')
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollBackward()')

        await driver.pause(3000);
    })

    it("Working with Date picker", async()=>{
        //Access the Date Picker
        await driver.startActivity("io.appium.android.apis","io.appium.android.apis.view.DateWidgets1");

        //Get Current date
        const date = await $('//*[@resource-id="io.appium.android.apis:id/dateDisplay"]');
        const currentDate = await date.getText();

        //Click on the Date change button
        await $('~change the date').click();

        //Scroll right to the next month
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()')

        //Select the 10 date
        await $('//*[@text="10"]').click();

        //Click the Ok button
        await $('//*[@resource-id="android:id/button1"]').click();

        //Verify the updated Date
        await expect(await date.getText()).not.toEqual(currentDate);
    });
})