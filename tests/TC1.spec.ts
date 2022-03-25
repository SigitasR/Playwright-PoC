import {test} from '@playwright/test'
import {BarboraCheckoutPage} from '../page-objects/BarboraCheckoutPage'
import {BarboraFrontPage} from '../page-objects/BarboraFrontPage'
import {BarboraProductPage} from '../page-objects/BarboraProductPage'
import {BarboraProductsList} from '../page-objects/components/BarboraProductsList'
import {BarboraCartSidebar} from "../page-objects/components/BarboraCartSidebar";
import {cookie} from "../helpers/CookieHelper";
import { api } from '../helpers/ApiHelper'

test.describe('Barbora tests', () => {
    let front: BarboraFrontPage
    let checkout: BarboraCheckoutPage
    let productsList: BarboraProductsList
    let productPage: BarboraProductPage
    let cartSidebar: BarboraCartSidebar

    test.beforeEach(async ({page}) => {
        await cookie.setRegionCookie(page)
        await api.login(page, process.env.BARBORA_EMAIL, process.env.BARBORA_PASS)
        await page.goto('/')
        front = new BarboraFrontPage(page)
        checkout = new BarboraCheckoutPage(page)
        productsList = new BarboraProductsList(page)
        productPage = new BarboraProductPage(page)
        cartSidebar = new BarboraCartSidebar(page)
    })

    test('Should check available delivery times at checkout1', async ({page}) => {

        await test.step('Check special offers1', async () => {
            await front.acceptAllCookies()
            await front.specialOffers.checkIfAllProductCardDetailsAreDisplayed()
            await front.specialOffers.clickSpecialOffer()
            await productPage.productDescription.productDescriptionShouldBeVisible()
            await productPage.productDescription.productDescriptionShouldContainSectionTitle('Aprašymas')
            await productPage.productDescription.productDescriptionShouldContainSectionTitle('Sudedamosios dalys')
            await productPage.productDescription.productDescriptionShouldContainSectionTitle('Laikymo sąlygos')
            await productPage.productDescription.productDescriptionShouldContainSectionTitle('Pakuotė')
            await productPage.productDescription.otherInformationShouldBeVisible()
            await productPage.productDescription.otherInformationShouldContainText('Kilmės šalis')
            await productPage.productRecommendations.checkIfRecommendationsContainsThreeProducts()
        })
    })

})