import express from "express"
import {addNewUserCtrl, deleteUserCtrl, getAllUsersCtrl, getCurrentUserCtrl, loginCtrl, createadminCtrl} from "../ctrl/authCtrl.js"
import {newUserMiddleware, loginMiddleware} from "../middleware/authMiddelware.js"

const router = express.Router()

router.post("/createadmin" , createadminCtrl)

router.post("/register" ,newUserMiddleware, addNewUserCtrl)

router.post("/login" ,loginMiddleware, loginCtrl)

router.get("/me" , getCurrentUserCtrl)

router.get("/users" ,getAllUsersCtrl)

router.delete("/users/id" ,deleteUserCtrl)

export default router