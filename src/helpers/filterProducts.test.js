import data from '../products.json'
import { filterProducts } from './filterProducts'

const ITEMS_PER_PAGE = 12

const currentPage = 1
const sortValue = 'byDefault'

const { products } = data

const minPrice = Math.min(...products.map(item => item.price))
const maxPrice = Math.max(...products.map(item => item.price))

const firstIndex = (currentPage - 1) * ITEMS_PER_PAGE
const lastIndex = firstIndex + ITEMS_PER_PAGE

describe('Тесты категорий товаров', () => {
	const searchValue = null

	test('По фильтру Women вернулись товары категории Women', () => {
		const filter = {
			category: 'Women',
			minPrice: minPrice,
			maxPrice: maxPrice,
			colors: [],
		}

		const info = filterProducts(searchValue, filter, sortValue, currentPage)
		const filteredByCategoryWomen = products.filter(item =>
			item.categories.includes(filter.category)
		)
		const slicedProducts = filteredByCategoryWomen.slice(firstIndex, lastIndex)

		expect(info.products).toEqual(slicedProducts)
	}),
		test('По фильтру Men вернулись товары категории Men', () => {
			const filter = {
				category: 'Men',
				minPrice: minPrice,
				maxPrice: maxPrice,
				colors: [],
			}

			const info = filterProducts(searchValue, filter, sortValue, currentPage)
			const filteredByCategoryMen = products.filter(item =>
				item.categories.includes(filter.category)
			)
			const slicedProducts = filteredByCategoryMen.slice(firstIndex, lastIndex)

			expect(info.products).toEqual(slicedProducts)
		})
})

describe('Тесты поиска товаров через input', () => {
	test('По поиску shirt вернулись товары с shirt в названии', () => {
		const filter = {
			category: 'All',
			minPrice: minPrice,
			maxPrice: maxPrice,
			colors: [],
		}

		const searchValue = 'shirt'

		const info = filterProducts(searchValue, filter, sortValue, currentPage)
		const filteredBySearchInput = products.filter(item =>
			item.name.toLowerCase().includes(searchValue.toLowerCase())
		)
		const slicedProducts = filteredBySearchInput.slice(firstIndex, lastIndex)

		expect(info.products).toEqual(slicedProducts)
	})
})
