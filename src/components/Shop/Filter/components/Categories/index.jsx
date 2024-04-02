import { useContext } from 'react'
import { ShopContext } from '../../../../../context'
import { parseData } from '../../../../../helpers/parseData'

export const Categories = () => {
	const { draftFilter, setDraftFilter } = useContext(ShopContext)

	const { filteredCategories } = parseData()

	return (
		<div className='sidebar_categories'>
			<h4 className='sidebar_section_title'>Categories</h4>
			<ul className='sidebar_category_list'>
				<li
					onClick={() => {
						setDraftFilter({ ...draftFilter, category: 'All' })
					}}
					className={
						draftFilter.category === 'All' ? 'current_category' : 'undefined'
					}
				>
					All
				</li>
				{filteredCategories.map(item => (
					<li
						className={
							draftFilter.category === item ? 'current_category' : 'undefined'
						}
						key={item}
						onClick={() => {
							setDraftFilter({ ...draftFilter, category: item })
						}}
					>
						{item}
					</li>
				))}
			</ul>
		</div>
	)
}
