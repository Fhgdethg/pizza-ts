import { useSettingerCategory } from '../../hooks/useSettingerCategory'
import { ISort } from '../../type/sorts'

export default function Categories() {
	const { categoriesArr, settingerCategory } = useSettingerCategory()

	return (
		<div className="categories">
			<ul>
				{categoriesArr.map((category: ISort) => (
					<li
						className={`${category.active && 'active'}`}
						onClick={() => settingerCategory(category)}
						key={category.title}>
						{category.title}
					</li>
				))}
			</ul>
		</div>
	)
}
