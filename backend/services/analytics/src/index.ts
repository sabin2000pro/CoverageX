require('dotenv').config();
import { StatusCodes } from 'http-status-codes';
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { connectAnalyticsSchema } from './database/analytics-schema';

connectAnalyticsSchema();

const app: any = express();
const ANALYTICS_SERVICE_PORT = process.env.ANALYTICS_SERVICE_PORT || ""

app.use(express.json());
app.use(morgan("dev"));

app.use(cors({
    origin: "*",
    methods: ['PUT', "GET", "PATCH", "DELETE", "POST"]
}))

app.get('/', (request, response, next) => {
    return response.status(StatusCodes.OK).json({success: true, message: `Analytics Root Route`})
})

const server = app.listen(ANALYTICS_SERVICE_PORT, (error) => {

    try {

      if(!error) {
         return console.log(`Analytics service listening for requests on port ${ANALYTICS_SERVICE_PORT}`)
      }

      else {
        return console.error(`Could not listen for requests ${error}`)
      }

    } 
    
    catch(error) {

        if(error) {
            throw new Error(error);
        }

    }

})

export {server}