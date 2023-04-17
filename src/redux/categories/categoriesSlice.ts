import { createSlice } from '@reduxjs/toolkit'
import { setterItem } from '../reducers/categoriesReducer'
import { categoriesArr } from '../../data/categoriesArr'
import { Sort } from '../../type/sorts'

const initialState: Sort = {
	sortData: categoriesArr,
	sortActive: categoriesArr[0].title,
}

export const categoriesSlice = createSlice({
	name: 'categories',
	initialState,
	reducers: {
		setterCategoryItem: setterItem,
	},
})

export const { setterCategoryItem } = categoriesSlice.actions
export default categoriesSlice.reducer
