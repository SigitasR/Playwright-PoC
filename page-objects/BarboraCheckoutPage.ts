import { Page, expect } from "@playwright/test";

export class BarboraCheckoutPage {

    private checkoutNextButton = async () => this.page.locator('.b-checkout--continue-btn')
    private checkoutCartTable = async () => this.page.locator("table.b-checkout--tableview")
    private checkoutDeliveryTable = async () => this.page.waitForSelector("div.b-deliverytime--body-checkout")

    readonly page: Page

    constructor(page: Page) {
        this.page = page
    }

    async clickNextButton() {
        await (await this.checkoutNextButton()).click()
    }

    async lookForCartTable() {
        await expect(await this.checkoutCartTable()).toBeVisible()
    }

    async checkDeliveryTable() {
        const tableTexts = await this.getDeliveryTimeTableCellTexts()
        expect(tableTexts.some(x => x.includes('€'))).toBeTruthy()
    }

    private async getDeliveryTimeTableCellTexts() {
        const columns = await (await this.checkoutDeliveryTable()).$$('//div[@class="b-deliverytime--col"]//div')
        const tableTexts: Array<string> = []
        for (let i = 0; i < columns.length; i++) {
            tableTexts.push(await columns[i].textContent())
        }
        return tableTexts
    }

}