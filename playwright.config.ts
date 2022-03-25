import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
    timeout: 60000,
    use: {
        video: 'off',
        screenshot: 'on',
        baseURL: process.env.BASE_URL ? process.env.BASE_URL : 'https://barbora.lt',
    },
    reporter: [['./node_modules/allure-playwright'], ['list'], ['html']],

    projects: [
        {
            name: 'chromium',
            use: {
                browserName: 'chromium',
                video: 'on',
                headless: false,
            },
        },

        {
            name: 'chromium-headless',
            use: {
                browserName: 'chromium',
                video: 'on',
                headless: true,
            },
        },

        {
            name: 'firefox',
            use: {
                browserName: 'firefox',
                video: 'on',
                headless: false,
            },
        },

        {
            name: 'firefox-headless',
            use: {
                browserName: 'firefox',
                video: 'on',
                headless: true,
            },
        },

        {
            name: 'webkit',
            use: {
                browserName: 'webkit',
                video: 'on',
                headless: false,
            },
        },

        {
            name: 'webkit-headless',
            use: {
                browserName: 'webkit',
                video: 'on',
                headless: true,
            },
        },
    ],
};
export default config;
