import { Builder, By, WebDriver } from "selenium-webdriver";
import { createDriver, quitDriver } from "../core/config/driver-setup";

import { readFileSync } from "fs";
import * as path from "path";
const dataFilePath = path.resolve(__dirname, "../core/data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));
import { beforeAll, afterAll, test } from '@jest/globals';

import 'jest'; 


import { Logout } from "../core/page-objects/logout";

let driver: WebDriver
let logout: Logout ;

beforeAll(async () => {
    driver = await createDriver(testData.url.homepage);
    logout = new Logout(driver);
    

}, 500000);

test("Logout test", async () => { 
    await logout.clickusericon();
    await logout.inputemail();
    await logout.inputpassword();
    await logout.clickprijava();
    await new Promise((resolve) => setTimeout(resolve, 5000));
    await logout.clickusericonagain();
    await logout.locatesidebar();
    await logout.clicklogoutbutton();
    await new Promise((resolve) => setTimeout(resolve, 5000));
    await logout.clickusericon2();
    await logout.compareprijavaheader();
    await new Promise((resolve) => setTimeout(resolve, 5000));




    






}, 500000);


afterAll(async() => {
    await quitDriver(driver);
}, 500000);
