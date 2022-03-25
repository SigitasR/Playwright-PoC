import { Locator, Page } from '@playwright/test';

export class BarboraLoginModal {
    private emailInput: Locator = this.page.locator('id=email');
    private passwordInput: Locator = this.page.locator('id=password');
    private loginModalButton: Locator = this.page.locator('button[type=submit]');

    constructor(private readonly page: Page) {}

    async fillEmail(email: string) {
        await this.emailInput.fill(email);
    }

    async fillPassword(password: string) {
        await this.passwordInput.fill(password);
    }

    async clickLoginButton() {
        await this.loginModalButton.click();

        await this.loginModalButton.waitFor({ state: 'detached' });
    }
}
