import { ReactComponent as BasketLeftBasket } from '../../assets/icons/basket-basket.svg'
import { ReactComponent as BasketRightBasket } from '../../assets/icons/basket-right-basket.svg'

import {clearBasket} from '../../redux/pizza/pizzaSlice'

import {useAppDispatch} from "../../hooks/appReduxHooks";

export default function CartTop() {
	const dispatch = useAppDispatch()

	const clearBasketHandler = () => dispatch(clearBasket())

	return (
		<div className="cart__top">
			<h2 className="content__title">
				<BasketLeftBasket />
				Корзина
			</h2>
			<div className="cart__clear" onClick={clearBasketHandler}>
				<BasketRightBasket />
				<span>Очистить корзину</span>
			</div>
		</div>
	)
}
