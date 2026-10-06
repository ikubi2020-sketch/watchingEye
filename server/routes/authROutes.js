import express from "express"
import {addNewUserCtrl, deleteUserCtrl, getAllUsersCtrl, getCurrentUserCtrl, loginCtrl} from "../ctrl/authCtrl.js"

const router = express.Router()


router.post("/register" ,addNewUserCtrl)


export default router