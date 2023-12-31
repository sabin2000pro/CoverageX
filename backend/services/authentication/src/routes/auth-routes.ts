import express from 'express'
import {registerUser, loginUser, forgotPassword, resetPassword, verifyEmailAddress, verifyLoginMFA} from '../controllers/auth-controllers';

const authRouter: any = express.Router();

// Mount the routes
authRouter.route('/register').post(registerUser);
authRouter.route('/login').post(loginUser as any);
authRouter.route('/verify-email').post(verifyEmailAddress)
authRouter.route('/verify-login-mfa').post(verifyLoginMFA)
authRouter.route('/forgot-password').post(forgotPassword)
authRouter.route('/reset-password').post(resetPassword);

export {authRouter}