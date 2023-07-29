import { StatusCodes } from "http-status-codes"
import { ErrorResponse } from "../utils/error-response"

export const errorHandler = (err: any, request: any, response: any, next: any) => {
    let error = {...err}
    error.message = err.message;
    error.stack = err.stack;

    console.log(error.message);
    console.log(error.stack);

    return response.status(StatusCodes.INTERNAL_SERVER_ERROR).json({success: false, message: error.message || '', stack: error.stack})
}