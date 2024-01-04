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



export class Smoke extends BasePage {
    constructor(driver: WebDriver) {
        super(driver);
    }

    private productBtn: By = By.xpath('//a [@class="slick-slide slick-current slick-active"]//div[@class="productCustomCard d-flex flex-wrap align-items-center justify-content-center px-1"]');


    async clickProduct(){
        await this.findElementAndClickEnsuringVisible(this.productBtn);
    }

    private addtocartBtn: By = By.xpath("//div [@class='cart-button col-12 d-flex justify-content-start align-items-center gap-2']");

    async addtoCartButton(){
        await this.findElementAndClick(this.addtocartBtn);
    }

    private CartBtn: By= By.xpath("//a [@data-bs-toggle='modal']");

    async clickcartbutton(){
        await this.findElementAndClick(this.CartBtn);
    }

    
}