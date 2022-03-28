import { expect, Locator, Page } from '@playwright/test';
import { priceHelper } from '../../helpers/PriceHelper';
import { StoreSettings } from '../../helpers/StoreSettings';
import { BarboraClearCartModal } from './BarboraClearCartModal';

export class BarboraCartSidebar {
    confirmModal: BarboraClearCartModal = new BarboraClearCartModal(this.page);

    private cartSidebar: Locator = this.page.locator('div.b-sidebar--contents');
    private clearCartButton: Locator = this.page.locator('div.b-cart--scrollable-blocks-wrap--cart-header button');
    private itemPrice: Locator = this.cartSidebar.locator('span.b-next-cart-item--price');
    private totalPrice: Locator = this.cartSidebar.locator('div.b-sidebar-bottom--side-total-price');

    constructor(private readonly page: Page) {}

    async clickClearCart() {
        await this.clearCartButton.click();
    }

    async checkFirstItemInCart() {
        await this.cartSidebar.waitFor({ state: 'visible' });
        expect(this.cartSidebar.locator('div.b-next-cart-item').nth(0)).toBeVisible();
    }

    async assertTotalPrice(packingPrice = StoreSettings.PACKING_PRICE) {
        const prices = await this.getCartItemPriceTexts();

        prices.push(packingPrice);

        const expectedTotalPrice = priceHelper.getFormatedSum(prices);

        expect(await this.totalPrice.textContent()).toEqual(expectedTotalPrice);
    }

    private async getCartItemPriceTexts(): Promise<string[]> {
        await this.itemPrice.nth(0).waitFor({ state: 'visible' });

        const priceTexts: Array<string> = [];
        const count = await this.itemPrice.count();

        for (let i = 0; i < count; i++) {
            priceTexts.push(await this.itemPrice.nth(i).textContent());
        }

        return priceTexts;
    }
}
