import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import helmet from 'helmet'
import { createServer } from 'node:http'
import { Server } from 'socket.io'

dotenv.config()

const app = express()
app.use(helmet())
app.use(cors({ origin: process.env.CLIENT_URL }))
app.use(express.json())

const server = createServer(app)
const io = new Server(server, {
	cors: { origin: process.env.CLIENT_URL },
})

io.on('connection', socket => {
	console.log('a user connected')

	socket.on('disconnect', () => {
		console.log('user disconnected')
	})
})

server.listen(process.env.PORT, () => {
	console.log(`Server is running on port ${process.env.PORT}`)
})
