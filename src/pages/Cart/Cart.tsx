import React from 'react'

import CartBottom from '../../components/CartBottom/CartBottom'
import CartItem from '../../components/CartItem/CartItem'
import CartTop from '../../components/CartTop/CartTop'
import ByResultModal from "../../components/ByResultModal/ByResultModal";

import {useAppSelector} from "../../hooks/appReduxHooks";

const Cart: React.FC<void> = () => {
	const {basketPizzas} = useAppSelector(state => state.pizzaSlice)

	const {showStatus} = useAppSelector(state => state.byModalSlice)

	return (
		<div className="content">
			<div className="container container--cart">
				<div className='by-modal__wrapper'>
					{
						showStatus ?
							<ByResultModal />
							: null
					}
				</div>
				<div className="cart">
					{
						basketPizzas.length ?
						<>
						<CartTop />
						<div className="content__items">
							{
								basketPizzas.map(basketPizza => <CartItem key={basketPizza[1].title} data={basketPizza} />)
							}
						</div>
						<CartBottom />
						</>
						: <h1 className='cart__empty-title'>Basket is empty</h1>}
				</div>
			</div>
		</div>
	)
}

export default Cart
