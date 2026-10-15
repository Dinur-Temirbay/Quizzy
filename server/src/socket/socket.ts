import type { Server, Socket } from 'socket.io'
import { registerRoomHandlers } from '../rooms/room.handlers'

export function registerSocketHandlers(io: Server, socket: Socket) {
	console.log('connected:', socket.id)

	registerRoomHandlers(io, socket)

	socket.on('disconnect', reason => {
		console.log('disconnected:', socket.id, reason)
	})
}
