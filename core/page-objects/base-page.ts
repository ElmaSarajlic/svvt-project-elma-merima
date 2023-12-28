import { By, WebDriver, WebElement, until } from "selenium-webdriver";
import { expect } from '@jest/globals'; // Import expect from Jest (if needed)

export default class BasePage {
    protected driver: WebDriver;

    constructor(driver: WebDriver) {
        this.driver = driver;
    }

    async getTitle() {
        return await this.driver.getTitle();
    }

    async checkMatchingElements(selector: By, matchingItem: string) {
        const element = await this.findElement(selector);
        const elementText = await element.getText();
        expect(elementText).toMatch(matchingItem);
    }

    async checkTitle(page: { getTitle: () => Promise<string>}, page_title: string) {
        let title = await page.getTitle();
        expect(title).toMatch(page_title);
    }

    async waitAndClick(elementLocator: By, timeout: number) {
        await this.driver.wait(
            until.elementLocated(elementLocator), timeout).click();
    }

    async waitForElement(elementLocator: By, timeout: number) {
        return this.driver.wait(until.elementLocated(elementLocator), timeout);
    }

    async hoverElement(element: WebElement) {
        const actions = this.driver.actions({ bridge: true });
        await actions
            .move({ duration: 2000, origin: element, x: 0, y: 0 })
            .perform();
    }

    async scrollToElement(element: WebElement): Promise<void> {
        await this.driver.executeScript("arguments[0].scrollIntoView(true);", element);
    }

    async fillInputField(inputField: By, text: string) {
        await (await this.findElement(inputField)).sendKeys(text);
    }

    async findElementAndClick(selector: By) {
        await this.driver.wait(
            until.elementLocated(selector), 10000)
            .click();
    }

    async findElement(selector: By) {
        return await this.driver.findElement(selector);
    }

    async findElementAndEnsureVisible(selector: By) {
        const element = await this.waitForElement(selector, 10000);
        await this.driver.executeScript(
            "arguments[0].scrollIntoView(true);",
            element
        );
        await this.driver.sleep(1000);
        return element;
    }

    async findElementAndClickEnsuringVisible(selector: By) {
        const element = await this.findElementAndEnsureVisible(selector);
        await this.hoverElement(element);
        await element.click();
    }
}
