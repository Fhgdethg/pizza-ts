import React, {useEffect} from "react";

import { ReactComponent as PizzaMinusItem } from '../../assets/icons/basket-minus.svg'
import { ReactComponent as PizzaPlusItem } from '../../assets/icons/basket-plus.svg'
import { ReactComponent as PizzaDeleteItem } from '../../assets/icons/basket-delete.svg'

import {useAppDispatch, useAppSelector} from "../../hooks/appReduxHooks";
import {addToBasketPizza, generalPizzasPriceCounter, pizzasCounter, subtractFromBasketPizza, deletePizzaItem} from "../../redux/pizza/pizzaSlice";

import {ICartItemProps} from "./CartItemTypes";

const CartItem: React.FC<ICartItemProps> = ({data}) => {
	const dispatch = useAppDispatch()

	const {basketPizzas} = useAppSelector(state => state.pizzaSlice)

	const subtractPizza = () => dispatch(subtractFromBasketPizza(data[1].title))

	const addPizza = () => dispatch(addToBasketPizza(data[1].title))

	const deletePizzaHandler = () => dispatch(deletePizzaItem(data[1].title))

	useEffect(() => {
		dispatch(pizzasCounter())
		dispatch(generalPizzasPriceCounter())
	}, [basketPizzas])

	return (
		<div className="cart__item">
			<div className="cart__item-img">
				<img
					className="pizza-block__image"
					src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
					alt="Pizza"
				/>
			</div>
			<div className="cart__item-info">
				<h3>{data[1].title}</h3>
				{/*<p>26 см.</p>*/}
			</div>
			<div className="cart__item-count">
				<div className="button button--outline button--circle cart__item-count-minus" onClick={subtractPizza}>
					<PizzaMinusItem />
				</div>
				<b>{data[0]}</b>
				<div className="button button--outline button--circle cart__item-count-plus" onClick={addPizza}>
					<PizzaPlusItem />
				</div>
			</div>
			<div className="cart__item-price">
				<b>{data[1].price} ₽</b>
			</div>
			<div className="cart__item-remove">
				<div className="button button--outline button--circle" onClick={deletePizzaHandler}>
					<PizzaDeleteItem />
				</div>
			</div>
		</div>
	)
}

export default CartItem
