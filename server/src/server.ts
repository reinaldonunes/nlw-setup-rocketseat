// Back-end API RESTful
//
import Fastify from 'fastify'
import cors from '@fastify/cors'
import { PrismaClient }  from '@prisma/client'

const app = Fastify()
const prisma = new PrismaClient()

app.register(cors)
// delimitando acessos
// app.register(cors, {
// origin: ['http://localhost:3000']
// })

app.get('/', async() => {
  const habits = await prisma.habit.findMany({
    where: {
      title: {
        startsWith: 'Beber'
      }
    }
  })

  return habits
})

app.get('/all-habits', async() => {
  const habits = await prisma.habit.findMany()

  return habits
})

app.listen({
  port: 9090,
}).then(() => {
  console.log("HTTP Server running....")
})


// Habits