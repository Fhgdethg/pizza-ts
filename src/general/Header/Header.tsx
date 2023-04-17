import { useNavigate } from 'react-router'
import Button from '../../components/Button/Button'
import { ReactComponent as PizzaLogo } from '../../assets/icons/pizza-logo.svg'

export default function Header() {
	const navigate = useNavigate()

	return (
		<header className="header">
			<div className="container header__container">
				<div className="header__logo" onClick={() => navigate('')}>
					<div className="header__logo__logo">
						<PizzaLogo />
					</div>
					<div>
						<h1>React Pizza</h1>
						<p>самая вкусная пицца во вселенной</p>
					</div>
				</div>
				<div className="header__cart" onClick={() => navigate('/cart')}>
					<Button />
				</div>
			</div>
		</header>
	)
}
