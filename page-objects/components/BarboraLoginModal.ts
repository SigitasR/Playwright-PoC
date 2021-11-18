import {Page} from "@playwright/test";

export class BarboraLoginModal {

    private emailInput = 'id=email'
    private passwordInput = 'id=password'
    private loginModalButton = 'button[type=submit]'

    private readonly page: Page

    constructor(page: Page) {
        this.page = page
    }

    async fillEmail(email: string) {
        await this.page.locator(this.emailInput)
            .fill(email)
    }

    async fillPassword(password: string) {
        await this.page.locator(this.passwordInput)
            .fill(password)
    }

    async clickLoginButton() {
        await this.page.locator(this.loginModalButton)
            .click()

        await this.page
            .waitForSelector(this.loginModalButton, {state: 'detached'})
    }

}
