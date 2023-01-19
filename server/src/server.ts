// Back-end API RESTful
//
import Fastify from 'fastify'
import cors from '@fastify/cors'
import { appRoutes } from './routes'

const app = Fastify()

app.register(cors)
// delimitando acessos
// app.register(cors, {
// origin: ['http://localhost:3000']
// })

app.register(appRoutes)

app.listen({
  port: 5555,
}).then(() => {
  console.log("HTTP Server running.")
})


// Habits