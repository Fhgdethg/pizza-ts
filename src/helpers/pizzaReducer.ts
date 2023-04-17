import { IPizza } from '../type/pizzas'
import { ISort } from '../type/sorts'
import {IPizzaData} from "../redux/pizza/pizzaTypes";
import { sort } from './sort'

export const pizzaReducer = (state: IPizzaData, payload: ISort) => {
	const pizzaArrToSort = state.pizzaShow
	const pizzaShow: IPizza[] = []

	if (payload.title === 'цене') {
		sort(pizzaArrToSort, pizzaShow, '<', state, 'цене')
	} else if (payload.title === 'популярности') {
		sort(pizzaArrToSort, pizzaShow, '>', state, 'популярности')
	} else if (payload.title === 'алфавиту') {
		sort(pizzaArrToSort, pizzaShow, '<', state, 'алфавиту')
	}
}
