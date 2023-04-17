import { createSlice } from '@reduxjs/toolkit'
import {IByModalTypes} from "./byModalTypes";

const initialState: IByModalTypes = {
   showStatus: false,
}

export const byModalSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        setShowStatus(state, {payload}) {
            state.showStatus = payload
        }
    },
})

export const { setShowStatus } = byModalSlice.actions
export default byModalSlice.reducer
