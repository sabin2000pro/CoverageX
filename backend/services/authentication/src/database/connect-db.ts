require('dotenv').config();
import mongoose from 'mongoose';

const AUTH_DB_URI = process.env.AUTH_DB_URI

export const connectAuthSchema = async () => {
    try {

      const dbConnection = await mongoose.connect(AUTH_DB_URI);

      if(dbConnection.connection) {
         console.log(`Connected successfully to auth database...`);
      }

      else {
        console.log(`Could not connect to auth database`)
      }


    } 
    
    catch(error) {

      if(error) {
        
        throw new Error(error);
      }


    }

}