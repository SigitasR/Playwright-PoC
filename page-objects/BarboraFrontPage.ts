import { Page } from "@playwright/test";

export class BarboraFrontPage {

    private vilniusCountyButton = async () => this.page.locator('button[data-county="vilnius"]')
    private standardBarboraEshopButton = async () => this.page.locator("button[class='link-to-page-btn ']").nth(0)
    private allowCookiesButton = async () => this.page.locator('id=CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll')
    private loginLink = async () => this.page.locator("button.b-login-register--login").nth(1);
    private emailField = async () => this.page.locator('id=b-login-email')
    private passwordField = async () => this.page.locator('id=b-login-password')
    private loginModalButton = async () => this.page.locator("button.b-login-form--login-button")
    private buyButton = async () => this.page.locator('button').locator("text=Pirkti")

    readonly page: Page

    constructor(page: Page) {
        this.page = page
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

    async fillEmail(email: string) {
        await (await this.emailField()).fill(email)
    }

    async fillPassword(password: string) {
        await (await this.passwordField()).fill(password)
    }

    async clickLoginModalButton() {
        await (await this.loginModalButton()).click()
    }

    async clickBuyButton() {
        await (await this.buyButton()).click()
    }

}