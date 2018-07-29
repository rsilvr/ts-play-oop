import Beverage from './Beverage'
import Wine from './Wine'
import Beer from './Beer'
import BeerType from './BeerType'

function describeAndPourBeverages(... beverages: Beverage[]) : void {
  for(const beverage of beverages) {
    beverage.describe()
    beverage.pour()
  }
}

const sangueBoi = new Wine(9.5, 'Sangue de Boi', 2017)
const itaipava = new Beer(1.32, 'Itaipava', BeerType.Pilsen)
const stellaArtois = new Beer(9.6, 'Stella Artois', 0)
const cabernetSauvignon = new Wine(79.9, 'Cabernet Sauvignon', 1970)

const beverages: Beverage[] = [
  sangueBoi,
  itaipava,
  stellaArtois,
  cabernetSauvignon
]

describeAndPourBeverages(new Wine(2.9, 'Vinho Natal', 2018), new Beer(3.6, 'Skol', BeerType.Bock), ...beverages)