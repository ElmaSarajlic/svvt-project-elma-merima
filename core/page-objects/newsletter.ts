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



export class Newsletter extends BasePage {
    constructor(driver: WebDriver) {
        super(driver);
    }

    async findFooter() {
      const footer = await this.driver.findElement(By.xpath('//footer[@class="bg-dark footer"]'));
      await this.scrollToElement(footer);
    }

    private inputemailfield = By.xpath('//input[@class="form-control me-md-2 mb-2 mb-md-0"]');

    async inputemail(){
      await this.fillInputField(this.inputemailfield, testData.data.email);
    }

    private registracijaButton = By.xpath('//button[@class="btn btn-primary flex-shrink-0"]')

    async clickregistracijaButton(){
      await this.findElementAndClickEnsuringVisible(this.registracijaButton);
    }


    
}