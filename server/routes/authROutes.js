import express from "express"
import {addNewUserCtrl, deleteUserCtrl, getAllUsersCtrl, getCurrentUserCtrl, loginCtrl, createadminCtrl} from "../ctrl/authCtrl.js"
import {newUserMiddleware, loginMiddleware, verifyAdminMiddleware} from "../middleware/authMiddelware.js"
import {zodValidation, loginSchema, newUserSchema} from "../middleware/middleare.js"

const router = express.Router()

router.post("/createadmin" , createadminCtrl)

router.post("/register",zodValidation(newUserSchema) ,newUserMiddleware, addNewUserCtrl)

router.post("/login", zodValidation(loginSchema) ,loginMiddleware, loginCtrl)

router.get("/me" , getCurrentUserCtrl)

router.get("/users" ,verifyAdminMiddleware, getAllUsersCtrl)

router.delete("/users/:id" ,verifyAdminMiddleware, deleteUserCtrl)

export default router