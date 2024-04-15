import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('Рендер первой страницы', () => {
	test('renders Reviewed by you', () => {
		render(<App />)
		const reviewed = screen.getByText(/Reviewed by you/i)
		expect(reviewed).toBeInTheDocument()
	})
})
