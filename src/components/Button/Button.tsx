import { ReactComponent as Basket } from '../../assets/icons/basket-shop.svg'
import {useAppSelector} from "../../hooks/appReduxHooks";

export default function Button() {
	const {generalPizzasCount, generalPizzasPrice} = useAppSelector(state => state.pizzaSlice)

	return (
		<div className="button button--cart">
			<span>{generalPizzasPrice} ₽</span>
			<div className="button__delimiter" />
			<Basket />
			<span>{generalPizzasCount}</span>
		</div>
	)
}
