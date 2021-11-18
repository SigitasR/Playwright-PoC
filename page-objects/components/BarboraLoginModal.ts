import { Page } from "@playwright/test";

export class BarboraLoginModal {

    private emailInput = async () => this.page.locator('id=email')
    private passwordInput = async () => this.page.locator('id=password')
    private loginModalButton = async () => this.page.locator("button[type=submit]")

    private readonly page: Page

    constructor(page: Page) {
        this.page = page
    }

    async fillEmail(email: string) {
        await (await this.emailInput()).fill(email)
    }

    async fillPassword(password: string) {
        await (await this.passwordInput()).fill(password)
    }

    async clickLoginButton() {
        await (await this.loginModalButton()).click()
        await this.page.waitForSelector('button[type=submit]', {state: 'detached'})
    }

}
