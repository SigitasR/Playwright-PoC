import { Locator, Page } from "@playwright/test"

export class BarboraRecipeDropdown {

    private recipeDropdownContainer: Locator = this.page.locator('div.b-recipes-cats-bar--content').nth(1)

    constructor(private readonly page: Page) {
    }

    async selectRecipeCategoryByName(categoryName: string) {
        await this.recipeDropdownContainer
            .locator('a')
            .locator(`text=${categoryName}`)
            .click()
    }

}
