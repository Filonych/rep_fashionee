import { useContext } from 'react'
import { Filter } from '../../components/Shop/Filter/Filter'
import { Pagination } from '../../components/Shop/Pagination/Pagination'
import { Products } from '../../components/Shop/Products'
import { ReviewedItems } from '../../components/Shop/ReviewedItems/ReviewedItems'
import { Search } from '../../components/Shop/Search'
import { Sorter } from '../../components/Shop/Sorter/Sorter'
import { Subscribe } from '../../components/Shop/Subscribe'
import { TotalProducts } from '../../components/Shop/TotalProducts'
import { SaleBanner } from '../../components/common/SaleBanner'
import { ShopContext } from '../../context'

export const Shop = () => {
	const { productsInfo } = useContext(ShopContext)

	return (
		<div>
			<div className='main_section'>
				<div className='sidebar_wrap'>
					<Search />
					<Filter />
					<ReviewedItems />
					<SaleBanner />
				</div>
				<div className='main_section_center'>
					<div className='main_section_center_first-line'>
						<TotalProducts />
						<Sorter />
					</div>
					<Products products={productsInfo.products} />
					<Pagination />
				</div>
			</div>
			<Subscribe />
		</div>
	)
}
