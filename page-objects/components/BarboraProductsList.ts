import { Page } from "@playwright/test";

export class BarboraProductsList {
    
    private productListWrapper = 'div.b-products-list--wrapper'
    private productItems = 'div.b-product--wrap'

    constructor(private readonly page: Page) {
    }

    async clickProduct(productNumber: number = 0) {
        const wrapper = await this.page.waitForSelector(this.productListWrapper)
        await (await wrapper.$$(this.productItems))[productNumber].click()
    }


}
