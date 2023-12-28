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



export class Logout extends BasePage {
    constructor(driver: WebDriver) {
        super(driver);
    }

    private usericon = By.xpath('//div[@class="nav-item"]//a[@href="https://buybook.ba/moj-nalog"]');

    async clickusericon(){
      await this.findElementAndClickEnsuringVisible(this.usericon);
    }

    private emailinput = By.id("email_1");

    async inputemail(){
        await this.fillInputField(this.emailinput, testData.data.email);
    }

    private passwordinput = By.id("exampleInputPassword01");

    async inputpassword(){
        await this.fillInputField(this.passwordinput, testData.data.password);
    }

    private prijavabutton = By.xpath('//button[@class="btn btn-primary w-100"]');

    async clickprijava(){
        await this.findElementAndClickEnsuringVisible(this.prijavabutton);
    }

    private usericonagain = By.xpath('//div[@class="nav-item"]//a[@href="https://buybook.ba/moj-nalog"]');

    async clickusericonagain(){
      await this.findElementAndClickEnsuringVisible(this.usericonagain);
    }

    private sidebar = By.xpath('//div[@class="col-lg-4 pb-4 pb-lg-0 col-xxl-3  pe-xxl-5"]');

    async locatesidebar(){
        await this.findElement(this.sidebar);
    }

    private logoutbutton = By.xpath('//a[@href="logout.php"]');

    async clicklogoutbutton(){
      await this.findElementAndClickEnsuringVisible(this.logoutbutton);
    }

    private usericon2 = By.xpath('//div[@class="nav-item"]//a[@href="https://buybook.ba/moj-nalog"]');

    async clickusericon2(){
      await this.findElementAndClickEnsuringVisible(this.usericon2);
    }

    private  prijavaheader = By.xpath('//div[@class="card-header bg-transparent py-3"]');

    async compareprijavaheader(){
        await this.checkMatchingElements(this.prijavaheader, testData.data.prijava);
    }


}