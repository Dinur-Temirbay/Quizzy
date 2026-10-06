import { Button } from '@/components/ui/Button'

export function HomePage() {
	return (
		<div className='flex items-center justify-center h-screen gap-5'>
			<Button>Create Game</Button>
			<Button>Join Game</Button>
		</div>
	)
}
