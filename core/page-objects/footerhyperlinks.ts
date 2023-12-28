import { By, WebDriver, until } from "selenium-webdriver";
import BasePage from "./base-page";
import { readFileSync } from "fs";
import * as path from "path";

let basePage: BasePage;
let testData: any; // Change the type based on the structure of your JSON data

const dataFilePath = path.resolve(__dirname, "../data/data.json");

try {
  const jsonData = readFileSync(dataFilePath, "utf8");
  testData = JSON.parse(jsonData);
} catch (error) {
  console.error('Error parsing JSON:', error);
  // Handle the error gracefully, log it, or throw it further.
}



export class Footer extends BasePage {
    constructor(driver: WebDriver) {
        super(driver);
    }

    private instalink = By.xpath('//a[@class="me-3"]//i[@class="bi bi-instagram"]');

    async clickinstalink(){
      await this.findElementAndClickEnsuringVisible(this.instalink);
    }

    
}