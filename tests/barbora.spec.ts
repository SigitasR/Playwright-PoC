import {test} from '@playwright/test'
import {BarboraCheckoutPage} from '../page-objects/BarboraCheckoutPage'
import {BarboraFrontPage} from '../page-objects/BarboraFrontPage'
import {BarboraProductPage} from '../page-objects/BarboraProductPage'
import {BarboraProductsList} from '../page-objects/components/BarboraProductsList'
import {BarboraCartSidebar} from "../page-objects/components/BarboraCartSidebar";

test.describe('Barbora tests', () => {

    let front: BarboraFrontPage
    let checkout: BarboraCheckoutPage
    let productsList: BarboraProductsList
    let productPage: BarboraProductPage
    let cartSidebar: BarboraCartSidebar

    test.beforeEach(async ({page}) => {
        await page.goto('/')
        front = new BarboraFrontPage(page)
        checkout = new BarboraCheckoutPage(page)
        productsList = new BarboraProductsList(page)
        productPage = new BarboraProductPage(page)
        cartSidebar = new BarboraCartSidebar(page)
    })

    test('Should check available delivery times at checkout', async ({page}) => {

        await test.step('Select shop', async () => {
            await front.clickVilnius()
            await front.clickStandardBarboraEshop()
            await front.acceptAllCookies()
        })

        await test.step('Login to account', async () => {
            await front.clickLoginLink()
            await front.loginModal.fillEmail(process.env.BARBORA_EMAIL)
            await front.loginModal.fillPassword(process.env.BARBORA_PASS)
            await front.loginModal.clickLoginButton()
        })

        await test.step('Fill cart', async () => {
            await front.searchFor('fujimi')
            await productsList.clickProduct()
            await productPage.ageModal.clickOver20Button()
            await productPage.clickAddToCart()
            await productPage.ageModal.clickOver20Button()
            await front.searchFor('lasiniai')
            await productsList.clickProduct(2)
            await productPage.clickAddToCart()
            await front.searchFor('rugine duona')
            await productsList.clickProduct(2)
            await productPage.clickAddToCart()
            await cartSidebar.checkFirstItemInCart()
        })

        await test.step('Go to checkout', async () => {
            await front.clickBuyButton()
            await checkout.clickNextButton()
        })

        await test.step('Check delivery table', async () => {
            await checkout.lookForCartTable()
            await checkout.clickNextButton()
            await checkout.checkDeliveryTable()
        })
    })

    test.afterEach(async ({page}) => {
        await page.goto('https://pagrindinis.barbora.lt')
        await cartSidebar.clickClearCart()
        await cartSidebar.confirmModal.clickConfirm()
    })

})
