import { Builder, By, WebDriver } from "selenium-webdriver";
import { createDriver, quitDriver } from "../core/config/driver-setup";

import { readFileSync } from "fs";
import * as path from "path";
const dataFilePath = path.resolve(__dirname, "../core/data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));
import { beforeAll, afterAll, test } from '@jest/globals';

import 'jest'; 


import { Newsletter } from "../core/page-objects/newsletter";

let driver: WebDriver
let newsletter: Newsletter ;

beforeAll(async () => {
    driver = await createDriver(testData.url.homepage);
    newsletter = new Newsletter(driver);
    

}, 500000);

test("Newsletter subscription test", async () => { 
    await newsletter.findFooter();
    await newsletter.inputemail();
    await newsletter.clickregistracijaButton();
    
    await new Promise((resolve) => setTimeout(resolve, 5000));




    






}, 500000);


afterAll(async() => {
    await quitDriver(driver);
}, 500000);
