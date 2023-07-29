import dotenv from 'dotenv';
dotenv.config({path: '.env'});

import express from 'express'
import morgan from 'morgan';
import xss from 'xss-clean';
import cors from 'cors';
import mongoSanitize from 'express-mongo-sanitize'

const app: any = express();
const AUTH_SERVICE_PORT: string = process.env.AUTH_SERVICE_PORT || ""