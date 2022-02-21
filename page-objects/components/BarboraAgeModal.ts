import { Locator, Page } from "@playwright/test";

export class BarboraAgeModal {

    private modalBody: Locator = this.page.locator('div.b-alert--modal div.modal-content')

    constructor(private readonly page: Page) {
    }

    async clickOver20Button() {
        await this.modalBody
            .locator('button.c-btn')
            .nth(0)
            .click()
    }

}
