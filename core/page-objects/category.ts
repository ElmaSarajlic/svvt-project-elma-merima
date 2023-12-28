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



export class Category extends BasePage {
    constructor(driver: WebDriver) {
        super(driver);
    }

    private categoryheader = By.xpath('//div[@class="collapse navbar-collapse w-100"]');

    async locatecategoryheader(){
      await this.findElement(this.categoryheader);
    }

    private oureditions = By.xpath('//a[@href="https://buybook.ba/kategorija/nasa-izdanja-125"]');

    async clickoureditions(){
      await this.findElementAndClickEnsuringVisible(this.oureditions);
    }

    private booknašaizdanja = By.xpath('//a[@href="proizvod/rezervni-upaljac-5773"]');

    async clickbooknašaizdanja(){
      await this.findElementAndClickEnsuringVisible(this.booknašaizdanja);
    }

    async findIzdavača() {
      const izdavač = await this.driver.findElement(By.xpath('//p[contains(text(), "Izdavač:")]'));
      await this.scrollToElement(izdavač);
    }

    private izdavačcompare = By.xpath('//p[contains(text(), "Buybook")]');

    async compareizdavača(){
      await this.checkMatchingElements(this.izdavačcompare, testData.data.izdavač);
    }

    
}