export const findMaxOrMin = <T>(arr: T[], moreOrLess: string) => {
	let max = arr[0]
  
	switch (moreOrLess) {
		case '<':
			for (let num of arr) {
				if (num < max) max = num
			}
			break
		case '>':
			for (let num of arr) {
				if (num > max) max = num
			}
			break
		default:
			break
	}

	return max
}
