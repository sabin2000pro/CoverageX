require('dotenv').config();
import mongoose from 'mongoose';

const ANALYTICS_DB_URI = process.env.ANALYTICS_SERVICE_DB_URI || ""

export const connectAnalyticsSchema = async () => {

    try {

        const currentConnection = await mongoose.connect(ANALYTICS_DB_URI)

        if(currentConnection.connection) {
            console.log(`Connected to the analytics DB schema successfully`)
        }

        else {
            console.log(`Could not connect to the DB schema`)
        }

    } 
    
    catch(error) {

        if(error) {
            throw new Error(error);
        }


    }


}