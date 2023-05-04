import express from 'express'
import cors from 'cors'
import {today, thisWeek, thisMonth} from '../posts'
const app = express()
app.use(cors())

app.get("/posts", (req, res) => {
    res.json([today, thisWeek, thisMonth])
})

app.listen(5173, () => {
    console.log('Listening on port 5173')
})

