import { test } from '@playwright/test';
import { api } from '../helpers/ApiHelper';
import { cookie } from '../helpers/CookieHelper';
import { BarboraFrontPage } from '../page-objects/BarboraFrontPage';
import { BarboraProductPage } from '../page-objects/BarboraProductPage';

test.describe('Barbora tests', () => {
    let front: BarboraFrontPage;
    let productPage: BarboraProductPage;

    test.beforeEach(async ({ page }) => {
        await cookie.setRegionCookie(page);
        await api.login(page, process.env.BARBORA_EMAIL, process.env.BARBORA_PASS);
        await page.goto('/');
        front = new BarboraFrontPage(page);
        productPage = new BarboraProductPage(page);
    });

    test('Should check available delivery times at checkout1', async () => {
        await test.step('Check special offers1', async () => {
            await front.acceptAllCookies();
            await front.specialOffers.checkIfAllProductCardDetailsAreDisplayed();
            await front.specialOffers.clickSpecialOffer();
            await productPage.productDescription.productDescriptionShouldBeVisible();
            await productPage.productDescription.productDescriptionShouldContainSectionTitle('Aprašymas');
            await productPage.productDescription.productDescriptionShouldContainSectionTitle('Sudedamosios dalys');
            await productPage.productDescription.productDescriptionShouldContainSectionTitle('Laikymo sąlygos');
            await productPage.productDescription.productDescriptionShouldContainSectionTitle('Pakuotė');
            await productPage.productDescription.otherInformationShouldBeVisible();
            await productPage.productDescription.otherInformationShouldContainText('Kilmės šalis');
            await productPage.productRecommendations.checkIfRecommendationsContainsThreeProducts();
        });
    });
});
