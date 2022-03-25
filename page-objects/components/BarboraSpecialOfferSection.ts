import { expect, Locator, Page } from '@playwright/test';

export class BarboraSpecialOfferSection {
    private readonly specialOfferWrapper: Locator = this.page.locator('section.b-display--desktop.b-home--products-section');

    constructor(private readonly page: Page) {}

    async checkIfAllProductCardDetailsAreDisplayed() {
        const count = await this.specialOfferWrapper.locator('div.b-product--wrap2').count();

        for (let i = 0; i < count; i++) {
            const productWrapper = await this.specialOfferWrapper.locator('div.b-product--wrap2').nth(i);
            await expect(productWrapper.locator('div.b-product-promo-labels')).toBeVisible();
            await expect(productWrapper.locator('button.b-icon-favourite')).toBeVisible();
            await expect(productWrapper.locator('img')).toBeVisible();
            await expect(productWrapper.locator('span[itemprop="name"]')).toBeVisible();
            await expect(productWrapper.locator('del')).toBeVisible();
            await expect(productWrapper.locator('span[itemprop="price"]')).toBeVisible();
            await expect(productWrapper.locator('div.b-product-price--extra')).toBeVisible();
            await expect(productWrapper.locator('button.c-btn')).toBeVisible();
        }
    }

    async clickSpecialOffer(offerNumber = 0) {
        const offerCount = await this.specialOfferWrapper.locator('div.b-product--wrap2').count();

        const click = offerNumber < offerCount ? offerNumber : 0;

        await this.specialOfferWrapper.locator('div.b-product--wrap2').nth(click).locator('img').click();
    }
}
