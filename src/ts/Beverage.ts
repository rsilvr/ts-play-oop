export default abstract class Beverage {

  private static readonly whiteColorCode = '\x1b[37m'

  constructor(
    protected price: number, 
    protected brand: string
  ) {}

  describe(): void {
    console.log(Beverage.whiteColorCode, `Price ${this.price}`)
    console.log(Beverage.whiteColorCode, `Brand ${this.brand}`)
  }

  abstract pour(): void
}