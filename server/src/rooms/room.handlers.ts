import type { Server, Socket } from 'socket.io'

export function registerRoomHandlers(io: Server, socket: Socket) {
	socket.on('join-room', (payload, callback) => {
		console.log('join-room:', payload)
		callback({ ok: false, error: 'Not implemented' })
	})
}
