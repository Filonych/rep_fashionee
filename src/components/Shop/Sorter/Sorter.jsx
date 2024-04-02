import { useContext } from 'react'
import { ShopContext } from '../../../context'

export const Sorter = () => {
	const { searchValue, filter, setSortValue, updateProducts } =
		useContext(ShopContext)

	const handleSorting = event => {
		const selectedSortValue = event.target.value
		setSortValue(selectedSortValue)

		updateProducts(searchValue, filter, selectedSortValue)
	}

	return (
		<div className='sort_by_list_wrap'>
			<select onChange={handleSorting} name='sort_by_list'>
				<option value={'byDefault'}>By default</option>
				<option value={'byName'}>By name</option>
				<option value={'byPrice'}>By price</option>
			</select>
		</div>
	)
}
