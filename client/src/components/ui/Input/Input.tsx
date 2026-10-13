import type { ComponentProps } from 'react'
import { cn } from '@/lib/cn'

type InputProps = ComponentProps<'input'>

export function Input({ className, ...props }: InputProps) {
	return (
		<input
			className={cn(
				'w-full rounded-md border border-gray-300 px-4 py-2 outline-none transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-200 disabled:opacity-50',
				className,
			)}
			{...props}
		/>
	)
}
