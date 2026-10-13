import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@/components/ui/Button/Button'
import { Input } from '@/components/ui/Input/Input'

const schema = z.object({
	pin: z.string().regex(/^\d{6}$/, 'PIN must be 6 digits'),
	nickname: z.string().trim().min(2, 'Too short').max(15, 'Too long'),
})

type FormValues = z.infer<typeof schema>

export function JoinGamePage() {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm<FormValues>({
		resolver: zodResolver(schema),
	})

	const onSubmit = () => {}

	return (
		<div className='flex flex-1 items-center justify-center'>
			<form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4'>
				<Input
					{...register('pin')}
					inputMode='numeric'
					maxLength={6}
					placeholder='Game PIN'
				/>
				{errors.pin && (
					<p className='text-red-500 text-sm'>{errors.pin.message}</p>
				)}
				<Input
					{...register('nickname')}
					maxLength={15}
					placeholder='Player Name'
				/>
				{errors.nickname && (
					<p className='text-red-500 text-sm'>{errors.nickname.message}</p>
				)}
				{errors.root && (
					<p className='text-red-500 text-sm'>{errors.root.message}</p>
				)}
				<Button type='submit' size='lg' disabled={isSubmitting}>
					{isSubmitting ? 'Joining...' : 'Join Game'}
				</Button>
			</form>
		</div>
	)
}
