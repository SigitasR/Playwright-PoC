import { Page } from "@playwright/test";

export class BarboraAgeModal {

    private modalBody = async () => this.page.locator('div.b-alert--modal div.modal-content')
    private over20Button = async () => (await this.modalBody()).locator('button.c-btn').nth(0)

    private readonly page: Page

    constructor(page: Page) {
        this.page = page
    }

    async clickOver20Button() {
        await (await this.over20Button()).click()
    }

}