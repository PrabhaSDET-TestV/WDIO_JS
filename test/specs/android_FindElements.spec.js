import { $, $$, expect, driver } from "@wdio/globals";

describe("Android Elements Tests", () => {
    it("Find Element by Accessbility ID", async () => {
        //Find Element by Accessbility ID
        const appOption = await $('~App');
        
        //Click on Element
        await appOption.click();

        //Assertion
        const actionBar = await $('~Action Bar');
        expect(actionBar).toBeExisting();
    })

    it("Find Element by Class Name", async () => {
        //Find Element by Class Name
        const className = await $('android.widget.TextView');

        console.log(className.getText());

        //Assertion
        await expect(className).toHaveText("API Demos")
    })

    it("Find Elements by XPath", async () => {
        //XPath - (//tagName[@attribute=value])
        await $('//android.widget.TextView[@content-desc="Alert Dialogs"]').click();

        //Find by Resource ID
        await $('//android.widget.Button[@resource-id="io.appium.android.apis:id/select_button"]').click();

        //Find by Test
        await $('//android.widget.TextView[@text="Command two"]').click();

        //Find by Class - Assertion
        const textAssertion = await $('//android.widget.TextView');
        await expect(textAssertion).toHaveText("You selected: 1 , Command two")
    });

    it("Find Element by Ui Automator", async () => {
        await $('android=new UiSelector().textContains("Alert")').click();
    });

    it("Find Multiple Elements", async() => {
        const expectedList = ["API Demos", "Access'ibility","Accessibility","Animation",
            "App","Content","Graphics","Media","NFC","OS","Preference","Text","Views"
        ];
        const actualList = [];

        //Find Multiple Elements
        const textList = await $$('android.widget.TextView');

        //Loop through items
        for(let element of textList) {
            actualList.push(await element.getText());
        }

        //Assert the List
        await expect(actualList).toEqual(expectedList);
    });

    it("Working with text field", async()=>{
        //Access the auto complete screen
        await $('~Views').click();
        await $('//*[@text="Auto Complete"]').click();
        await $('//*[@content-desc="1. Screen Top"]').click();

        //Enter the company name
        const textField = await $('//*[@resource-id="io.appium.android.apis:id/edit"]');
        await textField.addValue("Canada");

        //Verify the country name
        await expect(textField).toHaveText("Canada");
    });
})