import { StatusCodes } from "http-status-codes"
import { User } from "../model/user-model";

export const registerUser = async (request: any, response: any, next: any): Promise<any> => {
    const body = request.body;

    return response.status(StatusCodes.CREATED).json({success: true, message: 'Register User Here', data: {} })
}

export const loginUser = async (request: any, response: any, next: any): Promise<any> => {
    const {email, password} = request.body;
}

export const forgotPassword = async (request: any, response: any, next: any): Promise<any> => {
    const {email} = request.body;
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