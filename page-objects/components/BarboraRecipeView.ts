import { Locator, Page } from '@playwright/test';
import { BarboraBuyRecipeIngredientsModal } from './BarboraBuyRecipeIngredientsModal';

export class BarboraRecipeView {
    modal = new BarboraBuyRecipeIngredientsModal(this.page);
    
    private buyIngredientsButton: Locator = this.page.locator('button.c-btn--block');

    constructor(private readonly page: Page) {}

    async clickBuyIngredients() {
        await this.buyIngredientsButton.click();
    }
}
