import { Builder, By, WebDriver } from "selenium-webdriver";
import { createDriver, quitDriver } from "../core/config/driver-setup";

import { readFileSync } from "fs";
import * as path from "path";
const dataFilePath = path.resolve(__dirname, "../core/data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));
import { beforeAll, afterAll, test } from '@jest/globals';

import 'jest'; 


import { DeleteProduct } from "../core/page-objects/deleteproduct";

let driver: WebDriver
let deleteproduct: DeleteProduct ;

beforeAll(async () => {
    driver = await createDriver(testData.url.homepage);
    deleteproduct = new DeleteProduct(driver);
    

}, 500000);

test("Delete product from cart test", async () => { 
    await deleteproduct.clickProduct();
    await deleteproduct.addtoCartButton();
    await new Promise((resolve) => setTimeout(resolve, 5000));
    await deleteproduct.addtoCartButton();
    await new Promise((resolve) => setTimeout(resolve, 5000));
    await deleteproduct.clickcartbutton();
    await new Promise((resolve) => setTimeout(resolve, 5000));
    await deleteproduct.clickXBtn();
    await new Promise((resolve) => setTimeout(resolve, 5000));
    await deleteproduct.clickcartbutton2();
    await new Promise((resolve) => setTimeout(resolve, 5000));
    await deleteproduct.comparecartstatus();








}, 500000);


afterAll(async() => {
    await quitDriver(driver);
}, 500000);
