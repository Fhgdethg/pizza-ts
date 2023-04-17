import { useEffect } from 'react'
import { fetchPizzas } from '../redux/pizza/pizzaSlice'
import { useAppDispatch, useAppSelector } from './appReduxHooks'

export const useStartShop = () => {
	const dispatch = useAppDispatch()
	const pizzaArr = useAppSelector(state => state.pizzaSlice.pizzaShow)

	useEffect(() => {
		dispatch(fetchPizzas())
	}, [])

	return { dispatch, pizzaArr }
}
