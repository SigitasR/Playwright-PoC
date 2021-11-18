import { expect, test } from '@playwright/test'
import { BarboraCheckoutPage } from '../page-objects/BarboraCheckoutPage'
import { BarboraFrontPage } from '../page-objects/BarboraFrontPage'
import { BarboraProductPage } from '../page-objects/BarboraProductPage'
import { BarboraProductsList } from '../page-objects/components/BarboraProductsList'

test.describe('Barbora tests', () => {

    let barboraFront: BarboraFrontPage
    let barboraCheckout: BarboraCheckoutPage
    let barboraProductsList: BarboraProductsList
    let barboraProductPage: BarboraProductPage

    test.beforeEach(async ({ page }) => {
        await page.goto('/')
        barboraFront = new BarboraFrontPage(page)
        barboraCheckout = new BarboraCheckoutPage(page)
        barboraProductsList = new BarboraProductsList(page)
        barboraProductPage = new BarboraProductPage(page)
    })

    test('Should check available delivery times at checkout', async ({page}) => {

        await test.step('Select shop', async () => {
            await barboraFront.clickVilnius()
            await barboraFront.clickStandardBarboraEshop()
            await barboraFront.acceptAllCoocies()
        })

        await test.step('Login to account', async () => {
            await barboraFront.clickLoginLink()
            await barboraFront.loginModal.fillEmail(process.env.BARBORA_EMAIL)
            await barboraFront.loginModal.fillPassword(process.env.BARBORA_PASS)
            await barboraFront.loginModal.clickLoginButton()
        })
        
        await test.step('Fill cart', async () => {
            await barboraFront.searchFor('fujimi')
            await barboraProductsList.clickProduct()
            await barboraProductPage.ageModal.clickOver20Button()
            await barboraProductPage.clickAddToCart()
            await barboraProductPage.ageModal.clickOver20Button()
            await barboraFront.searchFor('lasiniai')
            await barboraProductsList.clickProduct()
            await barboraProductPage.clickAddToCart()
            await barboraFront.searchFor('rugine duona')
            await barboraProductsList.clickProduct()
            await barboraProductPage.clickAddToCart()
            await barboraProductPage.cartSidebar.checkFirstItemInCart()
        })

        await test.step('Go to checkout', async () => {
            await barboraFront.clickBuyButton()
            await barboraCheckout.clickNextButton()
        })

        await test.step('Check delivery table', async () => {
            await barboraCheckout.lookForCartTable()
            await barboraCheckout.clickNextButton()
            await barboraCheckout.checkDeliveryTable()
        })
    })

    test.afterEach(async ({ browserName }) => {
        console.log(`${browserName}`)
    })

})
