import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import gamesRouter from './routes/games.routes.js'
dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())

app.use(gamesRouter)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Server is running: ${PORT}`)
})
