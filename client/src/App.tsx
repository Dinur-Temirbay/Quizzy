import { Layout } from '@/components/Layout'
import { HomePage } from '@/pages/HomePage'
import { createBrowserRouter, RouterProvider } from 'react-router'

const router = createBrowserRouter([
	{
		element: <Layout />,
		children: [
			{
				path: '/',
				element: <HomePage />,
			},
		],
	},
])

function App() {
	return (
		<>
			<RouterProvider router={router} />
		</>
	)
}

export default App
