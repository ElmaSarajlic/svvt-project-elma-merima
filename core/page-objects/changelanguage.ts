import { By, WebDriver, until } from "selenium-webdriver";
import BasePage from "./base-page";
import { readFileSync } from "fs";
import * as path from "path";

let basePage: BasePage;
let testData: any; 

const dataFilePath = path.resolve(__dirname, "../data/data.json");

try {
  const jsonData = readFileSync(dataFilePath, "utf8");
  testData = JSON.parse(jsonData);
} catch (error) {
  console.error('Error parsing JSON:', error);
}



export class Language extends BasePage {
    constructor(driver: WebDriver) {
        super(driver);
    }
    private flagBtn: By = By.xpath("//div  [@class='dropdown mx-2 nav-item']");


    async clickFlagButton(){
        await this.findElementAndClick(this.flagBtn);
    }
   
    private chosenLanguage: By = By.xpath('//div[@class="dropdown-menu mt-2 shadow show"]//a[@href="https://buybook.ba/dil.php?dil=en"]');

    async clickChosenLanguage(){
        await this.findElementAndClick(this.chosenLanguage);
    }


    private flagBtn2: By = By.xpath('//i[@class="bi bi-flag text-white"]');


    async clickFlagButton2(){
        await this.findElementAndClick(this.flagBtn);
    }

    private checklanguage = By.xpath('//div[@class="dropdown-menu mt-2 shadow show"]//a[@href="https://buybook.ba/dil.php?dil=en"]');

    async comparechangelanguage(){
        await this.checkMatchingElements(this.checklanguage, testData.data.language)
    }

    

}