import { Locator, Page } from '@playwright/test';
import { BarboraAgeModal } from './components/BarboraAgeModal';
import { BarboraProductDescription } from './components/BarboraProductDescription';
import { BarboraProductRecommendations } from './components/BarboraProductRecommendations';

export class BarboraProductPage {
    ageModal: BarboraAgeModal = new BarboraAgeModal(this.page);
    productDescription: BarboraProductDescription = new BarboraProductDescription(this.page);
    productRecommendations: BarboraProductRecommendations = new BarboraProductRecommendations(this.page);

    private addToCartButton: Locator = this.page.locator('div.b-product-info--price-and-quantity div.b-product-cart-link button.c-btn--brand-primary');

    constructor(private readonly page: Page) {}

    async clickAddToCart() {
        await this.addToCartButton.click();
    }
}
