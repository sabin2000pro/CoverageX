import { ErrorResponse } from "../utils/error-response"

export const errorHandler = (err: any, request: any, response: any, next: any) => {
    let error = {...err}

    return response.status()
}