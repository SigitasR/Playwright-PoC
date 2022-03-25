import { Locator, Page } from '@playwright/test';
import { BarboraRecipeDropdown } from './components/BarboraRecipeDropdown';
import { BarboraRecipesCategoryView } from './components/BarboraRecipesCategoryView';
import { BarboraRecipeView } from './components/BarboraRecipeView';

export class BarboraRecipesPage {
    recipeDropdown = new BarboraRecipeDropdown(this.page);
    categoryView = new BarboraRecipesCategoryView(this.page);
    recipeView = new BarboraRecipeView(this.page);

    private recipeCategoriesButton: Locator = this.page.locator('button.b-recipes-cats-bar--action-btn');

    constructor(private readonly page: Page) {}

    async clickRecipeCategoriesLink() {
        await this.recipeCategoriesButton.click();
    }
}
