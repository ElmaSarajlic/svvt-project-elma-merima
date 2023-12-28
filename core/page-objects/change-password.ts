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



export class Password extends BasePage {
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

    private lozinkabox = By.xpath('//h5[contains(text(), "Promijeni lozinsku")]');

    async findlozinkabox(){
        await this.findElement(this.lozinkabox);
    }

    private oldpasswordfield = By.id('current_password');

    async filloldpasswordfield(){
        await this.fillInputField(this.oldpasswordfield, testData.data.password);
    }

    private newpasswordfield = By.id('new-password');

    async fillnewpasswordfield(){
        await this.fillInputField(this.newpasswordfield, testData.data.newPassword);
    }

    private newpasswordfield2 = By.id('confirm_password');

    async fillnewpasswordfield2(){
        await this.fillInputField(this.newpasswordfield2, testData.data.newPassword);
    }

    private confirmpasswordbutton = By.xpath('//button[@name="hesap"]');

    async clickconfirmpasswordbutton(){
        await this.findElementAndClickEnsuringVisible(this.confirmpasswordbutton);
    }

    private logout = By.xpath('//a[@href="logout.php"]');

    async clicklogout(){
        await this.findElementAndClickEnsuringVisible(this.logout);
    }

    private usericon3 = By.xpath('//div[@class="nav-item"]//a[@href="https://buybook.ba/moj-nalog"]');

    async clickusericon3(){
        await this.findElementAndClickEnsuringVisible(this.usericon3);
    }

    private emailaddress2 = By.id("email_1");
    
    async enteremailaddress2(){
        await this.fillInputField(this.emailaddress2, testData.data.email);
    }

    private password2 = By.id("exampleInputPassword01");

    async enterpassword2(){
        await this.fillInputField(this.password2, testData.data.newPassword);
    }

    private loginbutton2 = By.xpath('//button[@name="giris"]');

    async clickloginbutton2(){
        await this.findElementAndClickEnsuringVisible(this.loginbutton2);
    }
    
}