import { setterCategoryItem } from '../redux/categories/categoriesSlice'
import { pizzaCategoryFilter } from '../redux/pizza/pizzaSlice'
import { ISort } from '../type/sorts'
import { useAppDispatch, useAppSelector } from './appReduxHooks'

export const useSettingerCategory = () => {
	const categoriesArr = useAppSelector(state => state.categoriesSlice.sortData)
	const sortActive = useAppSelector(state => state.categoriesSlice.sortActive)
	const dispatch = useAppDispatch()

	const settingerCategory = (category: ISort) => {
		if (category.title !== sortActive) {
			dispatch(setterCategoryItem(category))
			dispatch(pizzaCategoryFilter(category))
		}
	}

	return {
		categoriesArr,
		settingerCategory,
	}
}
