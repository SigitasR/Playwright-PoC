import {Page, expect} from "@playwright/test";

export class BarboraCheckoutPage {

    private checkoutNextButton = '.b-checkout--continue-btn'
    private checkoutCartTable = 'table.b-checkout--tableview'
    private checkoutDeliveryTable = 'div.b-deliverytime--body-checkout'

    constructor(private readonly page: Page) {
    }

    async clickNextButton() {
        await this.page
            .locator(this.checkoutNextButton)
            .click()
    }

    async lookForCartTable() {
        await expect(await this.page.locator(this.checkoutCartTable))
            .toBeVisible()
    }

    async checkDeliveryTable() {
        const tableTexts = await this.getDeliveryTimeTableCellTexts()
        expect(tableTexts.some(x => x.includes('€'))).toBeTruthy()
    }

    private async getDeliveryTimeTableCellTexts() {
        const columns = await ((await this.page.waitForSelector(this.checkoutDeliveryTable)).$$('//div[@class="b-deliverytime--col"]//div'))
        const tableTexts: Array<string> = []
        for (let i = 0; i < columns.length; i++) {
            tableTexts.push(await columns[i].textContent())
        }
        return tableTexts
    }

}
