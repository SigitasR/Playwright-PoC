import { expect, Locator, Page } from '@playwright/test';

export class BarboraCheckoutPage {
    private checkoutNextButton: Locator = this.page.locator('.b-checkout--continue-btn');
    private checkoutCartTable: Locator = this.page.locator('table.b-checkout--tableview');
    private checkoutDeliveryTable: Locator = this.page.locator('div.b-deliverytime--body-checkout');

    constructor(private readonly page: Page) {}

    async clickNextButton() {
        await this.checkoutNextButton.click();
    }

    async checkIfCartTableVisible() {
        expect(this.checkoutCartTable).toBeVisible();
    }

    async checkDeliveryTable() {
        const tableTexts = await this.getDeliveryTimeTableCellTexts();
        expect(tableTexts.some((x) => x.includes('€'))).toBeTruthy();
    }

    private async getDeliveryTimeTableCellTexts() {
        await this.checkoutDeliveryTable.waitFor({ state: 'visible' });
        const columns = this.checkoutDeliveryTable.locator('//div[@class="b-deliverytime--col"]//div');
        const count = await columns.count();
        const tableTexts: Array<string> = [];
        for (let i = 0; i < count; i++) {
            tableTexts.push(await columns.nth(i).textContent());
        }
        return tableTexts;
    }
}
