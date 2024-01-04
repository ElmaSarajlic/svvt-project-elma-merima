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

    private zavrsinarudzbubutton = By.xpath('//a[@class="btn btn-block btn-dark w-100 mb-3"]');
    
    async clickzavrsinarudzbubutton(){
        await this.findElementAndClickEnsuringVisible(this.zavrsinarudzbubutton);

    }
    

    private imeiprezimefield = By.xpath('//input[@placeholder="Ime i prezime"]');

    async inputimeiprezime(){
        await this.fillInputField(this.imeiprezimefield, testData.data.imeiprezime);
    }

    private emailfield = By.xpath('//input[@placeholder="Vaša e-mail adresa"]');

    async inputemail(){
        await this.fillInputField(this.emailfield, testData.data.email);
    }

    private phonenumberfield = By.xpath('//input[@placeholder="Vaš broj telefona"]');

    async inputphonenumber(){
        await this.fillInputField(this.phonenumberfield, testData.data.phone);
    }

    private gradfield = By.xpath('//input[@placeholder="Grad"]');

    async inputgrad(){
        await this.fillInputField(this.gradfield, testData.data.grad);
    }

    private okrugfield = By.xpath('//input[@placeholder="Okrug"]');

    async inputokrug(){
        await this.fillInputField(this.okrugfield, testData.data.okrug);
    }

    private countrybutton = By.xpath('//select[@class="form-select"]//option[contains(text(), "Bosna i Hercegovina")]');

    async clickcountry(){
        await this.findElementAndClick(this.countrybutton);
    }

    private zipcode = By.xpath('//input[@placeholder="Poštanski kod"]');

    async inputzipcode(){
        await this.fillInputField(this.zipcode, testData.data.zip);
    }

    private adresafield = By.xpath('//textarea[@placeholder="Adresa"]');

    async inputadresafield(){
        await this.fillInputField(this.adresafield, testData.data.adresa);
    }

    private napomenafield = By.xpath('//textarea[@placeholder="Možete napisati napomenu o narudžbi ili podatke o računu"]');

    async inputnapomenafield(){
        await this.fillInputField(this.napomenafield, testData.data.napomena);
    }

    async paymenttypefind() {
        const paymenttypefind = await this.driver.findElement(By.xpath('//div[@class="col-12 text-center pt-3"]'));
        await this.scrollToElement(paymenttypefind);
      }

    private paymenttype = By.xpath('//div[@data-bs-target="#paypalff"]');

    async choosepaymenttype(){
        await this.findElementAndClickEnsuringVisible(this.paymenttype);
    }
}