import axios from 'axios'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { setterItem } from '../reducers/categoriesReducer'
import { pizzaCategoryFilt } from '../reducers/filterPizzasForCategoryReducer'
import { pizzaReducer } from '../../helpers/pizzaReducer'

import { categoriesArr } from '../../data/categoriesArr'
import { sortArr } from '../../data/sortArr'

import { ISort } from '../../type/sorts'
import {IPizzaData} from "./pizzaTypes";


export const fetchPizzas = createAsyncThunk(
	'pizza/fetchPizzas',
	async (_, thunkAPI) => {
		const { data } = await axios.get(
			'https://6391eff1b750c8d178d21bb8.mockapi.io/pizzas'
		)
		return data
	}
)

const initialState: IPizzaData = {
	sortData: categoriesArr,
	sortActive: categoriesArr[0].title,
	pizza: [],
	pizzaShow: [],
	basketPizzas: [],
	generalPizzasCount: 0,
	generalPizzasPrice: 0,
}

export const pizzaSlice = createSlice({
	name: 'pizza',
	initialState,
	reducers: {
		setterCategoryItem: setterItem,
		pizzaCategoryFilter(state, action) {
			pizzaCategoryFilt(state, action.payload)
		},
		pizzaSortByConditions(state, action) {
			pizzaReducer(state, action.payload)
		},
		addToBasketPizza(state, {payload}) {
			if (state.basketPizzas.length)
				for (const pizza of state.basketPizzas) {
					if (pizza[1].title === payload) {
						pizza[0]++
						return
					}
				}
			state.pizza.forEach(pizza => {
				if(pizza.title === payload) state.basketPizzas.push([1, pizza])
			})
		},
		subtractFromBasketPizza(state, {payload}) {
			if (state.basketPizzas.length)
				for (const pizza of state.basketPizzas) {
					if (pizza[1].title === payload && pizza[0] > 1) {
						pizza[0]--
						return
					}
				}
			state.basketPizzas.forEach((pizza, index) => {
				if(pizza[1].title === payload) state.basketPizzas.splice(index, 1)
			})
		},
		deletePizzaItem(state, {payload}) {
			state.basketPizzas.forEach((pizza, index) => {
				if(pizza[1].title === payload) state.basketPizzas.splice(index, 1)
			})
		},
		pizzasCounter(state) {
			state.generalPizzasCount = state.basketPizzas.reduce((accumulator, currentValue) => accumulator + currentValue[0], 0)
		},
		generalPizzasPriceCounter(state) {
			state.generalPizzasPrice = state.basketPizzas.reduce((accumulator, currentValue) => accumulator + currentValue[1].price * currentValue[0], 0)
		},
		clearBasket(state) {
			state.basketPizzas = []
			state.generalPizzasCount = 0
			state.generalPizzasPrice = 0
		},
	},
	extraReducers: builder => {
		builder.addCase(fetchPizzas.fulfilled, (state, action) => {
			state.pizza = action.payload
			state.pizzaShow = state.pizza
			sortArr.forEach((sort: ISort) => {
				if (sort.active) pizzaReducer(state, sort)
			})
		})
	},
})

export const {
	setterCategoryItem,
	pizzaCategoryFilter,
	pizzaSortByConditions,
	addToBasketPizza,
	pizzasCounter,
	generalPizzasPriceCounter,
	clearBasket,
	subtractFromBasketPizza,
	deletePizzaItem,
} = pizzaSlice.actions

export default pizzaSlice.reducer
