import { IPizza } from "./pizzas"
import {IPizzaData} from "../redux/pizza/pizzaTypes";

export interface ISort {
	title: string
	active: boolean
	numCategory?: number
}

export interface Sort {
	sortData: ISort[]
	sortActive: string
}

export type SortFunction = (
	pizzaArrToSort: IPizza[],
	pizzaShow: IPizza[],
	moreOrLess: string,
	state: IPizzaData,
	typeSort: string
) => void
