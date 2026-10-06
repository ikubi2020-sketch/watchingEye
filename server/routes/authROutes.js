import express from "express"
import {addNewUserCtrl, deleteUserCtrl, getAllUsersCtrl, getCurrentUserCtrl, loginCtrl, createadminCtrl} from "../ctrl/authCtrl.js"
import {newUserMiddleware, loginMiddleware, verifyAdminMiddleware ,validUser, generaValidUser} from "../middleware/authMiddelware.js"
import {zodValidation, loginSchema, newUserSchema} from "../middleware/middleare.js"

const router = express.Router()

router.post("/createadmin" , createadminCtrl)

router.post("/register",zodValidation(newUserSchema) ,newUserMiddleware, addNewUserCtrl)

router.post("/login", zodValidation(loginSchema) ,loginMiddleware, loginCtrl)

router.get("/me" ,validUser , getCurrentUserCtrl)

router.get("/users" ,generaValidUser, getAllUsersCtrl)

router.delete("/users/:id" ,verifyAdminMiddleware, deleteUserCtrl)

export default router