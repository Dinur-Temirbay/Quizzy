import type { Room } from '../types'

export const rooms = new Map<string, Room>()

export function generatePin(): string {
	let pin: string
	do {
		pin = Math.floor(100000 + Math.random() * 900000).toString()
	} while (rooms.has(pin))
	return pin
}

rooms.set('123456', {
	pin: '123456',
	hostSocketId: '',
	quiz: {
		id: 'test',
		title: 'Test quiz',
		questions: [
			{
				id: 'q1',
				text: '2 + 2 = ?',
				timeLimit: 15,
				answers: [
					{ id: 'a1', text: '3', isCorrect: false },
					{ id: 'a2', text: '4', isCorrect: true },
					{ id: 'a3', text: '5', isCorrect: false },
					{ id: 'a4', text: '22', isCorrect: false },
				],
			},
		],
	},
	status: 'lobby',
	currentQuestionIndex: 0,
	questionStartedAt: null,
	players: new Map(),
	answers: new Map(),
})
