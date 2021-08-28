import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {

    timeout: 60000,
    use: {
        baseURL: 'https://barbora.lt',
        video: 'off',
        screenshot: 'on',
        headless: false
    },
    reporter: [['./node_modules/allure-playwright'], ['line']],

    projects: [
        {
            name: 'chromium',
            use: {
                browserName: 'chromium', 
                video: 'on'
            },
        },

        {
            name: 'firefox',
            use: {
                browserName: 'firefox',
                video: 'on'
            },
        },
    ],
};
export default config;