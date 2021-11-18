import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {

    timeout: 60000,
    use: {
        baseURL: 'https://barbora.lt',
        video: 'off',
        screenshot: 'on'
    },
    reporter: [['./node_modules/allure-playwright'], ['list']],

    projects: [
        {
            name: 'chromium',
            use: {
                browserName: 'chromium', 
                video: 'on',
                headless: false
            },
        },

        {
            name: 'firefox',
            use: {
                browserName: 'firefox',
                video: 'on',
                headless: false
            },
        },
        
        {
            name: 'chromium-headless',
            use: {
                browserName: 'chromium',
                video: 'on',
                headless: true
            },
        },
    ],
};
export default config;
