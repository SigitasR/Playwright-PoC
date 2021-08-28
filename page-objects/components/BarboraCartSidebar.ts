import { Page } from "@playwright/test";

export class BarboraCartSidebar {

    cartSidebar = async () => this.page.waitForSelector('div.b-cart--scrollable-blocks-wrap--cart-content')
    cartItems = async () => (await this.cartSidebar()).$$('div.b-next-cart-item')

    private readonly page: Page

    constructor(page: Page) {
        this.page = page
    }

    async checkFirstItemInCart() {
        console.log(await (await this.cartItems())[0].textContent())
    }

}