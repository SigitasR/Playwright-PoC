# Playwright PoC 

Simple proof-of-concept script to run on barbora.lt

### Setup:

`npm ci`

`npx playwright install`

### Runing test:

(Use Git bash or Linux console)

`BARBORA_EMAIL='your.name@somemail.com' BARBORA_PASS='yourpass' npx playwright test --headed --project='chromium'`

or

`BARBORA_EMAIL='your.name@somemail.com' BARBORA_PASS='yourpass' npx playwright test --headed --project='firefox'`

To generate and view Allure report:

`npm run allure:generate && npm run allure:serve`