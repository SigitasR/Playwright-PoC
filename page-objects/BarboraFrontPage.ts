import { Page } from "@playwright/test";
import { BarboraLoginModal } from "./components/BarboraLoginModal";

export class BarboraFrontPage {

    loginModal: BarboraLoginModal

    private vilniusCountyButton = async () => this.page.locator('button[data-county="vilnius"]')
    private standardBarboraEshopButton = async () => this.page.locator("button[class='link-to-page-btn ']").nth(0)
    private allowCookiesButton = async () => this.page.locator('id=CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll')
    private loginLink = async () => this.page.locator("button.b-login-register--login").nth(1);
    private buyButton = async () => this.page.locator('div.b-sidebar-bottom button.b-sidebar-bottom--purchase-btn')
    private searchInput = async () => this.page.locator('header input.b-search')

    readonly page: Page

    constructor(page: Page) {
        this.page = page
        this.loginModal = new BarboraLoginModal(this.page)
    }

    async acceptAllCoocies() {
        await (await this.allowCookiesButton()).click()
    }

    async clickVilnius() {
        await (await this.vilniusCountyButton()).click()

    }

    async clickStandardBarboraEshop() {
        await (await this.standardBarboraEshopButton()).click()
    }

    async clickLoginLink() {
        await (await this.loginLink()).click()
    }

    async clickBuyButton() {
        await (await this.buyButton()).click()
    }

    async searchFor(product: string) {
        await (await this.searchInput()).fill(product)
        await (await this.searchInput()).press('Enter')
    }

}
