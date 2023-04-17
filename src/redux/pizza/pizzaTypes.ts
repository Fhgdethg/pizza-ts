import {Sort} from "../../type/sorts";
import {IPizza} from "../../type/pizzas";

export interface IPizzaData extends Sort {
    pizza: IPizza[]
    pizzaShow: IPizza[]
    basketPizzas: any[]
    generalPizzasCount: number
    generalPizzasPrice: number
}
