import { expect, Locator, Page } from '@playwright/test';

export class BarboraHeader {
    private readonly menuBody: Locator = this.page.locator('ul.b-top-menu-desktop');

    constructor(private readonly page: Page) {}

    async checkIfMenuContainsThisNumberOfItems(numberOfMenuItems: number) {
        const count = await this.menuBody.locator('li').count();
        expect(count).toEqual(numberOfMenuItems);
    }

    async clickMenuItem(item: string) {
        await this.menuBody.locator('li').locator(`text=${item}`).click();
    }
}
