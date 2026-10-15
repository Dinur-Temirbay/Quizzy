export interface Player {
	id: string
	socketId: string
	nickname: string
	score: number
	isConnected: boolean
}

export interface PlayerAnswer {
	answerId: string
	at: numberhostSocketId
}

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

export type RoomStatus = 'lobby' | 'question' | 'results' | 'finished'

export interface Room {
	pin: string
	hostSocketId: string
	quiz: Quiz
	status: RoomStatus
	players: Map<string, Player>
	answers: Map<string, PlayerAnswer>
	currentQuestionIndex: number
	questionStartedAt: number | null
}
