import { expect, Locator, Page } from "@playwright/test";

export class BarboraProductDescription {

    private mainDescriptionContainer: Locator = this.page.locator('dl.b-product-info--info-2')
    private otherInformationContainer: Locator = this.page.locator('dl.b-product-info--info1')

    constructor(private readonly page: Page) {
    }

    async productDescriptionShouldBeVisible() {
        await expect(this.mainDescriptionContainer).toBeVisible()
    }

    async productDescriptionShouldContainSectionTitle(title: string) {
        const sectionTitle = await this.mainDescriptionContainer
            .locator('.b-product-info--info-3-title')
            .locator(`text=${title}`)

        await expect(sectionTitle).toBeVisible()
    }

    async otherInformationShouldBeVisible() {
        await expect(this.otherInformationContainer).toBeVisible()
    }

    async otherInformationShouldContainText(text: string) {
        await expect(this.otherInformationContainer).toContainText(text)
    }

}
