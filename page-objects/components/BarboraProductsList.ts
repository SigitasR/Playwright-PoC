import { Page } from "@playwright/test";

export class BarboraProductsList {
    
    private productListWrapper = async() => this.page.waitForSelector('div.b-products-list--wrapper')
    private productItems = async() =>  (await this.productListWrapper()).$$('div.b-product--wrap')

    private readonly page: Page

    constructor(page: Page) {
        this.page = page
    }

    async clickProduct(productNumber: number = 0) {
        await (await this.productItems())[productNumber].click()
    }


}