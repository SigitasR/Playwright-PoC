import Dinero from 'dinero.js'

export const priceHelper = {
    sumPrices(priceList: Array<string>): string {
        return this.format(this.convertToCents(priceList))
    },

    convertToCents(priceList: Array<string>): number {
        let cents = priceList
            .map((price) => parseInt(price.replace(',', '').replace('€', '')))
            .reduce((number, sum) => number + sum, 0)
        return cents
    },
    
    format(price: number): string {
        let result = Dinero({ amount: price, currency: 'EUR' })
        return result.toFormat('$0.00').replace('.', ',')
    }
}



