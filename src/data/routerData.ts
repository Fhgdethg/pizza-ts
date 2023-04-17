import Shop from '../pages/Shop/Shop'
import Cart from '../pages/Cart/Cart'

export const routerArr = [
	{
		path: '/',
		element: Shop,
	},
	{
		path: '/cart',
		element: Cart,
	},
	{
		path: '/*',
		element: Shop,
	},
]
