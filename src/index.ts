import express,{Request,Response} from 'express'

const app = express()
const PORT = 8080

app.get('/', (req:Request, res: Response) => {
    res.send('Hello world!!!')
})

app.listen(PORT, () => {
    console.log(`Server has been started on port  ${PORT}`)
})