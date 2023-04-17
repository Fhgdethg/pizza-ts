import { useAppDispatch, useAppSelector } from './appReduxHooks'
import { toggleWindow } from '../redux/window/windowSlice'

export const useToggleWindow = () => {
	const dispatch = useAppDispatch()
	const toggleVal = useAppSelector(
		state => state.toggleWindowSlice.displayWindow
	)

	const togglerWindow: React.MouseEventHandler<HTMLDivElement> = e => {
		e.stopPropagation()
		dispatch(toggleWindow())
	}

	return { toggleVal, togglerWindow }
}
