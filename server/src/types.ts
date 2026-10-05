export interface Answer {
	id: string
	text: string
	isCorrect: boolean
}

export interface Question {
	id: string
	text: string
	timeLimit: number
	answers: Answer[]
}

export interface Quiz {
	id: string
	title: string
	questions: Question[]
}

export interface Player {
	id: string
	nickname: string
	score: number
}

export type RoomStatus = 'lobby' | 'question' | 'results' | 'finished'

export interface Room {
	pin: string
	hostId: string
	quiz: Quiz
	players: Map<string, Player>
	status: RoomStatus
	currentQuestionIndex: number
}
