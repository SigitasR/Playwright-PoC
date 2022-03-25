import { Page } from "@playwright/test";

export const cookie = {
    /**
     * Set Barbora region
     * @param page
     * @param region = empty string for main shop, city name for express pickup
     */
    async setRegionCookie(page: Page, region = '') {
        await page.context().addCookies([{
            name: 'region',
            value: `${region.toLowerCase()}.barbora.lt`,
            path: '/',
            domain: '.barbora.lt'
        }])
    }
}
