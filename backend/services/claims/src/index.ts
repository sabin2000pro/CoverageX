require('dotenv').config();
import express, { NextFunction } from 'express'
import morgan from 'morgan'
import cors from 'cors'
import {StatusCodes} from 'http-status-codes'

const app: any = express()
const CLAIMS_SERVICE_PORT: string = process.env.CLAIMS_SERVICE_PORT || ""
const CLAIMS_SERVICE_DEV_MODE: string = process.env.CLAIMS_SERVICE_DEV_MODE || ""

app.use(express.json());

if(CLAIMS_SERVICE_DEV_MODE === 'development') {
    app.use(morgan('dev'));
}

app.use(cors({
    origin: "*",
    methods: ['POST', 'GET', "DELETE", "PATCH", "PUT"]
}))

app.get('/', (request: any, response: any, next: NextFunction) => {
  return response.status(StatusCodes.OK).json({success: true, message: "Claims Microservice Root Route"})
})

const claimsServer = app.listen(CLAIMS_SERVICE_PORT, (error: any) => {
    
    try {

       if(!error) {
            return console.log(`Claims server listening for requests on port ${CLAIMS_SERVICE_PORT} in mode ${CLAIMS_SERVICE_DEV_MODE}`);
       }

    } 
    
    catch(error: any) {

        if(error) {
            throw new Error(error);
        }

    }
})

export {claimsServer}