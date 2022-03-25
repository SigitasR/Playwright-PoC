import { test } from '@playwright/test';
import { api } from '../helpers/ApiHelper';
import { cookie } from '../helpers/CookieHelper';
import { BarboraFrontPage } from '../page-objects/BarboraFrontPage';
import { BarboraProductPage } from '../page-objects/BarboraProductPage';
import { BarboraCartSidebar } from '../page-objects/components/BarboraCartSidebar';
import { BarboraProductsList } from '../page-objects/components/BarboraProductsList';

test.describe('Barbora tests', () => {
    let front: BarboraFrontPage;
    let productsList: BarboraProductsList;
    let productPage: BarboraProductPage;
    let cartSidebar: BarboraCartSidebar;

    test.beforeEach(async ({ page }) => {
        await cookie.setRegionCookie(page);
        await page.goto('/');
        front = new BarboraFrontPage(page);
        productsList = new BarboraProductsList(page);
        productPage = new BarboraProductPage(page);
        cartSidebar = new BarboraCartSidebar(page);
    });

    test('Should login trough API', async ({ page }) => {
        await test.step('Login to account', async () => {
            await api.login(page, process.env.BARBORA_EMAIL, process.env.BARBORA_PASS);
            await api.clearCart(page);
            await page.reload();
        });

        await test.step('Add beer to cart', async () => {
            await front.searchFor('grimbergen');
            await productsList.clickProduct();
            await productPage.ageModal.clickOver20Button();
            await productPage.clickAddToCart();
            await productPage.ageModal.clickOver20Button();
            await cartSidebar.checkFirstItemInCart();
        });
    });
});
