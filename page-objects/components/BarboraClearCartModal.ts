import {Page} from "@playwright/test";

export class BarboraClearCartModal {

    private confirmButton = 'div.modal-dialog div.modal-content button[title="Patvirtinti"]'

    constructor(private readonly page: Page) {
    }

    async clickConfirm() {
        await this.page
            .locator(this.confirmButton)
            .click()
    }

}