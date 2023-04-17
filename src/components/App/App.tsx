import uuid from 'uuid-random'
import { Routes, Route } from 'react-router'

import Header from '../../general/Header/Header'

import { useAppDispatch } from '../../hooks/appReduxHooks'
import { hideWindow } from '../../redux/window/windowSlice'

import { routerArr } from '../../data/routerData'
import { IRout } from '../../type/router'

import '../../scss/app.scss'

function App() {
	const dispatch = useAppDispatch()

	return (
		<div className="wrapper" onClick={() => dispatch(hideWindow())}>
			<Header />
			<Routes>
				{routerArr.map((rout: IRout) => (
					<Route path={rout.path} element={rout.element()} key={uuid()} />
				))}
			</Routes>
		</div>
	)
}

export default App
