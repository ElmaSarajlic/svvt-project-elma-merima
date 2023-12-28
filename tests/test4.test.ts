import { Builder, By, WebDriver } from "selenium-webdriver";
import { createDriver, quitDriver } from "../core/config/driver-setup";

import { readFileSync } from "fs";
import * as path from "path";
const dataFilePath = path.resolve(__dirname, "../core/data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));
import { beforeAll, afterAll, test } from '@jest/globals';

import 'jest'; 


import { Password } from "../core/page-objects/change-password";

let driver: WebDriver
let password: Password ;

beforeAll(async () => {
    driver = await createDriver(testData.url.homepage);
    password = new Password(driver);
    

}, 500000);

test("Changing password test", async () => {
    await password.clickusericon();
    await password.inputemail();
    await password.inputpassword();
    await password.clickprijava();
    await new Promise((resolve) => setTimeout(resolve, 5000));
    await password.clickusericonagain();
    await password.findlozinkabox();
    await password.filloldpasswordfield();
    await password.fillnewpasswordfield();
    await password.fillnewpasswordfield2();
    await password.clickconfirmpasswordbutton();
    await new Promise((resolve) => setTimeout(resolve, 5000));
    //to test if it is changed we have to log out and log in again with newPassword. If it is successfull then the password has been succesfully changed.
    await password.clicklogout();
    await password.clickusericon3();
    await password.enteremailaddress2();
    await new Promise((resolve) => setTimeout(resolve, 5000));

    await password.enterpassword2();
    await new Promise((resolve) => setTimeout(resolve, 5000));

    await password.clickloginbutton2();
    await new Promise((resolve) => setTimeout(resolve, 5000));




}, 500000);


afterAll(async() => {
    await quitDriver(driver);
}, 500000);
