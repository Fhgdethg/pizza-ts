import { createSlice } from '@reduxjs/toolkit'

interface IDisplay {
	displayWindow: boolean
}

const initialState: IDisplay = {
	displayWindow: false,
}

export const windowSlice = createSlice({
	name: 'toggleWindow',
	initialState,
	reducers: {
		toggleWindow: state => {
			state.displayWindow = !state.displayWindow
		},
		hideWindow: state => {
			state.displayWindow = false
		},
	},
})

export const { toggleWindow, hideWindow } = windowSlice.actions
export default windowSlice.reducer
