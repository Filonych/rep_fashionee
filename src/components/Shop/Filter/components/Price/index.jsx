import { useContext } from 'react'
import { ShopContext } from '../../../../../context'

export const Price = () => {
	const { draftFilter, setDraftFilter } = useContext(ShopContext)

	return (
		<div className='sidebar_price'>
			<h4 className='sidebar_section_title'>Price</h4>
			<input
				className='min_price'
				placeholder='Min'
				onChange={event =>
					setDraftFilter({ ...draftFilter, minPrice: event.target.value })
				}
			/>
			<input
				className='max_price'
				placeholder='Max'
				onChange={event =>
					setDraftFilter({ ...draftFilter, maxPrice: event.target.value })
				}
			/>
		</div>
	)
}
