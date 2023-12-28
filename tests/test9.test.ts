import { Builder, By, WebDriver } from "selenium-webdriver";
import { createDriver, quitDriver } from "../core/config/driver-setup";

import { readFileSync } from "fs";
import * as path from "path";
const dataFilePath = path.resolve(__dirname, "../core/data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));
import { beforeAll, afterAll, test } from '@jest/globals';

import 'jest'; 


import { Category } from "../core/page-objects/category";

let driver: WebDriver
let category: Category ;

beforeAll(async () => {
    driver = await createDriver(testData.url.homepage);
    category = new Category(driver);
    

}, 500000);

test("test", async () => {
    await category.clickoureditions();


}, 500000);


afterAll(async() => {
    await quitDriver(driver);
}, 500000);
