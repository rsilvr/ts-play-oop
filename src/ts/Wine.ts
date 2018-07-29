import Beverage from './Beverage'
import ConsolePrinter from './ConsolePrinter'

export default class Wine extends Beverage {

  private static readonly magentaFontCode: string = '\x1b[35m'
  private static readonly printer = new ConsolePrinter(Wine.magentaFontCode)

  protected cropYear: number;

  constructor(price: number, brand: string, cropYear: number) {
    super(price, brand)
    this.cropYear = cropYear
  }

  describe(): void {
    super.describe()
    Wine.printer.printToConsole(this.cropYear)
  }

  pour(): void {
    Wine.printer.printToConsole('Pouring wine in a glass...')
  }

}