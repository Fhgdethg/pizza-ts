import { IPizza } from '../type/pizzas'
import { SortFunction } from '../type/sorts'
import { findMaxOrMin } from './findMaxOrMin'

export const sort: SortFunction = (
	pizzaArrToSort,
	pizzaShow,
	moreOrLess,
	state,
	typeSort
) => {
	const conditionItemsArr: any[] = pizzaArrToSort.map(
		(conditionItem: IPizza) => {
			if (typeSort === 'цене') return conditionItem.price
			else if (typeSort === 'популярности') return conditionItem.rating
			else if (typeSort === 'алфавиту') {
				return conditionItem.title.toLowerCase()
			}
		}
	)
	const conditionItemsforDeletElementsArray = [...conditionItemsArr]

	for (let i of pizzaArrToSort) {
		if (pizzaArrToSort.length === pizzaShow.length) break

		const maxNowInPriceArray = findMaxOrMin<number | string>(
			conditionItemsforDeletElementsArray,
			moreOrLess
			// '<'
		)
		const edentialElementsIndexesArr: number[] = []

		conditionItemsArr.forEach((rating: number, index) => {
			if (rating === maxNowInPriceArray) edentialElementsIndexesArr.push(index)
		})

		for (let element of edentialElementsIndexesArr)
			pizzaShow.push(pizzaArrToSort[element])

		const priceForDeletElementsArraySize =
			conditionItemsforDeletElementsArray.length

		for (let k = 0; k < priceForDeletElementsArraySize; k++) {
			if (conditionItemsforDeletElementsArray[k] === maxNowInPriceArray) {
				conditionItemsforDeletElementsArray.splice(k, 1)
				k--
			}
		}
	}

	state.pizzaShow = pizzaShow
}
