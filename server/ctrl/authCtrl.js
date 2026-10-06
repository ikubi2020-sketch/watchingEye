import {getAllUsersServ, addNewUserServ, loginServ} from "../service/authService.js"
import {addNewUser} from "../dal/usersDbActions.js"
import { createHash } from "../middleware/authTools.js"

const fake_token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicGFzc3dvcmQiOjEyMzQ1LCJpYXQiOjE3OTEyNzU5MTR9.CFRfahZzJOP02fup68N5rekhAQ3B5HPs2ItPWsuBYJY"


export async function createadminCtrl(req, res, next) {
    const admin = {
 "username" : "momo"   ,
  "password" : "12345",
  "email" : "momo@gmail.com",
  "role" : "admin",
   "assignedArena" : "all"
    }
    const hashPassword = createHash(admin.password)
    delete admin.password
    admin.passwordHash = hashPassword
    try {
        const {data , error} = await addNewUser(admin)
        return res.status(201).json({message : data})
    } catch (error) {
        next(error)
    }
}



export async function addNewUserCtrl(req, res, next) {
    const newUser = req.body
    try {
        const result = await addNewUserServ(newUser)
        console.log(result)
        return res.status(201).json({message : result})
    } catch (error) {
        next(error)
    }
}

export async function deleteUserCtrl(req, res, next) {
    try {
        const result = await addNewUserServ()
        return res.status(201).json({message : result})
    } catch (error) {
        next(error)
    }
}

export async function getCurrentUserCtrl(req, res, next) {
    const userDetails = req.body
    try {
        const result = await getCurrentUserServ(userDetails)
        return res.status(201).json({message : result})
    } catch (error) {
        next(error)
    }
}

export async function getAllUsersCtrl(req, res, next) {
    try {
        const result = await getAllUsersServ()
        return res.status(201).json({message : result})
    } catch (error) {
        next(error)
    }
}

export async function loginCtrl(req, res, next) {
    const userData = req.body
    try {
        const token = await loginServ(userData)
        return res.status(201).json({message : token})
    } catch (error) {
        next(error)
    }
}
