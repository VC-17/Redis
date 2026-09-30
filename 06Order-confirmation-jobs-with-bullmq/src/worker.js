import {Worker} from 'bullmq';

import { emailQueue , connection } from './queue.js';

// we define the worker and we pass 3 things in it 
// the queue name on which it will work
// the mechanism/logic it will use to perform the jobs
// the connection
const worker = new Worker(
    'emails' ,
    async (job) => {
        console.log('Processing email job:' , job.id , job.name , job.data)
        (await new Promise((resolve) => setTimeout(resolve, 2000))) // Simulate email sending delay
        console.log('Email job completed' , job.id , job.name , job.data)
    },
    {connection}
)

// we also define what to do if the jobs are completed or failed
// genrally when a job is completed it gets popped from the queue , but here we are just doing console log
worker.on('completed' , (job)=>{
    console.log("JOb completed" , job.id , job.name , job.data)
})

worker.on('failed' , (job)=>{
    console.log("Job Failed" , job.id , job.name , job.data)
})