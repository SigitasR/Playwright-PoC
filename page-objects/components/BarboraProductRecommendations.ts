import {expect, Locator, Page} from "@playwright/test";

export class BarboraProductRecommendations {
    private recommendationsWrap: Locator = this.page.locator('div.b-product-info-recommendations--wrap')

    constructor(private readonly page: Page) {
    }

    async checkIfRecommendationsContainsThreeProducts() {
        await this.recommendationsWrap.waitFor({state:'visible'})
        const count = await this.recommendationsWrap.locator('[itemprop="price"]').count()
        expect(count).toEqual(3)
    }
}
