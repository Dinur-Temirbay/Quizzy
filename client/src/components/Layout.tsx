import { Outlet } from 'react-router'
import { Navbar } from '@/components/Navbar/Navbar'

export function Layout() {
	return (
		<div className='flex flex-col min-h-screen'>
			<Navbar />
			<main className='flex flex-1'>
				<Outlet />
			</main>
		</div>
	)
}
