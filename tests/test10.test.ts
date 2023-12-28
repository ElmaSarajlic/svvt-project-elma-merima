import { Builder, By, WebDriver } from "selenium-webdriver";
import { createDriver, quitDriver } from "../core/config/driver-setup";

import { readFileSync } from "fs";
import * as path from "path";
const dataFilePath = path.resolve(__dirname, "../core/data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));
import { beforeAll, afterAll, test } from '@jest/globals';

import 'jest'; 

import { Footer } from "../core/page-objects/footerhyperlinks";

let driver: WebDriver;
let footer: Footer;

beforeAll(async () => {
    driver = await createDriver(testData.url.homepage);
    footer = new Footer(driver);
}, 500000);

test("Footer Instagram Link Test", async () => {
    await footer.findfooter();
    await footer.clickinstalink();

    // Switch to the new tab if it opens in a new tab
    let handles = await driver.getAllWindowHandles();
    if (handles.length > 1) {
        await driver.switchTo().window(handles[1]);
    }

    await footer.checkinstaprofile();
    await new Promise((resolve) => setTimeout(resolve, 5000));


    // Optional: Close the new tab and switch back to the main window
    if (handles.length > 1) {
        await driver.close();
        await driver.switchTo().window(handles[0]);
        await new Promise((resolve) => setTimeout(resolve, 5000));

    }


}, 500000);

afterAll(async () => {
    await quitDriver(driver);
}, 500000);
