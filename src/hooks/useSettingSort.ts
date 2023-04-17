import { useAppDispatch, useAppSelector } from './appReduxHooks'
import { setterActiveItem } from '../redux/sort/sortSlice'
import { ISort } from '../type/sorts'

export const useSettingSort = () => {
	const dispatch = useAppDispatch()
	const sortActive = useAppSelector(state => state.sortSlice.sortActive)
	const setItem = (item: ISort) => dispatch(setterActiveItem(item))

	return { sortActive, setItem }
}
