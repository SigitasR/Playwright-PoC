import { Page } from "@playwright/test";
import { BarboraLoginModal } from "./components/BarboraLoginModal";

export class BarboraFrontPage {

    loginModal: BarboraLoginModal

    private vilniusCountyButton = 'button[data-county="vilnius"]'
    private standardBarboraEshopButton = 'button[class="link-to-page-btn "]'
    private allowCookiesButton = 'id=CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll'
    private loginLink = 'button.b-login-register--login'
    private buyButton = 'div.b-sidebar-bottom button.b-sidebar-bottom--purchase-btn'
    private searchInput = 'header input.b-search'

    readonly page: Page

    constructor(page: Page) {
        this.page = page
        this.loginModal = new BarboraLoginModal(this.page)
    }

    async acceptAllCookies() {
        await this.page
            .locator(this.allowCookiesButton)
            .click()
    }

    async clickVilnius() {
        await this.page
            .locator(this.vilniusCountyButton)
            .click()
    }

    async clickStandardBarboraEshop() {
        await this.page
            .locator(this.standardBarboraEshopButton)
            .nth(0)
            .click()
    }

    async clickLoginLink() {
        await this.page
            .locator(this.loginLink)
            .nth(1)
            .click()
    }

    async clickBuyButton() {
        await this.page
            .locator(this.buyButton)
            .click()
    }

    async searchFor(product: string) {
        await this.page.locator(this.searchInput).fill(product)
        await this.page.locator(this.searchInput).press('Enter')
    }

}
