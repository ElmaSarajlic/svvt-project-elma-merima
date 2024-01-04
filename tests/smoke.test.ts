import { Builder, By, WebDriver } from "selenium-webdriver";
import { createDriver, quitDriver } from "../core/config/driver-setup";

import { readFileSync } from "fs";
import * as path from "path";
const dataFilePath = path.resolve(__dirname, "../core/data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));
import { beforeAll, afterAll, test } from '@jest/globals';

import 'jest'; 


import { Smoke } from "../core/page-objects/smoketest";

let driver: WebDriver
let smoke: Smoke ;

beforeAll(async () => {
    driver = await createDriver(testData.url.homepage);
    smoke = new Smoke(driver);
    

}, 500000);

test("Smoke test", async () => { 
    await smoke.clickProduct();
    await smoke.addtoCartButton();
    await new Promise((resolve) => setTimeout(resolve, 5000));
    await smoke.clickcartbutton();
    await new Promise((resolve) => setTimeout(resolve, 5000));
    await smoke.clickzavrsinarudzbubutton();
    await smoke.inputimeiprezime();
    await smoke.inputemail();
    await smoke.inputphonenumber();
    await smoke.inputgrad();
    await smoke.inputokrug();
    await smoke.clickcountry();
    await smoke.inputzipcode();
    await new Promise((resolve) => setTimeout(resolve, 5000));
    await smoke.inputadresafield();
    await smoke.inputnapomenafield();
    await new Promise((resolve) => setTimeout(resolve, 5000));
    await smoke.paymenttypefind();
    await new Promise((resolve) => setTimeout(resolve, 5000));

    await smoke.choosepaymenttype();
    await new Promise((resolve) => setTimeout(resolve, 5000));

    //await smoke.clickfinalizirajnarudzbubutton(); //da mi ne dodje knjiga nikakva na adresu








    






}, 500000);


afterAll(async() => {
    await quitDriver(driver);
}, 500000);
