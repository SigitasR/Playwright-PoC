import { test } from '@playwright/test';
import { api } from '../helpers/ApiHelper';
import { cookie } from '../helpers/CookieHelper';
import { BarboraFrontPage } from '../page-objects/BarboraFrontPage';
import { BarboraRecipesPage } from '../page-objects/BarboraRecipesPage';
import { BarboraCartSidebar } from '../page-objects/components/BarboraCartSidebar';

test.describe('Barbora tests', () => {
    let front: BarboraFrontPage;
    let recipes: BarboraRecipesPage;
    let cartSidebar: BarboraCartSidebar;

    test.beforeEach(async ({ page }) => {
        await cookie.setRegionCookie(page);
        await api.login(page, process.env.BARBORA_EMAIL, process.env.BARBORA_PASS);
        await api.clearCart(page);
        await page.goto('/');

        front = new BarboraFrontPage(page);
        recipes = new BarboraRecipesPage(page);
        cartSidebar = new BarboraCartSidebar(page);
    });

    test('Should add recipe ingredients to shopping cart and verify total price', async () => {
        await test.step('Add products to cart', async () => {
            await front.acceptAllCookies();
            await front.header.checkIfMenuContainsThisNumberOfItems(6);
            await front.header.clickMenuItem('Receptai');
            await recipes.clickRecipeCategoriesLink();
            await recipes.recipeDropdown.selectRecipeCategoryByName('Makaronai');
            await recipes.categoryView.selectRecipe(5);
            await recipes.recipeView.clickBuyIngredients();
            await recipes.recipeView.modal.clickBuyButton();
            await cartSidebar.assertTotalPrice();
        });
    });
});
