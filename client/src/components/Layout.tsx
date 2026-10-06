import { Outlet } from 'react-router'
import { Navbar } from '@/components/Navbar/Navbar'

export function Layout() {
	return (
		<div className='flex flex-col min-h-screen'>
			<header>
				<Navbar />
			</header>
			<main className='grow'>
				<Outlet />
			</main>
		</div>
	)
}
