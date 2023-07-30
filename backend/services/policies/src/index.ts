import { StatusCodes } from 'http-status-codes';
require('dotenv').config();
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

const app: any = express();
const POLICIES_SERVICE_PORT = process.env.POLICIES_SERVICE_PORT || ""
const POLICIES_SERVICE_DEV_MODE = process.env.POLICIES_SERVICE_DEV_MODE || ""

app.use(express.json());
app.use(morgan('dev'));

app.use(cors({
    origin: "*",
    methods: ['PUT', "PATCH", "POST", "GET"]
}))

app.get('/', (request: any, response: any, next: any) => {
    return response.status(StatusCodes.OK).json({success: true, message: ``})
})

// Create the server for the policies microservice
const policiesServer = app.listen(POLICIES_SERVICE_PORT, (error: any) => {
    try {

    } 
    
    catch(error) {

    }
})

export {policiesServer}