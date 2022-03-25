import { Locator, Page } from '@playwright/test';

export class BarboraProductsList {
    private productListWrapper: Locator = this.page.locator('div.b-products-list--wrapper').nth(0);

    constructor(private readonly page: Page) {}

    async clickProduct(productNumber = 0) {
        await this.productListWrapper.waitFor({ state: 'visible' });
        await this.productListWrapper.locator('div.b-product--wrap').nth(productNumber).click();
    }
}
