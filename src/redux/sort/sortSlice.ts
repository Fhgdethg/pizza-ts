import { createSlice } from '@reduxjs/toolkit'
import { setterItem } from '../reducers/categoriesReducer'
import { sortArr } from '../../data/sortArr'
import { Sort } from '../../type/sorts'

const initialState: Sort = {
	sortData: sortArr,
	sortActive: sortArr[0].title,
}

export const sortSlice = createSlice({
	name: 'sort',
	initialState,
	reducers: {
		setterActiveItem: setterItem,
	},
})

export const { setterActiveItem } = sortSlice.actions
export default sortSlice.reducer
