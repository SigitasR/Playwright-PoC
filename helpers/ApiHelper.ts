import {Page} from "@playwright/test";

let token = 'Basic YXBpa2V5OlNlY3JldEtleQ=='
export const api = {

    async login (page: Page, user: string, password: string) {
        await page.request.post('/api/eshop/v1/user/login', {
            headers: {
                "Authorization": token
            },
            data: {
                "rememberMe": true, "email": user, "password": password
            }
        })

    },

    async clearCart(page: Page) {
        await page.request.delete('/api/eshop/v1/cart/removeallitems',
            {
                headers: {
                    "Authorization": token
                }
            }
        )
    }
}

