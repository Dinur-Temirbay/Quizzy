import { Room } from './types'

export const rooms = new Map<string, Room>()

export function generatePin(): string {
	let pin: string
	let attempts = 0
	do {
		if (attempts++ > 50) throw new Error('Сервер перегружен, попробуйте позже')
		pin = Math.floor(100000 + Math.random() * 900000).toString()
	} while (rooms.has(pin))
	return pin
}
