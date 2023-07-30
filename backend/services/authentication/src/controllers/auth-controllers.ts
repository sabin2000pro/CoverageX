import { StatusCodes } from "http-status-codes"
import { User } from "../model/user-model";
import asyncHandler from 'express-async-handler'

export const registerUser = asyncHandler(async (request: any, response: any, next: any): Promise<any> => {
    const {} = request.body;

    return response.status(StatusCodes.CREATED).json({success: true, message: 'Register User Here', data: {} })
})

export const loginUser = asyncHandler(async (request: any, response: any, next: any): Promise<any> => {
    const {email, password} = request.body;
    return response.status(StatusCodes.OK).json({success: true, message: "Login User Here"})
})

export const forgotPassword = asyncHandler(async (request: any, response: any, next: any): Promise<any> => {
    const {email} = request.body;
    return response.status(StatusCodes.OK).json({success: true, message: "Forgot Password Here..."});
})

export const verifyEmailAddress = asyncHandler(async (request: any, response: any, next: any): Promise<any> => {
    const {userId, OTP} = request.body;
})

export const verifyLoginMFA = async (request: any, response: any, next: any): Promise<any> => {

}

export const resetPassword = async (request: any, response: any, next: any): Promise<any> => {

}

export const getLoggedInUser = async (request: any, response: any, next: any): Promise<any> => {
    const user = request.user.id
}

export const updatePassword = async (request: any, response: any, next: any): Promise<any> => {

}

export const updateProfileDetails = async (request: any, response: any, next: any): Promise<any> => {

}

export const fetchUsers = async (request: any, response: any, next: any): Promise<any> => {

}

export const fetchUserByID = async (request: any, response: any, next: any): Promise<any> => {

}

export const updateUserDetails = async (request: any, response: any, next: any): Promise<any> => {

}

export const deleteUsers = async (request: any, response: any, next: any): Promise<any> => {

}

export const deleteUserByID = async (request: any, response: any, next: any): Promise<any> => {

}