import { configureStore } from '@reduxjs/toolkit'
import toggleWindowSlice from './window/windowSlice'
import sortSlice from './sort/sortSlice'
import categoriesSlice from './categories/categoriesSlice'
import pizzaSlice from './pizza/pizzaSlice'
import byModalSlice from "./byModal/byModalSlice";

export const store = configureStore({
	reducer: {
		toggleWindowSlice,
		sortSlice,
		categoriesSlice,
		pizzaSlice,
		byModalSlice,
	},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
