import { Locator, Page } from "@playwright/test"


export class BarboraBuyRecipeIngredientsModal {

    private recipeModalContainer: Locator = this.page.locator('div.b-recipe-items-modal')

    constructor(private readonly page: Page) {        
    }

    async assertSumOfSelectedItems() {
    }

}
