const express = require('express')
const userRouter = require('./routers/userRouter')
const projectRouter = require('./routers/projectsRouter')

const app = express()

app.use(express.json())
app.use('/users', userRouter)
app.use('/projects', projectRouter)

//not found
app.use((req, res, next) => {
  const error = new Error('Not found')
  error.status = 404
  next(error)
})

//catch all
app.use((error, req, res, next) => {
  res.status(error.status || 500).json({"error": error.message})
})

app.listen(3000)