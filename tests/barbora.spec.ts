import { test } from '@playwright/test'
import { BarboraCheckoutPage } from '../page-objects/BarboraCheckoutPage'
import { BarboraFrontPage } from '../page-objects/BarboraFrontPage'

test.describe('Barbora tests', () => {

    let barboraFront: BarboraFrontPage
    let barboraCheckout: BarboraCheckoutPage

    test.beforeEach(async ({ page }) => {
        await page.goto('/')
        barboraFront = new BarboraFrontPage(page)
        barboraCheckout = new BarboraCheckoutPage(page)
    })

    test('Checkout test', async () => {
        await barboraFront.clickVilnius()
        await barboraFront.clickStandardBarboraEshop()
        await barboraFront.acceptAllCoocies()
        await barboraFront.clickLoginLink()
        await barboraFront.fillEmail(process.env.BARBORA_EMAIL)
        await barboraFront.fillPassword(process.env.BARBORA_PASS)
        await barboraFront.clickLoginModalButton()
        await barboraFront.clickBuyButton()
        await barboraCheckout.clickNextButton()
        await barboraCheckout.lookForCartTable()
        await barboraCheckout.clickNextButton()
        await barboraCheckout.checkDeliveryTable()
    })

    test.afterEach(async ({ browserName }) => {
        console.log(`fuck ${browserName}`)
    })

})
