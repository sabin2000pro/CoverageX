require('dotenv').config();
import express from 'express'
import morgan from 'morgan';
import xss from 'xss-clean';
import cors from 'cors';
import mongoSanitize from 'express-mongo-sanitize'
import { connectAuthSchema } from './database/connect-db';

connectAuthSchema();

const app: any = express();
const AUTH_SERVICE_PORT: any = process.env.AUTH_SERVICE_PORT

app.use(morgan('dev'));
app.use(xss());

app.use(cors({
    origin: '*',
    methods: ["PUT", "POST", "GET", "DELETE"]
}))

app.use(mongoSanitize());

app.get('/', (request: any, response: any, next: any): Promise<any> => {
    return response.status(200).json({success: true, message: `Auth root route`})
})

const server = app.listen(AUTH_SERVICE_PORT, (error) => {
    try {
        
      if(!error) {
         return console.log(`Authentication service listening for requests on port ${AUTH_SERVICE_PORT}`)
      }

      else {
         return console.log(`Could not listen for requests`);
      }
    } 
    
    catch(error) {
      if(error) {
        throw new Error(error);
      }
    }

})

export {server}