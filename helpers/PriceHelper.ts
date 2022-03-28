import Dinero from 'dinero.js';

export const priceHelper = {
    getFormatedSum(priceList: Array<string>): string {
        return this.format(this.sum(this.convertToCents(priceList)));
    },

    convertToCents(priceList: Array<string>): Array<number> {
        const cents = priceList.map((price) => parseInt(price.replace(',', '').replace('€', '')));
        return cents;
    },

    sum(prices: Array<number>): number {
        return prices.reduce((number, sum) => number + sum, 0);
    },

    format(price: number): string {
        const result = Dinero({ amount: price, currency: 'EUR' });
        return result.toFormat('$0.00').replace('.', ',');
    },
};
