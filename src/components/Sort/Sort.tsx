import { motion, AnimatePresence } from 'framer-motion'

import { ReactComponent as SortIcon } from '../../assets/icons/sort-icon.svg'

import { pizzaSortByConditions } from '../../redux/pizza/pizzaSlice'
import { useAppSelector, useAppDispatch } from '../../hooks/appReduxHooks'
import { useToggleWindow } from '../../hooks/useToggleWindow'
import { useSettingSort } from '../../hooks/useSettingSort'

import { ISort } from '../../type/sorts'

export default function Sort() {
	let { toggleVal, togglerWindow } = useToggleWindow()
	let { sortActive, setItem } = useSettingSort()
	const dispatch = useAppDispatch()
	const sortArr = useAppSelector(state => state.sortSlice.sortData)

	return (
		<div className="sort">
			<div className="sort__label" onClick={togglerWindow}>
				<SortIcon className={`${toggleVal ? 'sort__label-rotate-icon' : ''}`} />
				<b>Сортировка по:</b>
				<span>{sortActive}</span>
			</div>
			<AnimatePresence>
				{toggleVal && (
					<motion.div
						className={`sort__popup`}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1, rotate: 355 }}
						exit={{ opacity: 0 }}
						transition={{
							duration: 0.7,
							ease: 'linear',
						}}>
						<ul>
							{sortArr.map((sort: ISort) => (
								<li
									className={`${sort.active && 'active'}`}
									onClick={() => {
										setItem(sort)
										dispatch(pizzaSortByConditions(sort))
									}}
									key={sort.title}>
									{sort.title}
								</li>
							))}
						</ul>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	)
}
