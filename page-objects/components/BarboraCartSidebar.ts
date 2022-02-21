import { expect, Locator, Page } from "@playwright/test";
import { BarboraClearCartModal } from "./BarboraClearCartModal";

export class BarboraCartSidebar {

    confirmModal: BarboraClearCartModal = new BarboraClearCartModal(this.page)

    private cartSidebar: Locator = this.page.locator('div.b-cart--scrollable-blocks-wrap--cart-content')
    private clearCartButton: Locator = this.page.locator('div.b-cart--scrollable-blocks-wrap--cart-header button')

    constructor(private readonly page: Page) {
    }

    async checkFirstItemInCart() {
        await this.cartSidebar.waitFor({ state: 'visible' })
        expect(this.cartSidebar.locator('div.b-next-cart-item').nth(0)).toBeVisible()
    }

    async clickClearCart() {
        await this.clearCartButton.click()
    }

}
