import { cva } from 'class-variance-authority'

export const buttonVariants = cva(
	'inline-flex items-center justify-center gap-2 rounded-lg font-medium cursor-pointer disabled:pointer-events-none disabled:opacity-50',
	{
		variants: {
			variant: {
				primary: 'bg-blue-500 text-white hover:bg-blue-600',
				secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300',
				danger: 'bg-red-500 text-white hover:bg-red-600',
				ghost: 'bg-transparent hover:bg-gray-100',
			},
			size: {
				sm: 'px-3 py-1.5 text-sm',
				md: 'px-4 py-2 text-base',
				lg: 'px-6 py-3 text-xl',
			},
		},
		defaultVariants: {
			variant: 'primary',
			size: 'md',
		},
	},
)
