require('dotenv').config();
import mongoose from 'mongoose';

const AUTH_DB_URI = process.env.AUTH_DB_URI

export const connectAuthSchema = async () => {
    
    try {

      if (!AUTH_DB_URI) {
          throw new Error('No database URI provided. Please set the AUTH_DB_URI environment variable.');
      }

      const dbConnection = await mongoose.connect(AUTH_DB_URI);

      if(!dbConnection.connection) {
         throw new Error(`Cannot connect to auth schema`)
      }

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