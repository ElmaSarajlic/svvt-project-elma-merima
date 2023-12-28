import { Builder, By, WebDriver } from "selenium-webdriver";
import { createDriver, quitDriver } from "../core/config/driver-setup";

import { readFileSync } from "fs";
import * as path from "path";
const dataFilePath = path.resolve(__dirname, "../core/data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));
import { beforeAll, afterAll, test } from '@jest/globals';

import 'jest'; 


import { Footer } from "../core/page-objects/footerhyperlinks";

let driver: WebDriver
let footer: Footer ;

beforeAll(async () => {
    driver = await createDriver(testData.url.homepage);
    footer = new Footer(driver);
    

}, 500000);

test("test", async () => {
    await footer.clickinstalink();


}, 500000);


afterAll(async() => {
    await quitDriver(driver);
}, 500000);
