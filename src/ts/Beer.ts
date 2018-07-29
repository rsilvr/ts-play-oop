import Beverage from './Beverage'
import BeerType from './BeerType'
import ConsolePrinter from './ConsolePrinter'

export default class Beer extends Beverage {

  private static readonly yellowFontCode: string = '\x1b[33m'
  private static readonly printer = new ConsolePrinter(Beer.yellowFontCode)

  protected beerType: BeerType

  constructor(price: number, brand: string, beerType: BeerType) {
    super(price, brand)
    this.beerType = beerType
  }

  describe(): void {
    super.describe()
    Beer.printer.printToConsole(this.beerType)
  }

  pour(): void {
    Beer.printer.printToConsole('Pouring beer in a mug...')
  }

}