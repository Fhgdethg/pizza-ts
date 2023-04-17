import React from 'react'

import Categories from '../../components/Categories/Categories'
import Sort from '../../components/Sort/Sort'
import PizzaBlock from '../../components/PizzaBlock/PizzaBlock'
import Spinner from "../../components/Spinner/Spinner";

import { useStartShop } from '../../hooks/useStartShop'

import { IPizza } from '../../type/pizzas'

const Shop: React.FC<void> = () => {
	const { pizzaArr } = useStartShop()

	return (
		<div className="content">
			<div className="container">
				<div className="content__top">
					<Categories />
					<Sort />
				</div>
				<h2 className="content__title">Все пиццы</h2>
				<div className="content__items">
					{
						pizzaArr.length ?
          				pizzaArr.map((item: IPizza, index: number) =>
						<PizzaBlock {...item} key={item.id} index={index} />)
						: <Spinner isCover/>
					}
				</div>
			</div>
		</div>
	)
}

export default Shop
