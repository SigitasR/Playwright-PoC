import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {

    timeout: 20000,
    use: {
        baseURL: 'https://barbora.lt',
        video: 'off',
        screenshot: 'on',
        headless: false        , 
        
    
    },

    projects: [
        {
            name: 'chromium',
            use: {
                browserName: 'chromium'
            }, 
        },

        {
            name: 'firefox',
            use: {
                browserName: 'firefox',
            },
        },
    ],
};
export default config;