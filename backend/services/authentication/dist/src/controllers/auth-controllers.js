"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchUserByID = exports.fetchUsers = exports.updateProfileDetails = exports.updatePassword = exports.getLoggedInUser = exports.resetPassword = exports.forgotPassword = exports.loginUser = exports.registerUser = void 0;
const registerUser = (request, response, next) => __awaiter(void 0, void 0, void 0, function* () {
    const body = request.body;
});
exports.registerUser = registerUser;
const loginUser = (request, response, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = request.body;
});
exports.loginUser = loginUser;
const forgotPassword = (request, response, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { email } = request.body;
});
exports.forgotPassword = forgotPassword;
const resetPassword = (request, response, next) => __awaiter(void 0, void 0, void 0, function* () {
});
exports.resetPassword = resetPassword;
const getLoggedInUser = (request, response, next) => __awaiter(void 0, void 0, void 0, function* () {
    const user = request.user.id;
});
exports.getLoggedInUser = getLoggedInUser;
const updatePassword = (request, response, next) => __awaiter(void 0, void 0, void 0, function* () {
});
exports.updatePassword = updatePassword;
const updateProfileDetails = (request, response, next) => __awaiter(void 0, void 0, void 0, function* () {
});
exports.updateProfileDetails = updateProfileDetails;
const fetchUsers = (request, response, next) => __awaiter(void 0, void 0, void 0, function* () {
});
exports.fetchUsers = fetchUsers;
const fetchUserByID = (request, response, next) => __awaiter(void 0, void 0, void 0, function* () {
});
exports.fetchUserByID = fetchUserByID;
