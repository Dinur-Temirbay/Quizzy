import { Layout } from '@/components/Layout'
import { HomePage } from '@/pages/HomePage'
import { createBrowserRouter, RouterProvider } from 'react-router'
import { JoinGamePage } from './pages/JoinGamePage'
import { CreateGamePage } from './pages/CreateGamePage'

const router = createBrowserRouter([
	{
		element: <Layout />,
		children: [
			{
				path: '/',
				element: <HomePage />,
			},
			{
				path: '/create-game',
				element: <CreateGamePage />,
			},
			{
				path: '/join-game',
				element: <JoinGamePage />,
			},
		],
	},
])

function App() {
	return <RouterProvider router={router} />
}

export default App
