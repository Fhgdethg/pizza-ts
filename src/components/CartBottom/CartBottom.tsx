import { ButtonGoBack } from "../ButtonGoBack/ButtonGoBack"

import {useAppDispatch, useAppSelector} from "../../hooks/appReduxHooks";
import { setShowStatus } from "../../redux/byModal/byModalSlice";
import {clearBasket} from "../../redux/pizza/pizzaSlice";

export default function CartBottom() {
	const dispatch = useAppDispatch()

	const {generalPizzasCount, generalPizzasPrice} = useAppSelector(state => state.pizzaSlice)

	const byHandler = () => {
		dispatch(setShowStatus(true))
		dispatch(clearBasket())
		setTimeout(() => {
			dispatch(setShowStatus(false))
		}, 2500)
	}

	return (
		<div className="cart__bottom">
			<div className="cart__bottom-details">
				<span>
					Всего пицц: <b>{generalPizzasCount} шт.</b>{' '}
				</span>
				<span>
					Сумма заказа: <b>{generalPizzasPrice} ₽</b>{' '}
				</span>
			</div>
			<div className="cart__bottom-buttons">
				<ButtonGoBack />
				<div className="button pay-btn" onClick={byHandler}>
					<span>Оплатить сейчас</span>
				</div>
			</div>
		</div>
	)
}
