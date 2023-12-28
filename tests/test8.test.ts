import { Builder, By, WebDriver } from "selenium-webdriver";
import { createDriver, quitDriver } from "../core/config/driver-setup";

import { readFileSync } from "fs";
import * as path from "path";
const dataFilePath = path.resolve(__dirname, "../core/data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));
import { beforeAll, afterAll, test } from '@jest/globals';

import 'jest'; 


import { Language } from "../core/page-objects/changelanguage";

let driver: WebDriver
let language: Language ;

beforeAll(async () => {
    driver = await createDriver(testData.url.homepage);
    language = new Language(driver);
    

}, 500000);

test("Delete product from cart test", async () => { 
    await language.clickFlagButton();
    await language.clickChosenLanguage();
    await new Promise((resolve) => setTimeout(resolve, 5000));
    await language.clickFlagButton2();
    await new Promise((resolve) => setTimeout(resolve, 5000));
    await language.comparechangelanguage();
    await new Promise((resolve) => setTimeout(resolve, 5000));





}, 500000);


afterAll(async() => {
    await quitDriver(driver);
}, 500000);
