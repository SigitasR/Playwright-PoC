import { Locator, Page } from '@playwright/test';
import { BarboraClearCartModal } from './components/BarboraClearCartModal';
import { BarboraHeader } from './components/BarboraHeader';
import { BarboraLoginModal } from './components/BarboraLoginModal';
import { BarboraSpecialOfferSection } from './components/BarboraSpecialOfferSection';

export class BarboraFrontPage {
    loginModal: BarboraLoginModal = new BarboraLoginModal(this.page);
    clearCart: BarboraClearCartModal = new BarboraClearCartModal(this.page);
    specialOffers: BarboraSpecialOfferSection = new BarboraSpecialOfferSection(this.page);
    header: BarboraHeader = new BarboraHeader(this.page);

    private vilniusCountyButton: Locator = this.page.locator('button[data-county="vilnius"]');
    private standardBarboraEshopButton: Locator = this.page.locator('button[class="link-to-page-btn "]');
    private allowCookiesButton: Locator = this.page.locator('id=CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll');
    private loginLink: Locator = this.page.locator('button.b-login-register--login');
    private buyButton: Locator = this.page.locator('div.b-sidebar-bottom button.b-sidebar-bottom--purchase-btn');
    private searchInput: Locator = this.page.locator('header input.b-search');

    constructor(private readonly page: Page) {}

    async acceptAllCookies() {
        await this.allowCookiesButton.click();
    }

    async clickVilnius() {
        await this.vilniusCountyButton.click();
    }

    async clickStandardBarboraEshop() {
        await this.standardBarboraEshopButton.nth(0).click();
    }

    async clickLoginLink() {
        await this.loginLink.nth(1).click();
    }

    async clickBuyButton() {
        await this.buyButton.click();
    }

    async searchFor(product: string) {
        await this.searchInput.fill(product);
        await this.searchInput.press('Enter');
    }
}
