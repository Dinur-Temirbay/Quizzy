import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@/components/ui/Button'

export function JoinGamePage() {
	const schema = z.object({
		pin: z.string().regex(/^\d{6}$/, 'PIN must be 6 digits'),
		nickname: z.string().trim().min(2, 'Too short').max(20, 'Too long'),
	})

	type FormValues = z.infer<typeof schema>

	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm<FormValues>({
		resolver: zodResolver(schema),
	})

	const onSubmit = () => {}

	return (
		<div className='flex flex-1 items-center justify-center gap-5'>
			<form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4'>
				<input
					{...register('pin')}
					inputMode='numeric'
					maxLength={6}
					placeholder='Game PIN'
					className='border border-gray-300 rounded-md py-2 px-4'
				/>
				{errors.pin && (
					<p className='text-red-500 text-sm'>{errors.pin.message}</p>
				)}
				<input
					{...register('nickname')}
					maxLength={15}
					placeholder='Player Name'
					className='border border-gray-300 rounded-md py-2 px-4'
				/>
				{errors.nickname && (
					<p className='text-red-500 text-sm'>{errors.nickname.message}</p>
				)}
				{errors.root && (
					<p className='text-red-500 text-sm'>{errors.root.message}</p>
				)}

				<Button
					type='submit'
					className='bg-red-500 text-white px-4 py-2 rounded-lg cursor-pointer'
				>
					{isSubmitting ? 'Joining...' : 'Join Game'}
				</Button>
			</form>
		</div>
	)
}
