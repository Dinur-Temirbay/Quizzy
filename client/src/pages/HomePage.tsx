import { Link } from 'react-router'

export function HomePage() {
	return (
		<div className='flex flex-1 items-center justify-center gap-5'>
			<Link
				to='/create-game'
				className='bg-blue-500 text-white px-4 py-2 rounded-lg cursor-pointer'
			>
				Create Game
			</Link>
			<Link
				to='/join-game'
				className='bg-red-500 text-white px-4 py-2 rounded-lg cursor-pointer'
			>
				Join Game
			</Link>
		</div>
	)
}
