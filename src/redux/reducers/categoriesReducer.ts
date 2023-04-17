import type { PayloadAction } from '@reduxjs/toolkit'
import { ISort } from '../../type/sorts'

export const setterItem = (state: any, action: PayloadAction<ISort>) => {
	state.sortData.forEach((element: ISort) => {
		if (element.title === action.payload.title) {
			element.active = true
			state.sortActive = element.title
		} else element.active = false
	})
}
