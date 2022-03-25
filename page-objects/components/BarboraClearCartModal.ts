import { Locator, Page } from '@playwright/test';

export class BarboraClearCartModal {
    private confirmButton: Locator = this.page.locator('div.modal-dialog div.modal-content button[title="Patvirtinti"]');

    constructor(private readonly page: Page) {}

    async clickConfirm() {
        await this.confirmButton.click();
    }
}
