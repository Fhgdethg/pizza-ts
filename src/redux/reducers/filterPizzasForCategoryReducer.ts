import {IPizzaData} from "../pizza/pizzaTypes";
import { IPizza } from "../../type/pizzas"
import { ISort } from "../../type/sorts"

function filterPizzasForCategoryNumber(numCategory: any, state: IPizzaData) {
	return state.pizza.filter(
		(pizza: IPizza) => pizza && pizza.category === numCategory
	)
}

export const pizzaCategoryFilt = (state: IPizzaData, payload: ISort) => {
	if (payload.numCategory === 0) {
		state.pizzaShow = state.pizza
		return
	}

	state.pizzaShow = filterPizzasForCategoryNumber(
		payload.numCategory,
		state
	)
}