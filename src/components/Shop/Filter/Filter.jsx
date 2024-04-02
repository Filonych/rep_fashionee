import { useContext } from 'react'
import { ShopContext } from '../../../context'
import { Button } from './components/Button'
import { Categories } from './components/Categories'
import { Colors } from './components/Colors'
import { Price } from './components/Price'
import './style.css'

export const Filter = () => {
	const { searchValue, sortValue, updateProducts, draftFilter, setFilter } =
		useContext(ShopContext)

	const applyFilter = () => {
		setFilter(draftFilter)
		updateProducts(searchValue, draftFilter, sortValue)
	}

	return (
		<>
			<Categories />
			<Price />
			<Colors />
			<Button applyFilter={applyFilter} />
		</>
	)
}
