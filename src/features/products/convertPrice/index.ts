export function convertPriceStringToNumber(price: string) {
  const numericString = price.replace(/[^\d]/g, '')
  const priceNumber = parseInt(numericString, 10)

  return priceNumber
}
