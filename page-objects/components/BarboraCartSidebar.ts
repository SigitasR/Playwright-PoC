import {Page} from "@playwright/test";
import {BarboraClearCartModal} from "./BarboraClearCartModal";

export class BarboraCartSidebar {

    confirmModal: BarboraClearCartModal

    private cartSidebar = 'div.b-cart--scrollable-blocks-wrap--cart-content'
    private clearCartButton = 'div.b-cart--scrollable-blocks-wrap--cart-header button'
    private cartItems = 'div.b-next-cart-item'

    constructor(private readonly page: Page) {
        this.confirmModal = new BarboraClearCartModal(page)
    }

    // TODO: implement some assert
    async checkFirstItemInCart() {
        const sidebar = await this.page.waitForSelector(this.cartSidebar)
        console.log(await (await sidebar.$$(this.cartItems))[0].textContent())
    }

    async clickClearCart() {
        await this.page.locator(this.clearCartButton).click()
    }

}
