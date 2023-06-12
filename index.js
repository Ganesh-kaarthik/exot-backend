import express from 'express'
import cors  from 'cors'
import dotenv from 'dotenv'

import userRoutes from './routes/users.js'
import questionRoutes from './routes/Question.js'
import answerRoutes from './routes/Answers.js'
import connectDB from './db.js'


dotenv.config();
connectDB();
const app = express();
app.use(express.json({limit: "30mb", extended: true}))
app.use(express.urlencoded({limit: "30mb", extended: true}))
app.use(cors());

app.get('/', (req, res) => {
    res.send('This is a stack overflow API')
}) 

app.use('/user', userRoutes)
app.use('/questions', questionRoutes)
app.use('/answer', answerRoutes)

const PORT = process.env.PORT 

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});
