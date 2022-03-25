import { Locator, Page } from "@playwright/test"

export class BarboraRecipesCategoryView {

    private recipesContainer: Locator = this.page.locator('div.b-recipes--row')

    constructor(private readonly page: Page) {
    }

    async selectRecipe(recipeNumber = 0) {
        await this.recipesContainer
            .locator('a.b-recipes--items-list--item')
            .nth(recipeNumber)
            .click()
    }

}
