import { Page } from "@playwright/test";
import { BarboraAgeModal } from "./components/BarboraAgeModal";

export class BarboraProductPage {

    ageModal: BarboraAgeModal

    private itemPrice = 'div.b-product-info--price-and-quantity span[itemprop="price"]'
    private addToCartButton = 'div.b-product-info--price-and-quantity div.b-product-cart-link button.c-btn--brand-primary'

    constructor(private readonly page: Page) {
        this.ageModal = new BarboraAgeModal(this.page)
    }

    async clickAddToCart() {
        await this.page
            .locator(this.addToCartButton)
            .click()
    }

}
