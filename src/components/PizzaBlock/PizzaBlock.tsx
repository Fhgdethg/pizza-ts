import React, { useEffect } from 'react'

import { PizzaSettings } from '../PizzaSettings/PizzaSettings'
import { ReactComponent as AddSymbol } from '../../assets/icons/add.svg'

import { IPizza } from '../../type/pizzas'
import {useAppDispatch, useAppSelector} from '../../hooks/appReduxHooks'
import {addToBasketPizza, pizzasCounter, generalPizzasPriceCounter} from '../../redux/pizza/pizzaSlice'

interface IPizzaProps extends IPizza {
	index: number
}

const PizzaBlock: React.FC<IPizzaProps> = ({
	imageUrl,
	title,
	sizes,
	price,
	category,
	rating,
	index,
}) => {
	const dispatch = useAppDispatch()

	const {basketPizzas} = useAppSelector(state => state.pizzaSlice)

	const pizzaNow = basketPizzas.find(pizza => pizza[1].title === title)

	const addPizzaHandler = () => dispatch(addToBasketPizza(title))

	useEffect(() => {
		dispatch(pizzasCounter())
		dispatch(generalPizzasPriceCounter())
	}, [basketPizzas])

	// const getPizzasCount = () => dispatch(addToBasketPizza(title))

	return (
		<div className="pizza-block">
			<img className="pizza-block__image" src={imageUrl} alt="Pizza" />
			<h4 className="pizza-block__title">{title}</h4>
			{/*<PizzaSettings sizes={sizes} index={index} />*/}
			<div className="pizza-block__bottom">
				<div className="pizza-block__price">от {price} ₽</div>
				<div className="button button--outline button--add" onClick={addPizzaHandler}>
					<div className="button__add">
						<AddSymbol />
					</div>
					<span>Добавить</span>
					{
						pizzaNow ? <i>{pizzaNow[0]}</i> : null
					}
				</div>
			</div>
		</div>
	)
}

export default PizzaBlock
