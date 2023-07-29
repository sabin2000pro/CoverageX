import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config({path: '/Users/sabin2000/Desktop/CoverageX/backend/services/authentication/.env'});

const AUTH_DB_URI = process.env.AUTH_DB_URI || ""

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