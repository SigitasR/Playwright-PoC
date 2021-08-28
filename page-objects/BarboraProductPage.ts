import { Page } from "@playwright/test";
import { BarboraAgeModal } from "./components/BarboraAgeModal";
import { BarboraCartSidebar } from "./components/BarboraCartSidebar";

export class BarboraProductPage {

    ageModal: BarboraAgeModal
    cartSidebar: BarboraCartSidebar

    private itemPrice = async () => this.page.locator('div.b-product-info--price-and-quantity span[itemprop="price"]')
    private addToCartButton = async() => this.page.locator('div.b-product-info--price-and-quantity div.b-product-cart-link button.c-btn--brand-primary')

    private readonly page: Page

    constructor(page: Page) {
        this.page = page
        this.ageModal = new BarboraAgeModal(this.page)
        this.cartSidebar = new BarboraCartSidebar(this.page)
    }

    async clickAddToCart() {
        await (await this.addToCartButton()).click()
    }

}