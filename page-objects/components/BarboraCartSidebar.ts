import {Page} from "@playwright/test";

export class BarboraCartSidebar {

    private cartSidebar = 'div.b-cart--scrollable-blocks-wrap--cart-content'
    private cartItems = 'div.b-next-cart-item'

    constructor(private readonly page: Page) {
    }

    // TODO: implement some assert
    async checkFirstItemInCart() {
        const sidebar = await this.page.waitForSelector(this.cartSidebar)
        console.log(await (await sidebar.$$(this.cartItems))[0].textContent())
    }

}
