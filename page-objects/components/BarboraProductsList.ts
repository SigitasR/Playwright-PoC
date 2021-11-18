import { Page } from "@playwright/test";

export class BarboraProductsList {
    
    private productListWrapper = 'div.b-products-list--wrapper'
    private productItems = 'div.b-product--wrap'

    private readonly page: Page

    constructor(page: Page) {
        this.page = page
    }

    async clickProduct(productNumber: number = 0) {
        const wrapper = await this.page.waitForSelector(this.productListWrapper)
        await (await wrapper.$$(this.productItems))[productNumber].click()
    }


}
