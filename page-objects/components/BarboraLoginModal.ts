import {Page} from "@playwright/test";

export class BarboraLoginModal {

    private emailInput = 'id=email'
    private passwordInput = 'id=password'
    private loginModalButton = 'button[type=submit]'

    constructor(private readonly page: Page) {
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
