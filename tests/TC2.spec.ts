import {test} from '@playwright/test'
import {BarboraCheckoutPage} from '../page-objects/BarboraCheckoutPage'
import {BarboraFrontPage} from '../page-objects/BarboraFrontPage'
import {BarboraProductPage} from '../page-objects/BarboraProductPage'
import {BarboraProductsList} from '../page-objects/components/BarboraProductsList'
import {BarboraCartSidebar} from "../page-objects/components/BarboraCartSidebar";
import {cookie} from "../helpers/CookieHelper";
import { BarboraRecipesPage } from '../page-objects/BarboraRecipesPage'
import { api } from '../helpers/ApiHelper'

test.describe('Barbora tests', () => {
    let front: BarboraFrontPage
    let recipes: BarboraRecipesPage

    test.beforeEach(async ({page}) => {
        await cookie.setRegionCookie(page)
        await api.login(page, process.env.BARBORA_EMAIL, process.env.BARBORA_PASS)
        await page.goto('/')
        
        front = new BarboraFrontPage(page)
        recipes = new BarboraRecipesPage(page)

    })

    test('Should check available delivery times at checkout', async ({page}) => {

        await test.step('Check special offers1', async () => {
            await front.acceptAllCookies()
            await front.header.checkIfMenuContainsThisNumberOfItems(6)
            await front.header.clickMenuItem('Receptai')
            await recipes.clickRecipeCategoriesLink();
            await recipes.recipeDropdown.selectRecipeCategoryByName('Makaronai')
            await recipes.categoryView.selectRecipe(5);
            await recipes.recipeView.clickBuyIngredients();
            await recipes.recipeView.modal.assertSumOfSelectedItems();


            await page.pause()

        })
    })

})