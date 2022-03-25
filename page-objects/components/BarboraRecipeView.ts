import { Locator, Page } from "@playwright/test";
import { BarboraBuyRecipeIngredientsModal } from "./BarboraBuyRecipeIngredientsModal";

export class BarboraRecipeView {

    private buyIngredientsButton: Locator = this.page.locator('button.c-btn--block')

    constructor(private readonly page: Page) {
    }

    modal = new BarboraBuyRecipeIngredientsModal(this.page)

    async clickBuyIngredients() {
        await this.buyIngredientsButton.click()
    }
}
