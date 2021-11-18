import { Page } from "@playwright/test";

export class BarboraAgeModal {

    private modalBody = 'div.b-alert--modal div.modal-content'
    private over20Button = 'button.c-btn'

    private readonly page: Page

    constructor(page: Page) {
        this.page = page
    }

    async clickOver20Button() {
        await this.page
            .locator(this.modalBody)
            .locator(this.over20Button)
            .nth(0)
            .click()
    }

}
