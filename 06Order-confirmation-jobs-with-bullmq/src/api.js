import express from 'express'
import {emailQueue} from './queue.js'

const app = express()

app.use(express.json())

// here also we pass 3 values in the producer
//first is the name , like what do we want to do
//second is the job body/data that is to be added
// third is configuration , like some rules

app.post('/welcome-email' , async(req,res)=>{
    const job = emailQueue.add(
        'send-welcome-email',
        {
            to : req.body.to ,
            name : req.body.name || 'Learner' ,
        },
        {
            attempts : 3,
            backoff : {
                type : 'exponential' , 
                delay : 1000
            }
        }
    )
    res.json({message : "JOb added in the queue!" , jobId : job.id})
})

app.listen(3000 , ()=>{
    console.log('Server is running on port 3000')
})