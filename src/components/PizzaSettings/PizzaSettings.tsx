import React from 'react'
import uuid from 'uuid-random'
import { useAppDispatch, useAppSelector } from '../../hooks/appReduxHooks'

interface IPizzaSettingsProps {
	sizes: number[]
  index: number
}

export const PizzaSettings: React.FC<IPizzaSettingsProps> = ({
	sizes,
  index
}) => {
	const dispatch = useAppDispatch()
  
	return (
		<div className="pizza-block__selector">
			<ul>
				{sizes.map((size: number) => (
					<li className="active" key={uuid()}>
						{size} см.
					</li>
				))}
			</ul>
		</div>
	)
}
