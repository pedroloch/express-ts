import express, { Request, Response } from 'express'
import morgan from 'morgan'

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))

app.get('/', async (req: Request, res: Response): Promise<Response> => {
  return res.status(200).send({
    message: 'Hello World!',
  })
})

try {
  app.listen(port, () => {
    console.log(`Connected successfully on port ${port}`)
  })
} catch (error) {
  console.error(`Error occured: ${error.message}`)
}
